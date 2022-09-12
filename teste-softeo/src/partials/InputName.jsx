import PropTypes from 'prop-types';
import React from 'react';
import { TextField } from '@mui/material';

function InputName({ name, handleChangeName }) {
  return (
    <TextField
      id="outlined-name"
      value={name}
      label="Nome"
      onChange={(e) => handleChangeName(e)}
      required
    />
  );
}

InputName.propTypes = {
  name: PropTypes.string,
  handleChangeName: PropTypes.func,
};

export default InputName;
