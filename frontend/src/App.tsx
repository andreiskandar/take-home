import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import './App.css';

type Ticker = {
  ticker: string;
  value: string;
};

function App() {
  const { handleSubmit, register } = useForm();

  useEffect(() => {
    axios.get('/').then((res) => console.log(res));
  }, []);

  const onSubmit = (data: Ticker) => {
    const { ticker } = data;
    // api call to the backend
    const res = axios.get(`/api/coin/${ticker}/`).then((data) => {
      console.log(JSON.stringify(data));
    });

    // clear input
  };

  return (
    <div className='App'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField id='ticker' variant='outlined' {...register('ticker')} />
        <Button type='submit' variant='contained'>
          Get Price
        </Button>
      </form>
    </div>
  );
}

export default App;
