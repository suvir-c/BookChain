package hello;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Book {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
    private int bookID;
    private int ownerID;
	private double owner_latitude; //New
	private double owner_longitude; //New
    private String author;
    private int rating;
    private String title;
    private String picture;
    
    
    public int getBookID() {
		return bookID;
	}

	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public void setOwnerID(int ownerID) {
		this.ownerID = ownerID;
	}
	
	public int getOwnerID() {
		return this.ownerID;
	}
	
	public void setAuthor(String author) {
		this.author = author;
	}
	
	public String getAuthor() {
		return this.author;
	}
	
	public void setPicture(String picture) {
		this.picture = picture;	
	}
	
	public String getPicture() {
		return this.picture;	
	}
	
	public void setLatitude(double latitude) {
		this.owner_latitude = latitude;
	}
	
	public double getLatitude() {
		return this.owner_latitude;
	}
	
	public void setLongitude(double longitude) {
		this.owner_longitude = longitude;
	}
	
	public double getLongitude() {
		return this.owner_longitude;
	}
	
	public int getRating() {
		return this.rating;
	}
	
	public void setRating(int rating) {
		this.rating = rating;
	}
    
    public Book(int bookID, int ownerID, String author, int rating, String title, String picture, double longitude, double latitude) {
    	this.bookID = bookID;
    	this.ownerID = ownerID;
    	this.author = author;
    	this.rating = rating;
    	this.title = title;
    	this.picture = picture;
    	this.owner_latitude = latitude;
    	this.owner_longitude = longitude;
    }
    
    public Book() {
		this.ownerID = 0;
		this.author = "";
		this.rating = 0;
		this.title = "";
		this.picture = "";
		this.owner_latitude = 0;
		this.owner_longitude = 0;
    }

}
