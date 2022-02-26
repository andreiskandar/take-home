const express = require('express');
const bodyParser = require('body-parser');
const pino = require('pino');
const expressPino = require('express-pino-logger');

const cors = require('cors');
const CoinGecko = require('coingecko-api');

const app = express();
// const PORT = process.env.PORT || 3000;
const PORT = 3000;

const logger = pino({
  prettifier: require('pino-colada'),
});

const expressLogger = expressPino({ logger });

app.use(expressLogger);
app.use(bodyParser.json());
app.use(cors());

const CoinGeckoClient = new CoinGecko();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
