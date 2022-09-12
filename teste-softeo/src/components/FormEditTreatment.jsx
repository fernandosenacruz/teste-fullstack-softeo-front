import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import useInputs from '../hooks/useInputs';
import InputCost from '../partials/InputCost';
import InputInstallment from '../partials/InputInstallment';
import { Alert } from '@mui/material';

const FormEditTreatment = ({ handleEditTreatment }) => {
  const form = useRef();
  const {
    alert,
    disabled,
    showAlert,
    numberInstallment,
    totalCostDentalTreatment,
    handleChangeNumberInstallment,
    handleChangeTotalCostDentalTreatment,
  } = useInputs();

  return (
    <FormControl
      ref={form}
      onSubmit={(e) =>
        handleEditTreatment(e, totalCostDentalTreatment, numberInstallment)
      }
      id="form-edit-Treatment"
    >
      <Grid component="form" required autoComplete="off" container>
        <Grid item xs={10}>
          {showAlert && <Alert severity="error">{alert}</Alert>}

          <InputCost
            totalCostDentalTreatment={totalCostDentalTreatment}
            handleChangeTotalCostDentalTreatment={
              handleChangeTotalCostDentalTreatment
            }
          />
        </Grid>
        <Grid item xs={10}>
          <InputInstallment
            numberInstallment={numberInstallment}
            handleChangeNumberInstallment={handleChangeNumberInstallment}
          />
        </Grid>
        <Button type="submit" variant="contained" disabled={disabled}>
          Editar tratamento
        </Button>
      </Grid>
    </FormControl>
  );
};

FormEditTreatment.propTypes = {
  handleEditTreatment: PropTypes.func,
};

export default FormEditTreatment;
