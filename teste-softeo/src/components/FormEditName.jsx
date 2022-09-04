import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const FormEditName = () => {
  // const handleEditName = ({ Target }) => {
  // };
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
        id="edit-name-required"
        label="editar nome"
      />
    </Box>
  );
};

export default FormEditName;
