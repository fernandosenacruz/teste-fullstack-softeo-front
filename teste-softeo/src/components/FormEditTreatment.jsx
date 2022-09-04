import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const FormEditTreatment = () => {
  // const handleEditTreatment = ({ Target }) => {};

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="edit-totalCostDentalTreatment"
        label="editar custo total do tratamento"
      />
      <TextField
        required
        id="edit-numberInstallment"
        label="editar número de parcelas"
      />
    </Box>
  );
};

export default FormEditTreatment;