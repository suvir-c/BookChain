package hello;

import org.springframework.data.repository.CrudRepository;
import java.util.*;

import hello.Book;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface BookRepository extends CrudRepository<Book, Long> {

	List<Book> findByOwnerID(int ownerID);
}