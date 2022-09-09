import PropTypes from 'prop-types';
import * as React from 'react';
import Box from '@mui/material/Box';

const BoxComponent = ({ value }) => {
  return (
    value !== 0 && (
      <Box
        component="span"
        sx={{
          p: 1,
          border: '1px white solid',
          borderRadius: '5px',
          display: { xs: 'none', md: 'block' },
        }}
      >
        <span>R$ {value.toFixed(2)}</span>
      </Box>
    )
  );
};

BoxComponent.propTypes = {
  value: PropTypes.number,
};

export default BoxComponent;
