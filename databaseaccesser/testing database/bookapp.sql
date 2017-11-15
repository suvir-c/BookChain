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
    
INSERT INTO Usertable(username, password, name, picture) VALUES('ttrojan', 'fighton', 'Tommy', 'null');
INSERT INTO Usertable(username, password, name, picture) VALUES('ucuclala', 'booooo', 'Tommy', 'null');
INSERT INTO Usertable(username, password, name, picture) VALUES('csci201', 'rockon', 'Miller', 'null');
INSERT INTO Usertable(username, password, name, picture) VALUES('wayne0704', 'dark0704', 'Wayne', 'null');



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

INSERT INTO Book(ownerID, title, author, picture, rating) VALUES(1, 'USC HISTORY','Tommy Trojan', 'null', '5');
INSERT INTO Book(ownerID, title, author, picture, rating) VALUES(1, 'How to be awesom','Tommy Trojan', 'null', '3');
INSERT INTO Book(ownerID, title, author, picture, rating) VALUES(2, 'How to dance like unicorn','Justin Bieber', 'null', '5');
INSERT INTO Book(ownerID, title, author, picture, rating) VALUES(3, 'How to torture student','Satan', 'null', '5');
INSERT INTO Book(ownerID, title, author, picture, rating) VALUES(4, 'Defusing bomb','FBI', 'null', '2');
DELETE FROM Book WHERE bookID = 3;
INSERT INTO Book(ownerID, title, author, picture, rating) VALUES(3, 'How to torture student','Satan', 'null', '5');


CREATE TABLE Message(
	ChatID int(100) primary key not null auto_increment,
    user1ID int(100) not null,
    user2ID int(100) not null,
    message varchar(1000) not null,
    FOREIGN Key fk1 (user1ID) REFERENCES Usertable(userID),
    FOREIGN Key fk2(user2ID) REFERENCES Usertable(userID)
);

INSERT INTO Message(user1ID, user2ID, message) VALUES(1,2,'U SUCK');
INSERT INTO Message(user1ID, user2ID, message) VALUES(4,3,'NO HW?');
INSERT INTO Message(user1ID, user2ID, message) VALUES(2,1,'YOYOYOYOYOY');
INSERT INTO Message(user1ID, user2ID, message) VALUES(3,4,'Enjoy A4');
INSERT INTO Message(user1ID, user2ID, message) VALUES(1,3,'FIGHT ON FIGHT ON');
