import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import { Alert, Grid } from '@mui/material';
import useInputs from '../hooks/useInputs';
import InputName from '../partials/InputName';

const FormEditName = ({handleEditName}) => {
  const form = useRef();
  const {
    name,
    alert,
    disabled,
    handleChangeName,
   } = useInputs();

  return (
    <FormControl
      ref={form}
      onSubmit={(e) => handleEditName(e, name)}
      id="form-edit-name"
    >
      <Grid component="form" required autoComplete="off" container>
        <Grid item xs={10}>
          {alert !== 'Ok' && <Alert severity="error">{alert}</Alert>}
          <InputName name={name} handleChangeName={handleChangeName} />
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
