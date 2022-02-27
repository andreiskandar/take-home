const express = require('express');
const bodyParser = require('body-parser');
const pino = require('pino');
const expressPino = require('express-pino-logger');
const cors = require('cors');
const dotenv = require('dotenv');

const coinRouter = require('./src/api/coin.ts');

// initialize configuration
dotenv.config();
const app = express();
const PORT = process.env.SERVER_PORT || 3000;
const logger = pino({
  prettifier: require('pino-colada')
});
const expressLogger = expressPino({ logger });

// implement middleware
app.use(expressLogger);
app.use(bodyParser.json());
app.use(cors());

app.use('/api/coin', coinRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
