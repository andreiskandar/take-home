const express = require('express');
const bodyParser = require('body-parser');
const pino = require('pino');
const expressPino = require('express-pino-logger');

const app = express();
const logger = pino({
  prettifier: require('pino-colada'),
});

const expressLogger = expressPino({ logger });

app.use(expressLogger);
app.use(bodyParser.json());
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
