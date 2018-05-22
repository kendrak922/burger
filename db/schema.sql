CREATE database burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name varchar(2000) NOT NULL,
     devoured boolean NOT NULL,
    primary key(id)
)

