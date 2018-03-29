import Sequelize from 'sequelize';

module.exports = (sequelize) => {
  const Category = sequelize.define('category', {
    categoryName: {
      type: Sequelize.STRING,
    },
  });

  const Board = sequelize.define('board', {
    boardName: {
      type: Sequelize.STRING,
    },
  });

  const List = sequelize.define('list', {
    listName: {
      type: Sequelize.STRING,
    },
  });

  const Card = sequelize.define('card', {
    cardContent: {
      type: Sequelize.TEXT,
    },
  });

  Category.hasMany(Board, { as: 'Boards' });
  Board.hasMany(List, { as: 'Lists' });
  List.hasMany(Card, { as: 'Cards' });

  const db = {
    Category,
    Board,
    List,
    Card,
  };

  return db;
};
