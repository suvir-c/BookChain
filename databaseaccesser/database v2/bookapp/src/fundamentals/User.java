package fundamentals;


/* Basic structure of a User instance.
 * 
 * 
 * 
 * 
 */

import java.util.Vector;

public class User {
	//Basic Data Member
	private int userID;
	private String username;
	private String password;
	private String name;
	private Vector<Book> books;
	
	private String picture; //toChange
	private String lastKnownPosition; //toChange
	
	
	//Default Constructor, setting all data fields to empty.
	//For error case
	public User() {
		this.username = "";
		this.password = "";
		this.name = "";
		this.books = new Vector<Book>();
		
		this.picture = "";
		this.lastKnownPosition = "";
		
	}
	//Constructor for passing information to front end
	public User(String username, String password, String name, int ID,   String picture, String lastKnownPosition, Vector<Book> books) {
		this.username=username;
		this.password=password;
		this.name = name;
		this.userID = ID;
		this.books = books;
		this.picture = picture;
		this.lastKnownPosition = lastKnownPosition;
	}
	
	//Setter and Getter, might not be useful
	public int getUserID() {
		return userID;
	}
	public void setUserID(int userID) {
		this.userID = userID;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Vector<Book> getBooks() {
		return books;
	}
	public void setBooks(Vector<Book> books) {
		this.books = books;
	}
	public String getPicture() {
		return picture;
	}
	public void setPicture(String picture) {
		this.picture = picture;
	}
	public String getLastKnownPosition() {
		return lastKnownPosition;
	}
	public void setLastKnownPosition(String lastKnownPosition) {
		this.lastKnownPosition = lastKnownPosition;
	}
	
	

}
