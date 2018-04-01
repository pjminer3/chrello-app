import Sequelize from 'sequelize';
import config from './config';
// We have access to all database models via ./config

const db = new Sequelize('chrello', 'root', 'mysql', { host: 'localhost', dialect: 'mysql' });

db
  .authenticate()
  .then(() => {
    console.log('Connection to Sequelize mysql2 database has been established successfully');
  })
  .catch((err) => {
    console.log('Unable to connect to database: ', err);
  });

const { Category, Board, List, Card } = config(db);

// Drops existing DB and adds initial data
db.sync({ force: true })
  .then(() => {
    return Category.create({ categoryName: 'Personal Boards-' });
  })
  .then(() => {
    return Category.create({ categoryName: 'TMs-' });
  })
  .then(() => {
    return Board.create({ boardName: 'I\'m in the Database!', categoryId: 1 });
  })
  .then(() => {
    return Board.create({ boardName: 'Danny-', categoryId: 2 });
  })
  .then(() => {
    return Board.create({ boardName: 'Kirk-', categoryId: 2 });
  })
  .then(() => {
    return List.create({ listName: 'Chrello Board-', boardId: 2 });
  })
  .then(() => {
    return List.create({ listName: 'Toy Problems-', boardId: 2 });
  })
  .then(() => {
    return Card.create({ cardContent: 'card1-', listId: 1 });
  })
  .then(() => {
    return Card.create({ cardContent: 'card2-', listId: 1 });
  });

export default db; 
