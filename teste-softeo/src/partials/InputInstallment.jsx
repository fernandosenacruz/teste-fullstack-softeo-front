import PropTypes from 'prop-types';
import React from 'react';
import { TextField } from '@mui/material';

function InputInstallment({
  numberInstallment,
  handleChangeNumberInstallment,
}) {
  return (
    <TextField
      type="number"
      id="outlined-numberInstallment"
      value={numberInstallment}
      label="Número de parcelas"
      inputProps={{ min: 0, max: 60 }}
      onChange={(e) => handleChangeNumberInstallment(e)}
      required
    />
  );
}

InputInstallment.propTypes = {
  numberInstallment: PropTypes.string,
  handleChangeNumberInstallment: PropTypes.func,
};

export default InputInstallment;
