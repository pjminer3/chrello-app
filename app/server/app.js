import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import { db } from './database/index';
import router from './APIroutes';

const app = express();

// logging and parsing
app.use(morgan('dev'));
app.use(bodyParser.json());

// set up our API routes
app.use('/api', router);

const publicPath = express.static(path.join(__dirname, '../')); // sets the publicPath equal to the build folder
const indexPath = path.join(__dirname, '../index.html'); // sets indexPath equal to the index.html file in the build folder

// DANNY! WHAT DOES THIS DO!
app.use(publicPath);

app.get("/", (request, response) => {
  res.sendFile(indexPath);
});

app.get("/:category/:board", (request, response) => {
  console.log(request.params);
  response.send('You\'re learning!');
});

export default app;

