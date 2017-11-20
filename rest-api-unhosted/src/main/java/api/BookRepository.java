package api;

import org.springframework.data.repository.CrudRepository;
import java.util.*;

import api.Book;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface BookRepository extends CrudRepository<Book, Long> {

	Book findByBookID(int bookID);
	List<Book> findByOwnerID(int ownerID);
	List<Book> findByTitle(String title);
	List<Book> findByTitleContainingIgnoreCase(String title);
}
