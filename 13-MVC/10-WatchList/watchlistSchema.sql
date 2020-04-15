-- Drops the task_saver_db if it already exists --
DROP DATABASE IF EXISTS movie_planner_db;

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE movie_planner_db;

USE movie_planner_db;

-- Create the table tasks.
CREATE TABLE movies (
  id int NOT NULL AUTO_INCREMENT,
  movie varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO movies (movie) VALUES ('Rush Hour');