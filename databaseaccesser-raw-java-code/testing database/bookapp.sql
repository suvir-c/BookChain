DROP DATABASE if exists Bookapp;
CREATE DATABASE Bookapp;
USE Bookapp;
CREATE TABLE Usertable(
	userID int(100) primary key not null auto_increment,
    username varchar(100) not null,
    password varchar(100) not null,
    longitude double(100,10),
    latitude double(100,10),
    name varchar (100),
    picture varchar(100)
);
    

CREATE TABLE Book(
	bookID int(100) primary key not null auto_increment,
    ownerID int(100) not null,
    title varchar(100) not null,
    author varchar(100) not null,
    picture varchar(100) not null,
    rating int(2) not null,
    longitude double(100,10),
    latitude double(100,10),
    FOREIGN KEY fk1 (ownerID) REFERENCES Usertable(userID)
);


