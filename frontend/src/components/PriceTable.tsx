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

interface IPriceTableProps {
  renderPrices: () => ReactElement[];
}

const useStyles = makeStyles({
  table: {
    minWidth: 500
  }
});

const PriceTable: FC<IPriceTableProps> = ({ renderPrices }): ReactElement => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Currency</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderPrices()}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default PriceTable;
