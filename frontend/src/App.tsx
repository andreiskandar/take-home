import { useState } from 'react';
import { Container } from '@material-ui/core';
import './App.css';

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

  return (
    <Container className="App" fixed>
      <InputForm setPricesData={setPricesData} setError={setError} />
      {error.error ? (
        <Error error={error.error} message={error.message} />
      ) : (
        Object.values(pricesData).length > 0 && <PriceTable pricesData={pricesData} />
      )}
    </Container>
  );
}

export default App;
