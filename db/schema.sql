/*  Execute this file from the command line by typing:
 *    sqlite3 items.db < schema.sql
 *  to create the database and the tables.*/
DROP DATABASE IF EXISTS groceryList;

CREATE DATABASE groceryList;

USE groceryList;

CREATE TABLE grocery (
  id INT NOT NULL AUTO_INCREMENT,
  label VARCHAR(250),
  quantity INT NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO grocery (label, quantity)
VALUES ('Wine', 5), ('Coke', 1), ('Chips', 1), ('Meat', 5);