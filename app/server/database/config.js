import Sequelize from 'sequelize';

const CreateModels = (sequelizeConnection) => {
  const Category = sequelizeConnection.define('category', {
    categoryName: {
      type: Sequelize.STRING,
    },
  });

  const Board = sequelizeConnection.define('board', {
    boardName: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
  });

  const List = sequelizeConnection.define('list', {
    listName: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
  });

  const Card = sequelizeConnection.define('card', {
    cardContent: {
      type: Sequelize.TEXT,
    },
  });

  // adds the appropriate foreignId column on each instance
  // gives the '.set<thing>` method
  Board.belongsTo(Category);
  List.belongsTo(Board);
  Card.belongsTo(List);

  // enables bi-directional associations
  Category.hasMany(Board, { as: 'Boards' });
  Board.hasMany(List, { as: 'Lists' });
  List.hasMany(Card, { as: 'Cards' });

  const models = {
    Category,
    Board,
    List,
    Card,
  };

  return models;
};

export default CreateModels;

