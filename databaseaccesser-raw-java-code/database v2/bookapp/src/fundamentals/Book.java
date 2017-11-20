package fundamentals;

public class Book {
    private int bookID;
    public int getBookID() {
		return bookID;
	}

	public String getTitle() {
		return title;
	}

	private int ownerID;
    private String author;
    private int rating;
    private String title;
    private String picture;
    
    public Book(int bookID, int ownerID, String author, int rating, String title, String picture) {
    	this.bookID = bookID;
    	this.ownerID = ownerID;
    	this.author = author;
    	this.rating = rating;
    	this.title = title;
    	this.picture = picture;
    }

}
