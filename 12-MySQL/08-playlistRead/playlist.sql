DROP DATABASE IF EXISTS playlistDB;

CREATE DATABASE playlistDB;

USE playlistDB;

CREATE TABLE songs(
	id int not null auto_increment,
    title VARCHAR(50) NULL,
    artist VARCHAR(50) NULL,
    genre VARCHAR(50) NULL,
    PRIMARY KEY(id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("Ice, Ice Baby", "Vanilla Ice", "Rap");

INSERT INTO songs (title, artist, genre)
VALUES ("Aja", 'Steely Dan', 'Jazz');

INSERT INTO songs (title,artist,genre)
VALUES ('Snails', 'The Format', 'Indie Rock');

INSERT INTO songs (title, artist, genre)
VALUES ("Cookies", 'Tools', 'Folk');

INSERT INTO songs (title, artist, genre)
VALUES ("Jormsviking", "Amon Amarth", "Death Metal");

INSERT INTO songs ( title, artist, genre)
VALUES ("Yellow", "Coldplay", "Pop");

INSERT INTO songs (title, artist, genre)
VALUES ("searchin", "The Coasters", "dowop");

INSERT INTO songs (title, artist, genre)
VALUES ("Dont Cry For Me Argentina", "Madonna", "Classic");

INSERT INTO songs (title, artist, genre)
VALUES ('Dreams', 'Fleetwood Mac', '70s pop');