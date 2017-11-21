package api;

import java.util.Comparator;
import api.Book;
/* Comparator class that is invoked to sort books by distance from the user who launches the query */
public class Book_DistanceComp implements Comparator<Book> {

	@Override
	public int compare(Book b1, Book b2) {
		if(b1.getDistance() > b2.getDistance()) {
			return 1;
		}
		else if(b2.getDistance() > b1.getDistance() ) {
			return -1;
		}
		return 0;
	}
}