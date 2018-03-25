import mysql from 'mysql';

console.log('****************INSIDE DB.INDEX ********************');
// create connection with local database
const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'chrello'
});

dbConnection.connect((err) => {
  if (err) {
    console.error('error connect to database: ', err.stack);
    return;
  }

  console.log(`connected as id ${dbConnection.threadId}`);
});

export default dbConnection;

