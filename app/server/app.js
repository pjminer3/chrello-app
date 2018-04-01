import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import db from './database/index';
import router from './routes';

const app = express();

const publicPath = express.static(path.join(__dirname, '../')); // sets the publicPath equal to the build folder
const indexPath = path.join(__dirname, '../index.html'); // sets indexPath equal to the index.html file in the build folder

app.use(publicPath);

app.get("/home", (req, res) => {
  res.sendFile(indexPath);
});

export default app;

