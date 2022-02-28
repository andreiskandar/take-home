import { FC } from 'react';
import { IErrorProps } from '../interface/IErrorProps';
import { Alert } from '@material-ui/lab';

const Error: FC<IErrorProps> = ({ error, message }) => {
  return <Alert severity="error">{message}</Alert>;
};

export default Error;
