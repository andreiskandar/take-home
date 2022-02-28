import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

// const coinRouter = require('./src/api/coin');
import coinRouter from './src/api/coin';

// initialize configuration
dotenv.config();
const app = express();
const PORT = process.env.SERVER_PORT || 3000;

// implement middleware
app.use(bodyParser.json());
app.use(cors());

// implement coinRouter
app.use('/api/coin', coinRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
