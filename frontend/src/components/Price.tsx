import { FC, ReactElement } from 'react';
import { IPriceProps } from '../interface/IPriceProps';

const Price: FC<IPriceProps> = ({ currency, price }): ReactElement => {
  return (
    <tr>
      <td>{currency}</td>
      <td>{Intl.NumberFormat('en-US').format(price)}</td>
    </tr>
  );
};

export default Price;
