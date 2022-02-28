import { FC, ReactElement } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
  Paper
} from '@material-ui/core';
import Price from './Price';

interface IPriceTableProps {
  pricesData: object;
}

const useStyles = makeStyles({
  table: {
    minWidth: 500
  }
});

const PriceTable: FC<IPriceTableProps> = ({ pricesData }): ReactElement => {
  const classes = useStyles();

  const renderPriceRow = (): ReactElement[] => {
    return Object.entries(pricesData).map(([currency, price]) => (
      <Price key={currency} currency={currency} price={price} />
    ));
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Currency</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderPriceRow()}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default PriceTable;
