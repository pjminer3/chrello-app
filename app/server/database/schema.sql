DROP DATABASE chrello;
CREATE DATABASE chrello;

USE chrello; 

CREATE TABLE category (
  id INTEGER AUTO_INCREMENT,
  category_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE board (
  id INTEGER AUTO_INCREMENT,
  board_name VARCHAR(30) NOT NULL,
  id_CATEGORY INTEGER NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE list (
  id INTEGER AUTO_INCREMENT,
  list_name VARCHAR(30) NOT NULL,
  id_BOARD INTEGER NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE card (
  id INTEGER AUTO_INCREMENT,
  card_content VARCHAR(225) NOT NULL,
  id_LIST INTEGER NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE board ADD FOREIGN KEY (id_CATEGORY) REFERENCES category(id);
ALTER TABLE list ADD FOREIGN KEY (id_BOARD) REFERENCES board(id);
ALTER TABLE card ADD FOREIGN KEY (id_LIST) REFERENCES list(id);

/* connect to mysql server with the command 'mysql -u root -p' password: 'mysql' */
/* run database clear/create script with '\. /Users/pjm/Desktop/hack_reactor/job_search/chrello-app/app/database/schema.sql' */
