DROP DATABASE chrello;
CREATE DATABASE chrello;

USE chrello; 

CREATE TABLE categories (
  id INTEGER AUTO_INCREMENT,
  category_name CHAR(150) NOT NULL,
  PRIMARY KEY (id)
  -- eventually add id_Users
);

CREATE TABLE boards (
  id INTEGER AUTO_INCREMENT,
  board_name CHAR(150) NOT NULL,
  id_CATEGORIES INTEGER NOT NULL,
  PRIMARY KEY (id),
  -- add id_categories as foreign key
);

CREATE TABLE lists (
  id INTEGER AUTO_INCREMENT,
  list_name CHAR(150) NOT NULL,
  id_BOARDS INTEGER NOT NULL,
  PRIMARY KEY (id),
  -- add id_boards as foreign key
);

CREATE TABLE cards (
  id INTEGER AUTO_INCREMENT,
  card_content CHAR(225) NOT NULL,
  id_LISTS INTEGER NOT NULL,
  PRIMARY KEY (id),
  -- add id_lists as foreign key
);

ALTER TABLE boards ADD FOREIGN KEY (id_CATEGORIES) REFERENCES categoroies(id);
ALTER TABLE lists ADD FOREIGN KEY (id_BOARDS) REFERENCES boards(id);
ALTER TABLE cards ADD FOREIGN KEY (id_LISTS) REFERENCES lists(id);

/* connect to mysql server with the command 'mysql -u root -p' password: 'mysql' */
