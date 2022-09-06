import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const FormEditName = ({ handleEditName }) => {
  const form = useRef();
  const [name, setName] = useState('');

  const handleChange = ({ target }) => setName(target.value);

  return (
    <FormControl
      ref={form}
      onSubmit={(e) => handleEditName(e, name)}
      id="btn-edit-name"
    >
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        required
        autoComplete="off"
      >
        <TextField
          id="edit-name-required"
          label="editar nome"
          onChange={(e) => handleChange(e)}
          required
        />
        <Button type="submit" variant="contained">
          Editar nome
        </Button>
      </Box>
    </FormControl>
  );
};

FormEditName.propTypes = {
  handleEditName: PropTypes.func,
};

export default FormEditName;
