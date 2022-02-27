import { FC, ReactElement } from 'react';
import { PriceProps } from '../interface/Price';

const Price: FC<PriceProps> = ({ currency, price }): ReactElement => {
  return (
    <tr>
      <td>{currency}</td>
      <td>{Intl.NumberFormat('en-US').format(price)}</td>
    </tr>
  );
};

export default Price;
