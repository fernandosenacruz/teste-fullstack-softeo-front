import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Alert, Grid } from '@mui/material';
import { inputNameValidate } from '../helpers/formCreatePatientValidate';

const FormEditName = ({ handleEditName }) => {
  const form = useRef();
  const [name, setName] = useState('');
  const [alert, setAlert] = useState('Ok');
  const [disabled, setDisabled] = useState(true);

  const handleChange = ({ target }) => {
    setName(target.value);
    const { bool, alert } = inputNameValidate(target.value);
    setDisabled(bool);
    setAlert(alert);
  };

  return (
    <FormControl
      ref={form}
      onSubmit={(e) => handleEditName(e, name)}
      id="form-edit-name"
    >
      <Grid component="form" required autoComplete="off" container>
        <Grid item xs={10}>
          {alert !== 'Ok' && <Alert severity="error">{alert}</Alert>}
          <TextField
            id="edit-name-required"
            label="editar nome"
            onChange={(e) => handleChange(e)}
            required
          />
        </Grid>
        <Button type="submit" variant="contained" disabled={disabled}>
          Editar nome
        </Button>
      </Grid>
    </FormControl>
  );
};

FormEditName.propTypes = {
  handleEditName: PropTypes.func,
};

export default FormEditName;
