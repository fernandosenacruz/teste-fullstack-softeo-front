import PropTypes from 'prop-types';
import * as React from 'react';
import Box from '@mui/material/Box';

const BoxComponent = ({ value }) => {
  return (
    <Box
      component="span"
      sx={{ p: 1, border: '1px white solid', borderRadius: '5px' }}
    >
      <span>R$ {value.toFixed(2)}</span>
    </Box>
  );
};

BoxComponent.propTypes = {
  value: PropTypes.number,
};

export default BoxComponent;
