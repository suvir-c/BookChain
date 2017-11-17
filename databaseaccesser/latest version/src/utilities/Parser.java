package utilities;
import java.util.Vector;

import com.google.gson.Gson;

import fundamentals.Book;
import fundamentals.User;
public class Parser {
	
	//User
	public static String userToJson(User user) {
		Gson gson = new Gson();
        String json = gson.toJson(user);
        
        return json;
	}
	
	public static User jsonToUser(String jsonString) {
		Gson gson = new Gson();
		User user = gson.fromJson(jsonString, User.class);
        
		return user;
	}
	
	
	//Book
	public static String bookToJson(Book book) {
		Gson gson = new Gson();
        String json = gson.toJson(book);
        
        return json;
	}
	
	public static Book jsonToBook(String jsonString) {
		Gson gson = new Gson();
		Book book = gson.fromJson(jsonString, Book.class);
        
		return book;
	}
	
	public static String bookListToJson(Vector<Book> booklist) {
		Gson gson = new Gson();
        String json = gson.toJson(booklist);
        
        return json;
	}
	
	public static String userListToJson(Vector<User> userlist) {
		Gson gson = new Gson();
        String json = gson.toJson(userlist);
        
        return json;
	}
}
