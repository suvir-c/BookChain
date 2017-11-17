# Final Project REST API - Java Spring Boot Web Application

This is the backend of our mobile application, a RESTful web service implemented using Java Spring Boot.

To build and run: 
	* $ ./mvnw clean package
	* $ java -jar target/gs-mysql-data-0.1.0.jar
 
After running, you can make the following calls to the API (endpoints are denoted by quotes):
	* Add user (username, password, longitude, latitude) 'addUser'
	* Get all users 'allUsers'
	* Get specific user (username, password) 'getUser'
	* Add book (ownerID, author, rating, title, picture, longitude, latitude) 'addBook'
	* Get all books 'allBooks'
	* Update book location by user location (userID, longitude, latitude) 'updateUserBookLocations'
	* Search users (name) 'searchUsers'
	* Update user (userID, password, name, picture) 'updateUser'
	* Get books owned by user (ownerID/userID) 'getUserBookList'
