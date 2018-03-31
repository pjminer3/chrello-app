import Sequelize from 'sequelize';

const CreateTables = (sequelizeConnection) => {
  const Category = sequelizeConnection.define('category', {
    categoryName: {
      type: Sequelize.STRING,
    },
  });

  const Board = sequelizeConnection.define('board', {
    boardName: {
      type: Sequelize.STRING,
    },
  });

  const List = sequelizeConnection.define('list', {
    listName: {
      type: Sequelize.STRING,
    },
  });

  const Card = sequelizeConnection.define('card', {
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

export default CreateTables;
