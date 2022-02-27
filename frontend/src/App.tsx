import { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Container,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
  Paper
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import './App.css';
import Price from './components/Price';
import { IErrorProps } from './interface/IErrorProps';
import Error from './components/Error';

function App() {
  const { handleSubmit, register, resetField } = useForm();
  const [prices, setPrices] = useState({});
  const [error, setError] = useState<IErrorProps>({
    error: false,
    message: ''
  });

  const onSubmit = (data: any) => {
    const { ticker } = data;
    let errorMessage = '';
    if (ticker) {
      // api call to the backend
      const res = axios
        .get(`/api/coin/${ticker}/`)
        .then(({ data }) => {
          if (data.error) {
            errorMessage = data.error;
            setError({ error: true, message: errorMessage });
            return;
          }

          const { market_data, name } = data;
          const { current_price } = market_data;
          setPrices(current_price);

          reset();
        })
        .catch((e) => {
          errorMessage = 'Something is wrong. Please contact administrator';
          setError({ error: true, message: errorMessage });
        });
    } else {
      setError({ error: true, message: 'Please enter ticker!' });
    }
  };

  const reset = (): void => {
    resetField('ticker');
    setError({ error: false, message: '' });
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
      {error.error ? (
        <Error error={error.error} message={error.message} />
      ) : (
        Object.values(prices).length > 0 && (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Currency</TableCell>
                  <TableCell>Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{renderPrices()}</TableBody>
            </Table>
          </TableContainer>
        )
      )}
    </Container>
  );
}

export default App;
