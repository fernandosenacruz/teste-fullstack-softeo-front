import PropTypes from 'prop-types';
import React from 'react';
import { TextField } from '@mui/material';

function InputCost({
  totalCostDentalTreatment,
  handleChangeTotalCostDentalTreatment,
}) {
  return (
    <TextField
      type="number"
      id="outlined-totalCostDentalTreatment"
      value={totalCostDentalTreatment}
      label="Custo total do tratamento"
      inputProps={{ min: 0 }}
      onChange={(e) => handleChangeTotalCostDentalTreatment(e)}
      required
    />
  );
}

InputCost.propTypes = {
  totalCostDentalTreatment: PropTypes.string,
  handleChangeTotalCostDentalTreatment: PropTypes.func,
};

export default InputCost;
