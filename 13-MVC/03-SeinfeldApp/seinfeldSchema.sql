-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS seinfeld_db;
-- Created the DB "wizard_schools_db" (only works on local connections)
CREATE DATABASE seinfeld_db;
-- Use the DB wizard_schools_db for all the rest of the script
USE seinfeld_db;
-- Created the table "schools"
CREATE TABLE actors (
  id int AUTO_INCREMENT NOT NULL,
  name varchar(30) NOT NULL,
  attitude varchar(30) NOT NULL,
  coolness int NOT NULL,
  PRIMARY KEY(id)
);
-- Inserted a set of records into the table
INSERT INTO actors (name, attitude, coolness)
VALUES ("Jerry", "relaxed", 70);
INSERT INTO actors (name, attitude, coolness)
VALUES ("Elaine", "righteous", 60);
INSERT INTO actors (name, attitude, coolness)
VALUES ("George", "slow-witted", 70);
INSERT INTO actors (name, attitude, coolness)
VALUES ("Kramer", "doofus", 90);