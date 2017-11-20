# CSCI 201 Final Project - BookChain, a mobile application for sharing books

	- **Team Members**: Jack Zeiders, Suvir Copparam, Wei Wen Jeng, Sung Wei Wang
	- **Emails**: zeiders@usc.edu, scoppara@usc.edu, wjeng@usc.edu, sungweiw@usc.edu 
	- **Lecture Section Number**: 30303

# iOS/Android Mobile Application - React Native Frontend

The frontend of our application is a mobile application built in React Native and Redux.

To deploy:
	1. 'npm install' the dependencies needed to run the project in the root 'Frontend/' directory.
	2. 'npm run-ios' or 'npm run-android' depending on the simulator your computer has (Apple machines with Xcode installed will have the iOS simulator)

One functionality we were unable to add to the application in time was fetching the user's current location upon opening the app.
As a result, every time a location is updated (both for users and books) latitude and longitude values have been hard-coded from the front-end.

# REST API - Java Spring Boot Backend 

The backend of our mobile application is a RESTful web service implemented using Java Spring Boot and hosted using Heroku.

It is currently deployed at https://bookchain-csci201.herokuapp.com.
 
After running/refreshing, you can make the following calls to the API (endpoints are denoted by quotes):
	- **Add user** (username, name, password, longitude, latitude) 'addUser'
	- **Get all users** 'allUsers'
	- **Get specific user** (username, password) 'getUser'
	- **Add book** (ownerID, author, rating, title, cover, longitude, latitude) 'addBook'
	- **Get all books** 'allBooks'
	- **Update book** location by user location (userID, longitude, latitude) 'updateUserBookLocations'
	- **Search users** (name) 'searchUsers'
	- **Update user** (userID, password, name, picture) 'updateUser'
	- **Get books owned by user** (ownerID/userID) 'getUserBookList'
	- **Search books** (title, userID) 'searchBooks'
	- **Update book** (bookID, userID/ownerID, title, author, cover, rating) 'updateBook'
	- **Delete book** (bookID) 'deleteBook'
	- **Get nearby books sorted by distance from user** (userID) 'getNearbyBooks'
	
Thank you!