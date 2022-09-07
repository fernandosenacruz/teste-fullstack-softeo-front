import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const FormEditTreatment = ({ handleEditTreatment }) => {
  const form = useRef();
  const [treatmentCost, setTreatmentCost] = useState('');
  const [numberInstallment, setnumberInstallment] = useState('');

  const handleTreatmentCost = ({ target }) => setTreatmentCost(target.value);

  const handleNumberInstallment = ({ target }) =>
    setnumberInstallment(target.value);

  return (
    <FormControl
      ref={form}
      onSubmit={(e) => handleEditTreatment(e, treatmentCost, numberInstallment)}
      id="form-edit-Treatment"
    >
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '30ch' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        required
        autoComplete="off"
      >
        <TextField
          id="edit-totalCostDentalTreatment"
          label="editar custo total do tratamento"
          type="number"
          required
          onChange={(e) => handleTreatmentCost(e)}
        />
        <TextField
          required
          type="number"
          id="edit-numberInstallment"
          label="editar número de parcelas"
          onChange={(e) => handleNumberInstallment(e)}
        />
        <Button type="submit" variant="contained">
          Editar tratamento
        </Button>
      </Box>
    </FormControl>
  );
};

FormEditTreatment.propTypes = {
  handleEditTreatment: PropTypes.func,
};

export default FormEditTreatment;
