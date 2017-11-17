package utilities;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.TreeMap;
import java.util.Vector;

import fundamentals.Book;
import fundamentals.Book_DistanceComp;
import fundamentals.User;

public class  databaseAccesser {
	//Basic fields
	private static Connection conn = null;
	private static ResultSet rs = null;
	private static Statement st = null;
	
	//Common connect for JDBC
	public static void connect() {
		try{
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection("jdbc:mysql://csci201fp.cso3z5olvtmj.us-west-1.rds.amazonaws.com:3306/Bookapp?user=wayne0704w&password=dark0704&useSSL=false");
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
		Vector<Book> userBook = null;
		String name = null;
		Double latitude = null;
		Double longitude = null;
		try {
			st = conn.createStatement();
			rs= st.executeQuery("SELECT * from Usertable where username='"+username +"' AND password='"+password+"'");
			//if user exist, create such user class
			if(rs.next()) {
				ID = rs.getInt("userID");
				picture = rs.getString("picture");
				name = rs.getString("name");
				latitude = rs.getDouble("latitude");
				longitude =rs.getDouble("longitude");
				userBook = getUserBookListNoConnect(ID);
				currentUser = new User(username, password, name,  ID, picture, userBook, latitude, longitude);
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
	public static String addUser(String username, String password, double latitude, double longitude) {
		
		User checkUser = inquireUser(username, password);
		//If already exist, return emmpmty user
		if(checkUser !=null) {
			System.out.println("User already exist");
			User emptyUser = new User();
			String json_emptyUser = Parser.userToJson(emptyUser);
			return json_emptyUser;
		}
		//if user doesn't exist, insert user into database
		else {
			try {
				connect();
				st = conn.createStatement();
				//TODO: Naming convetion: userTable
				st.executeUpdate("INSERT INTO Usertable(username, password, latitude, longitude) VALUES('"+username+"', '"+password+"', "+latitude+", "+longitude+")");
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
		//TODO2 (Done): Set user location
		newUser.setLatitude(latitude);
		newUser.setLongitude(longitude);
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
		return json_newUser;
	}
	
	//Invoke upon "Login", return a jsonfied user class if success		
	//Input: username, password
	//Output: If Success, return the whole User class in JSON. If fail, return empty User class in JSON
	//FAIL CASE: username doesn't exist OR password doesn't match with the username.
	public static String verifyUser(String username, String password, double latitude, double longitude) {
		//TODO: Implementation
		//Inquire if username and password combination exist
		User loginUser = inquireUser(username, password);
		//If not, turn it into json
		if(loginUser !=null) {
			
			//TODO2: Update new latitude and longitude in database, noted that they are given as input now
			//Use the function updateUserLocation(int userID, double latitude, double longitude)
			updateUserLocation(loginUser.getUserID(), latitude, longitude);
			//TODO2 (Done): Update new lattitude and longitude in actual User object before parse to JSON
			loginUser.setLatitude(latitude);
			loginUser.setLongitude(longitude);
			
			String json_User = Parser.userToJson(loginUser);
			return json_User;
		}
		//if exist, return a null user
		else {
			User emptyUser = new User();
			String json_emptyUser = Parser.userToJson(emptyUser);
			return json_emptyUser;
		}
	}
		
	public static void updateUserLocation(int userID, double latitude, double longitude) {
		//TODO2: Implementation
		connect();
		try {
			st=conn.createStatement();
			st.execute("UPDATE Usertable SET latitude = "+latitude+" longitude = " + longitude +" WHERE userID = "+userID);
		}catch(SQLException sqle) {
			System.out.println("SQLE in updateUserlocation: " + sqle.getMessage());
		}finally {
			close();
		}
		//TODO2: ALSO, call updateUserBooks(int userID, double latitude, double longitude)
		updateUserBooks(userID, latitude, longitude);
	}
	
	public static void updateUserBooks(int userID, double latitude, double longitude) {
		//TODO2: Implementation
		connect();
		try {
			st=conn.createStatement();
			st.execute("UPDATE Book SET latitude = " + latitude +" longitude = " + longitude + " WHERE ownerID = " +userID);
		}catch(SQLException sqle) {
			System.out.println("SQLE in updateBooklocation: " + sqle.getMessage());
		}finally {
			close();
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
				String picture = rs.getString("picture");
				String exactName = rs.getString("name");
				Double latitude = rs.getDouble("latitude");
				Double longitude = rs.getDouble("longitude");
				int userID = rs.getInt("userID");
				Vector<Book> books = getUserBookListNoConnect(userID);
				User foundUser = new User(username, password, exactName, userID, picture,books, latitude, longitude);
				userList.add(foundUser);
			}
		}catch(SQLException sqle) {
			System.out.println("SQLE in searchUser: "+ sqle.getMessage());
		}finally {
			close();
		}
		//Chaning booklist into json string
		String json_userList = Parser.userListToJson(userList);
		return json_userList;
	}
  
	
	//Input new user information
	//output none
	//update user info
	public static void updateUser (int userID, String password, String name, String picture) {
		//TODO: Find the user in userTable using userID, update all fields.
		connect();
		try {
			st = conn.createStatement();
			st.execute("UPDATE Usertable SET password='"+password+"', name='"+name+"', picture='"+picture+"	 WHERE userID="+userID);
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
	public static void addBook(int ownerID, String title, String author, String photoBlob, int rating) {
		connect();
		try{
			Double latitude = null;
			Double longitude = null;
			st = conn.createStatement();
			//getting latitude and longitude from owner
			rs = st.executeQuery("SELECT * from Usertable where userID = " + ownerID);
			if(rs.next()) {
				latitude = rs.getDouble("latitude");
				longitude = rs.getDouble("longitude");
			}
			
			//TODO2: Also add book location based on the ownerID's lattitude and longitude, noted that now we also store that in database
			st.executeUpdate("INSERT INTO Book(ownerID, title, author, picture, rating, latitude, longitude) VALUES("+ownerID+", '"+title+"','"+author+"', '"+photoBlob+"', "+rating+", "+latitude +", "+ longitude+" )");
			
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
				Double latitude = rs.getDouble("latitude");
				Double longitude = rs.getDouble("longitude");
				Book book = new Book(bookID, ownerID, author, rating,title,picture, latitude, longitude);
				bookList.add(book);
			}
		}catch(SQLException sqle){
		System.out.println ("SQLE in getbooklist: " + sqle.getMessage());
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
				Double latitude = rs2.getDouble("latitude");
				Double longitude = rs2.getDouble("longitude");
				Book book = new Book(bookID, ownerID, author, rating,title,picture, latitude, longitude);
				bookList.add(book);
			}
		}catch(SQLException sqle){
		System.out.println ("SQLE in no connection book list " + sqle.getMessage());
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
	//TODO2: Calcualte distance, sort
	public static String searchBook(String bookName, int userID) {
		Vector<Book> bookList = new Vector<Book>();
		Double latitude = null;
		Double longitude = null;
		connect();
		
		//TODO2: Grab user location
		//Create a Hash Map, this is the same implementation of sort in the function getNearbyBooks(int userID), see that first would be better
		try {
			st=conn.createStatement();
			rs = st.executeQuery("SELECT * from Usertable WHERE userID ="+userID);
			if(rs.next()) {
				latitude = rs.getDouble("latitude");
				longitude = rs.getDouble("longitude");
			}
			rs = null;
			rs = st.executeQuery("SELECT * from book WHERE title='"+bookName+"'");
			//While there is book that matches the given book name, add them into book list
			while(rs.next())
			{
				int bookID = rs.getInt("bookID");
				int ownerID = rs.getInt("ownerID");
				String author = rs.getString("author");
				int rating = rs.getInt("rating");
				String title = rs.getString("title");
				String picture = rs.getString("picture");
				Double bookLatitude = rs.getDouble("latitude");
				Double bookLongitude = rs.getDouble("longitude");
				Book book = new Book(bookID, ownerID, author, rating,title,picture,bookLatitude,bookLongitude);
				//bookList.add(book);
				
				//TODO2: Grab book location
				
				//TODO2: Calculate distance using the getDistance function
				Double distance = getDistance(latitude, longitude, bookLatitude, bookLongitude, "M");
				book.setDistance(distance);
				//TODO2: Insert into the HashMap<double, Book>, which is a distance/Book pair
				bookList.addElement(book);
			}
			//TODO2: Turn bookList into JSON String, which is done at line 357 already.
		}catch(SQLException sqle) {
			System.out.println("sqle in searchBook: " + sqle.getMessage());
		}finally {
			close();
		}
		Collections.sort(bookList, new Book_DistanceComp());
		//turn book list into json string
		String json_bookList = Parser.bookListToJson(bookList);
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
	
	//TODO2: Implementation
	//Input: userID
	//Output: JSON String of booklist, sorted in distance
	public static String getNearbyBooks(int userID) {
		Double latitude = null;
		Double longitude = null;
		Vector <Book> bookList = new Vector<Book>(); 
		connect();
		
		//Grab the location of the user
		try {
			st=conn.createStatement();
			//getting user coordinates
			rs = st.executeQuery("SELECT * from Usertable WHERE userID = " + userID);
			if(rs.next()) {
				latitude = rs.getDouble("latitude");
				longitude = rs.getDouble("longitude");
			}
			//reset rs
			rs = null;
			//for all book
			rs = st.executeQuery("SELECT * from book");
			while(rs.next()) {
				int bookID = rs.getInt("bookID");
				int ownerID = rs.getInt("ownerID");
				String author = rs.getString("author");
				int rating = rs.getInt("rating");
				String title = rs.getString("title");
				String picture = rs.getString("picture");
				Double bookLatitude = rs.getDouble("latitude");
				Double bookLongitude = rs.getDouble("longitude");
				//creating a book instance
				Book book = new Book(bookID, ownerID, author, rating,title,picture,bookLatitude,bookLongitude);
				//calculatin distance
				Double distance = getDistance(latitude, longitude, bookLatitude, bookLongitude, "M");
				book.setDistance(distance);
				//push into bookList
				//TODO3
				/****
				 * 
				 * Bug in duplicated distance   try custom comparator 
				 */
				
				bookList.add(book);
			}
			
		}catch(SQLException sqle){
			System.out.println("SQLE in nearby book: " + sqle.getMessage());
		}finally {
			close();
		}
		Collections.sort(bookList, new Book_DistanceComp());
		String json_bookList = Parser.bookListToJson(bookList);
		
		return json_bookList;

		//Get all the books, size dedpending on max display (now assume all)
		
		//FOR each book, calculate distance using getDistance(double lat1, double lon1, double lat2, double lon2, "M")
		//Push them in a  Map<String, String> unsortMap = new HashMap<double, Book>();
		
		//After the completion of the for loop, Map<String, String> treeMap = new TreeMap<String, String>(unsortMap);
		
		//After the casting, FOREACH Value, add to Vector<Book> returnedBookList = new Vector<Book>();
		
		//Reference: https://www.mkyong.com/java/how-to-sort-a-map-in-java/
		
		//Parse returnedBookList to JSON String
		
	
	}
	
	private static double getDistance(double lat1, double lon1, double lat2, double lon2, String unit) {
		double theta = lon1 - lon2;
		double dist = Math.sin(deg2rad(lat1)) * Math.sin(deg2rad(lat2)) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.cos(deg2rad(theta));
		dist = Math.acos(dist);
		dist = rad2deg(dist);
		dist = dist * 60 * 1.1515;
		if (unit == "K") {
			dist = dist * 1.609344;
		 } 
		else if (unit == "N") {
			dist = dist * 0.8684;
		}
		return (dist);
	}
	/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
	/*::  This function converts decimal degrees to radians             :*/
	/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
	private static double deg2rad(double deg) {
		return (deg * Math.PI / 180.0);
	}
	/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
	/*::  This function converts radians to decimal degrees             :*/
	/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
	private static double rad2deg(double rad) {
		return (rad * 180.0 / Math.PI);
	}
	
	
  
	
	public static void main(String args[]) {
		//testing code
		addUser("Wayne", "Hey", 8.0, 5.5);
	}
	
}
