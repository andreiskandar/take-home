import { useState, ReactElement } from 'react';
import { Container } from '@material-ui/core';
import './App.css';

import Price from './components/Price';
import Error from './components/Error';
import PriceTable from './components/PriceTable';
import InputForm from './components/InputForm';

import { IErrorProps } from './interface/IErrorProps';

function App() {
  const [pricesData, setPricesData] = useState<object>({});
  const [error, setError] = useState<IErrorProps>({
    error: false,
    message: ''
  });

  const renderPrices = (): ReactElement[] => {
    return Object.entries(pricesData).map(([currency, price]) => (
      <Price key={currency} currency={currency} price={price} />
    ));
  };

  return (
    <Container className="App" fixed>
      <InputForm setPricesData={setPricesData} setError={setError} />
      {error.error ? (
        <Error error={error.error} message={error.message} />
      ) : (
        Object.values(pricesData).length > 0 && <PriceTable renderPrices={renderPrices} />
      )}
    </Container>
  );
}

export default App;
