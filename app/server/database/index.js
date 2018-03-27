import Sequelize from 'sequelize';
import config from './config';


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

config(sequelize);

sequelize.sync();

export default sequelize;

