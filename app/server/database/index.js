import Sequelize from 'sequelize';


// create connection with local database
// const dbConnection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'mysql',
//   database: 'chrello'
// });

const sequelize = new Sequelize('chrello', 'root', 'mysql', { host: 'localhost', dialect: 'mysql' });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to Sequelize mysql2 database has been established successfully');
  })
  .catch((err) => {
    console.log('Unable to connect to database: ', err);
  });

export default sequelize;

