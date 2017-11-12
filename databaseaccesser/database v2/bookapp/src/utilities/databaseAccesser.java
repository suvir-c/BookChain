package utilities;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Vector;
import fundamentals.*;

public class  databaseAccesser {
	//Basic fields
	private static Connection conn = null;
	private static ResultSet rs = null;
	private static Statement st = null;
	
	//Common connect for JDBC
	public static void connect() {
		try{
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection("jdbc:mysql://localhost/bookapp?user=root&password=root&useSSL=false");
		}catch(SQLException sqle){
		System.out.println ("Sqle in connect: " + sqle.getMessage());
		}catch(ClassNotFoundException cnfe){
		System.out.println("cnfe in connect: " +  cnfe.getMessage());
		}
	}
	//Common close for JDBC
	public static void close() {
		try{
			if(rs!=null){
				rs.close();
				rs=null;
				}
			if(st !=null){
				st.close();
				st=null;
			}
			if(conn !=null){
				conn.close();
				conn=null;
			}
		}catch (SQLException sqle){
			System.out.println("sqle in close: "+ sqle.getMessage());
		}
	}
	
	
	//INPUT username and password
	//Find user combination
	//Return user class if exist
	//Return null ifi not exist
	public static User inquireUser(String username, String password) {
		connect();
		User currentUser = null;
		//User variables
		Integer ID = null;
		String picture = null;
		String position = null;
		Vector<Book> userBook = null;
		String name = null;
		try {
			st = conn.createStatement();
			rs= st.executeQuery("SELECT * from Usertable where username='"+username +"' AND password='"+password+"'");
			//if user exist, create such user class
			if(rs.next()) {
				ID = rs.getInt("userID");
				picture = rs.getString("picture");
				position = rs.getString("position");
				name = rs.getString("name");
				userBook = getUserBookListNoConnect(ID);
				currentUser = new User(username, password, name,  ID, picture, position, userBook);
			}
		}catch(SQLException sqle) {
			System.out.println("SQLE in inquireUser: "  + sqle.getMessage());
		}finally{
			close();
		}
		//will return null if search returns nothing
		return currentUser;
	}
	
	
	
	
	//Invoke upon "Sign Up", return JSON String
    //Input: username, password
    //Output: If success, new User class in JSON. If fail, empty User class in JSON
    //FAIL CASE: The new User's username already existed in the database
	public static String addUser(String username, String password) {
		
		User checkUser = inquireUser(username, password);
		//If already exist, return emmpmty user
		if(checkUser !=null) {
			System.out.println("User already exist");
			User emptyUser = new User();
			String json_emptyUser = Parser.userToJson(emptyUser);
			System.out.println(json_emptyUser);
			return json_emptyUser;
		}
		//if user doesn't exist, insert user into database
		else {
			try {
				connect();
				st = conn.createStatement();
				//TODO: Naming convetion: userTable
				st.executeUpdate("INSERT INTO Usertable(username, password) VALUES('"+username+"', '"+password+"')");
				}catch (SQLException sqle){
					
					//To Wei Wen, see here as an example
					System.out.println(sqle.getMessage());
					
				}
		}
		//TODO: Instead of return Boolean, return a Jsonfied user class.
		//Create a new user and set the password and username
		User newUser = new User();
		newUser.setUsername(username);
		newUser.setPassword(password);
		//Find the id of this new user
		int newUserID = 0;
		try {
			rs = st.executeQuery("SELECT * from Usertable where username='"+username+"' AND password='"+password+"'");
			if(rs.next()) {
				newUserID = rs.getInt("userID");
			}
		}catch(SQLException sqle) {
			System.out.println(sqle.getMessage());
		}finally {
			close();
		}
		newUser.setUserID(newUserID);
		String json_newUser = Parser.userToJson(newUser);
		System.out.println(json_newUser);
		return json_newUser;
	}
	
	//Invoke upon "Login", return a jsonfied user class if success		
		//Input: username, password
		//Output: If Success, return the whole User class in JSON. If fail, return empty User class in JSON
		//FAIL CASE: username doesn't exist OR password doesn't match with the username.
		public static String verifyUser(String username, String password) {
			//TODO: Implementation
			//Inquire if username and password combination exist
			User loginUser = inquireUser(username, password);
			//If not, turn it into json
			if(loginUser !=null) {
				String json_User = Parser.userToJson(loginUser);
				System.out.println(json_User);
				return json_User;
			}
			//if exist, return a null user
			else {
				User emptyUser = new User();
				String json_emptyUser = Parser.userToJson(emptyUser);
				System.out.println(json_emptyUser);
				return json_emptyUser;
			}
		}
	

