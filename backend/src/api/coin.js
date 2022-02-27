const express = require('express');
const router = express.Router();
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

router.get('/:ticker', async (req, res) => {
  const { ticker } = req.params;
  try {
    const { data } = await CoinGeckoClient.coins.fetch(ticker);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
