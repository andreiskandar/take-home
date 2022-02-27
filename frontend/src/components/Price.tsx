import { TableCell, TableRow } from '@material-ui/core';
import { FC, ReactElement } from 'react';
import { IPriceProps } from '../interface/IPriceProps';

const Price: FC<IPriceProps> = ({ currency, price }): ReactElement => {
  return (
    <TableRow>
      <TableCell>{currency}</TableCell>
      <TableCell>{Intl.NumberFormat('en-US').format(price)}</TableCell>
    </TableRow>
  );
};

export default Price;
