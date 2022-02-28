import express from 'express';
import CoinGecko from 'coingecko-api';

const router = express.Router();
const CoinGeckoClient = new CoinGecko();

router.get('/:ticker', async (req: any, res: any) => {
  const { ticker } = req.params;
  try {
    const { data } = await CoinGeckoClient.coins.fetch(ticker, {});
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

export default router;
