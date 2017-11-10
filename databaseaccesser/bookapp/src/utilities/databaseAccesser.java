package utilities;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Vector;
import fundamentals.Book;

public class  databaseAccesser {
	private static Connection conn = null;
	private static ResultSet rs = null;
	private static Statement st = null;
	
	
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
	
	public static void close() {
		try{
			if(rs!=null){
				rs.close();
				}
			if(st !=null){
				st.close();
			}
			if(conn !=null){
				conn.close();
			}
		}catch (SQLException sqle){
			System.out.println("sqle in close: "+ sqle.getMessage());
		}
	}
	
	
	static boolean addUser(String username, String password) {
		connect();
		try {
		st = conn.createStatement();
		st.executeUpdate("INSERT INTO Usertable(username, password) VALUES('"+username+"', '"+password+"')");
		}catch (SQLException sqle){
			System.out.println(sqle.getMessage());
			return false;
		}finally{
			close();
		}
		return true;
	}
	
	static int addBook(int ownerID, String title, String author, String photoBlob, int rating) {
		connect();
		int bookID = -1;
		try{
			st = conn.createStatement();
			st.executeUpdate("INSERT INTO Book(ownerID, title, author, picture, rating) VALUES("+ownerID+", '"+title+"','"+author+"', '"+photoBlob+"', "+rating+")");
			rs = st.executeQuery("SELECT * from Book where ownerID="+ownerID+" AND title='"+title+"'");
			while(rs.next())
			{
				bookID = rs.getInt("bookID");
			}
		}catch(SQLException sqle){
			System.out.println ("sqle in addBook: " +  sqle.getMessage());
			return -1;
		}finally{
			close();
		}
		return bookID;
	}
	
	public static Vector<Book> getUserBookList(int ownerID) {
		connect();
		Vector<Book> bookList = new Vector<Book>();
		try{
			st = conn.createStatement();
			rs = st.executeQuery("SELECT * from Book where ownerID="+ownerID);
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
			try{
				if(rs!=null){
					rs.close();
					}
				if(st !=null){
					st.close();
				}
				if(conn !=null){
					conn.close();
				}
			}catch (SQLException sqle){
				System.out.println("Sqle in addbook: " + sqle.getMessage());
				return null;
			}
		}
		return bookList;
	}
	public static void main(String args[]) {
		//testing code
	}
	
}
