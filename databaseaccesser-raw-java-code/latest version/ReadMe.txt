public static User inquireUser(String username, String password)

public static String addUser(String username, String password, double latitude, double longitude) 

public static String verifyUser(String username, String password, double latitude, double longitude)

public static void updateUserLocation(int userID, double latitude, double longitude)

public static void updateUserBooks(int userID, double latitude, double longitude) 

public static String searchUser(String name) 

public static void updateUser (int userID, String password, String name, String picture)

static void addBook(int ownerID, String title, String author, String photoBlob, int rating)

public static String getUserBookList(int ownerID)

public static Vector<Book> getUserBookListNoConnect(int ownerID) 

public static String searchBook(String bookName, int userID)

public static void updateBook(int bookID, int ownerID, String title, String author, String photoBlob, int rating)

public static void deleteBook(int bookID) 

public static String getNearbyBooks(int userID)