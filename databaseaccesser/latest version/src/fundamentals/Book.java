package fundamentals;

import java.util.Comparator;

public class Book implements Comparator{
    private int bookID;
    public int getBookID() {
		return bookID;
	}

	public String getTitle() {
		return title;
	}
	
	public void setLatitude(double latitude) {
		this.owner_latitude = latitude;
	}
	
	public void setLongtitude(double longitude) {
		this.owner_longitude = longitude;
	}
	
	public void setDistance(double distance) {
		this.distance = distance;
	}
	
	public Double getDistance() {
		return distance;
	}
	
	private int ownerID;
	private double owner_latitude; //New
	private double owner_longitude; //New
    private String author;
    private int rating;
    private String title;
    private String picture;
    private double distance;
    
    public Book(int bookID, int ownerID, String author, int rating, String title, String picture, Double latitude, Double longitude) {
    	this.bookID = bookID;
    	this.ownerID = ownerID;
    	this.author = author;
    	this.rating = rating;
    	this.title = title;
    	this.picture = picture;
    	this.owner_latitude = latitude;
    	this.owner_longitude = longitude;
    	this.distance = 0;
    }
   

	@Override
	public int compare(Object o1, Object o2) {
		double d1 = ((Book) o1).getDistance();
		double d2 = ((Book) o2).getDistance();
		
		if (d1 > d2) {
	    		return 1;
	    }
	    if (d1 < d2) {
	    		return -1;
	    }
    return 0;
	}

}
