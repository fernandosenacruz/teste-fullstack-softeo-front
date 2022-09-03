import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 14,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const PaymentMonthTable = ({ paymentMonths }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Parcela</StyledTableCell>
            <StyledTableCell>Data de Pagamento</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paymentMonths?.map((month, i) => (
            <StyledTableRow key={i}>
            <StyledTableCell align="center" component="th" scope="row">
                {i + 1}
              </StyledTableCell>
              <StyledTableCell align="center">{month}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

PaymentMonthTable.propTypes = {
  paymentMonths: PropTypes.arrayOf(PropTypes.string),
};

export default PaymentMonthTable;
