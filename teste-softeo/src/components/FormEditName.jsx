import React, { useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { getPatients, updatePatientName } from '../api/api';
import { PatientsContext } from '../context/Context';

const FormEditName = ({ id }) => {
  const form = useRef();
  const [name, setName] = useState('');
  const { setPatients } = useContext(PatientsContext);

  const handleChange = ({ target }) => setName(target.value);

  const handleEditName = async (e) => {
    e.preventDefault();

    await updatePatientName(id, name);
    await getPatients(setPatients);

    e.target.reset();
  };

  return (
    <FormControl
      ref={form}
      onSubmit={(e) => handleEditName(e)}
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
  id: PropTypes.string,
};

export default FormEditName;
