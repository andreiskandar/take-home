import { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import './App.css';
import Price from './components/Price';

function App() {
  const { handleSubmit, register, resetField } = useForm();

  const [prices, setPrices] = useState({});

  const onSubmit = (data: any) => {
    console.log('data:', typeof data);
    const { ticker } = data;
    // api call to the backend
    const res = axios
      .get(`/api/coin/${ticker}/`)
      .then(({ data }) => {
        const { market_data, name } = data;
        const { current_price } = market_data;
        setPrices(current_price);

        resetField('ticker');
      })
      .catch((e) => console.log(e));

    // clear input
  };

  const renderPrices = () => {
    return Object.entries(prices).map(([currency, price]) => (
      <Price key={currency} currency={currency} price={price} />
    ));
  };

  return (
    <Container className="App" fixed>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="ticker"
          variant="outlined"
          {...register('ticker')}
          placeholder="Please Enter Ticker"
        />
        <Button type="submit" variant="contained">
          Get Price
        </Button>
      </form>
      {Object.values(prices).length > 0 && (
        <table>
          <thead>
            <tr>
              <td>Currency</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>{renderPrices()}</tbody>
        </table>
      )}
    </Container>
  );
}

export default App;