	//Invoke upon "Search Users", return a jsonfied user list for front end.
	//Input: the Name typed by the user.
	//Output: If success, return all the users in JSON. If fail, return empty user list in JSON		
	//FAIL CASE: No instances of such a Name in userTable.
	public static String searchUser(String name) {
		connect();
		Vector<User> userList = new Vector<User>();
		try {
			st=conn.createStatement();
			rs = st.executeQuery("SELECT * from Usertable where name='"+name+"'");
			//Finding all name that matches searchterm and add into booklist
			while(rs.next()) {
				String username = rs.getString("username");
				String password = rs.getString("password");
				String position = rs.getString("position");
				String picture = rs.getString("picture");
				String exactName = rs.getString("name");
				int userID = rs.getInt("userID");
				Vector<Book> books = getUserBookListNoConnect(userID);
				User foundUser = new User(username, password, exactName, userID, picture, position, books);
				userList.add(foundUser);
			}
		}catch(SQLException sqle) {
			System.out.println("SQLE in searchUser: "+ sqle.getMessage());
		}finally {
			close();
		}
		//Chaning booklist into json string
		String json_userList = Parser.userListToJson(userList);
		System.out.println(json_userList);
		return json_userList;
	}
  
	
	//Input new user information
	//output none
	//update user info
	public static void updateUser (int userID, String password, String name, String picture, String lastKnownPosition) {
		//TODO: Find the user in userTable using userID, update all fields.
		connect();
		try {
			st = conn.createStatement();
			st.execute("UPDATE Usertable SET password='"+password+"', name='"+name+"', picture='"+picture+"', position='"+lastKnownPosition+"' WHERE userID="+userID);
		}catch(SQLException sqle) {
			System.out.println("SQLE in updateUser: "+sqle.getMessage());
		}finally {
			close();
		}
	}
	
	
	//Invoke upon "Add Book".
	//Input: take in book details
	//Output: none
	//Add book into book database
	//TODO
	static void addBook(int ownerID, String title, String author, String photoBlob, int rating) {
		connect();
		try{
			st = conn.createStatement();
			st.executeUpdate("INSERT INTO Book(ownerID, title, author, picture, rating) VALUES("+ownerID+", '"+title+"','"+author+"', '"+photoBlob+"', "+rating+")");
			
		}catch(SQLException sqle){
			System.out.println ("sqle in addBook: " +  sqle.getMessage());
		}finally{
			close();
		}
	}
	
	//Invoke upon "Get User Book List"
	//Input: userID
	//Output: JSON String of the booklist
	public static String getUserBookList(int ownerID) {
		connect();
		Vector<Book> bookList = new Vector<Book>();
		try{
			st = conn.createStatement();
			rs = st.executeQuery("SELECT * from Book where ownerID="+ownerID);
			//While there is book that match the ownerID, create a book class and add it into booklist
			while(rs.next())
			{
				int bookID = rs.getInt("bookID");
				String author = rs.getString("author");
				int rating = rs.getInt("rating");
				String title = rs.getString("title");
				String picture = rs.getString("picture");
				Book book = new Book(bookID, ownerID, author, rating,title,picture);
				bookList.add(book);
			}
		}catch(SQLException sqle){
		System.out.println (sqle.getMessage());
		}finally{
			close();
		}
		
		String json_booklist = Parser.bookListToJson(bookList);
		return json_booklist;
	}
	
	//Invoke by other function
	//Does not overwrite rs or st
	//return booklist of specificed User
	public static Vector<Book> getUserBookListNoConnect(int ownerID) throws SQLException {
		Vector<Book> bookList = new Vector<Book>();
		Statement st2 = null;
		ResultSet rs2 = null;
		try{
			
			st2 = conn.createStatement();
			rs2 = st2.executeQuery("SELECT * from Book where ownerID="+ownerID);
			while(rs2.next())
			{
				int bookID = rs2.getInt("bookID");
				String author = rs2.getString("author");
				int rating = rs2.getInt("rating");
				String title = rs2.getString("title");
				String picture = rs2.getString("picture");
				Book book = new Book(bookID, ownerID, author, rating,title,picture);
				bookList.add(book);
			}
		}catch(SQLException sqle){
		System.out.println ("SQLE in no connection " + sqle.getMessage());
		}finally {
			rs2.close();
			st2.close();
		}
		return bookList;
	}
	
	//Invoke upon "Search Books", return a jsonfied booklist for front end.
	//Input: the bookName typed by the user.
	//Output: If success, return all the books in JSON. If fail, return empty booklist in JSON
	//FAIL CASE: No instances of such a bookName in bookTable.
	public static String searchBook(String bookName) {
		Vector<Book> bookList = new Vector<Book>();
		connect();
		try {
			st=conn.createStatement();
			rs = st.executeQuery("SELECT * from book where title='"+bookName+"'");
			//While there is book that matches the given book name, add them into book list
			while(rs.next())
			{
				int bookID = rs.getInt("bookID");
				int ownerID = rs.getInt("ownerID");
				String author = rs.getString("author");
				int rating = rs.getInt("rating");
				String title = rs.getString("title");
				String picture = rs.getString("picture");
				Book book = new Book(bookID, ownerID, author, rating,title,picture);
				bookList.add(book);
			}
		}catch(SQLException sqle) {
			System.out.println("sqle in searchBook: " + sqle.getMessage());
		}finally {
			close();
		}
		//turn book list into json string
		String json_bookList = Parser.bookListToJson(bookList);
		System.out.println(json_bookList);
		return json_bookList;
	}
	
	//Invoke upon "Edit book"
	//Input: All information of a book.
	//Output:void
	//FAIL CASE: None
	public static void updateBook(int bookID, int ownerID, String title, String author, String photoBlob, int rating) {
		//TODO: Find the book, update all information in the bookTable.
		connect();
		try {
			st=conn.createStatement();
			st.execute("UPDATE book SET ownerID ='"+ownerID+"', title='"+title+"', author='"+author+"', picture='"+photoBlob+"', rating='"+rating+"' WHERE bookID="+bookID);
		}catch(SQLException sqle) {
			System.out.println("SQLE in updateBook: " + sqle.getMessage());
		}finally {
			close();
		}
	}
		
	//input: bookID
	//output: none
	//remove book from database
	public static void deleteBook(int bookID) {
		//TODO: Use the bookID to find the book in bookTable, delete it.
		connect();
		try {
			st=conn.createStatement();
			st.execute("DELETE FROM Book WHERE bookID="+bookID);
		}catch(SQLException sqle) {
			System.out.println("SQLE in delte book: " + sqle.getMessage());
		}
	}
  
	
	public static void main(String args[]) {
		//testing code
	}
	
}
