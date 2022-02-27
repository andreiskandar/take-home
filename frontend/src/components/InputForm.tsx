import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@material-ui/core';
import { IErrorProps } from '../interface/IErrorProps';
import axios from 'axios';

interface IInputFormProps {
  setPricesData: (pricesData: object) => void;
  setError: (error: IErrorProps) => void;
}

const InputForm: FC<IInputFormProps> = ({ setPricesData, setError }) => {
  const { handleSubmit, register, resetField } = useForm();

  const onSubmit = (data: any): void => {
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
          setPricesData(current_price);

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="ticker"
        variant="outlined"
        placeholder="Please Enter Ticker"
        size="small"
        {...register('ticker')}
      />
      <Button type="submit" variant="contained">
        Get Price
      </Button>
    </form>
  );
};

export default InputForm;
