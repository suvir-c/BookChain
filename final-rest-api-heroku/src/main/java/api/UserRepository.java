package api; 

import org.springframework.data.repository.CrudRepository;

import api.User;
import java.util.*;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete
// UserRepository is an abstraction on top of our User table in the mySQL database

public interface UserRepository extends CrudRepository<User, Long> {

	User findByUsernameAndPassword(String username, String password);
	
	List<User> findByName(String name);

	List<User> findByNameContainingIgnoreCase(String searchTerm);
	
	User findByUserID(int userID);
	
	User findByUsername(String username);
}
