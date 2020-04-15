DROP DATABASE IF EXISTS top_songs;

CREATE DATABASE top_songs;

USE top_songs;

CREATE TABLE top5000 (
	id INT NOT NULL,
    artist VARCHAR(100) NULL,
    song VARCHAR(250) NULL,
    year INT NULL,
    totalPop DECIMAL(10, 4) NULL,
    usaPop DECIMAL(10, 4) NULL,
    ukPop DECIMAL(10, 4) NULL,
    euPop DECIMAL(10, 4) NULL,
    worldPop DECIMAL(10, 4) NULL,
    PRIMARY KEY(id)
);

SELECT * FROM top5000;
SELECT * FROM top5000 WHERE artist="The Beatles";
SELECT count(*) AS total, artist FROM top5000 GROUP BY artist HAVING COUNT(*) > 1 ORDER BY total DESC;
SELECT * FROM top5000 WHERE year BETWEEN 1997 AND 2000;
SELECT * FROM top5000 WHERE song="Smooth";

CREATE TABLE topAlbums (
	id INT NOT NULL,
    artist VARCHAR(100) NULL,
    album VARCHAR(250) NULL,
    year INT NULL,
    totalPop DECIMAL(10, 4) NULL,
    usaPop DECIMAL(10, 4) NULL,
    ukPop DECIMAL(10, 4) NULL,
    euPop DECIMAL(10, 4) NULL,
    worldPop DECIMAL(10, 4) NULL,
    PRIMARY KEY(id)
);
SELECT * FROM topAlbums;