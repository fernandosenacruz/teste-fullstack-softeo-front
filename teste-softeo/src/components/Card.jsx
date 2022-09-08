import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PaymentMonthTable from './PaymentMonthTable';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useLocation, useNavigate } from 'react-router-dom';

const card = ({
  id,
  name,
  totalCostDentalTreatment,
  numberInstallment,
  installmentAmount,
  paymentMonths,
}, navigate, route) => (
  <Button
    style={{ textDecoration: 'none', color: 'inherit' }}
    onClick={() => navigate(`/patient/${id}`)}>
    <Grid container justifyContent="center" alignItems="center">
      <CardContent sx={{ borderRadius: '50' }}>
        <Typography color="text.secondary" variant="h6" gutterBottom>
          Paciente: {name}
        </Typography>
        {route.length > 2 && <Typography component="div">
          Custo Total do Tratamento: R$ {totalCostDentalTreatment}
        </Typography>}
        {route.length > 2 && <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Número de Parcelas: {numberInstallment}
        </Typography>}
        <Typography variant="body2">
          Valor da Parcela: R$ {installmentAmount}
        </Typography>
      </CardContent>
      {route.length > 2 && <PaymentMonthTable paymentMonths={paymentMonths} />}
    </Grid>
  </Button>
);

const CardPatient = ({ patient }) => {
  let navigate = useNavigate();
  const location = useLocation();
  const route = location.pathname.split('/');

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card(patient, navigate, route)}</Card>
    </Box>
  );
};

CardPatient.propTypes = {
  patient: PropTypes.shape({
    paymentMonths: PropTypes.arrayOf(PropTypes.string),
    installmentAmount: PropTypes.number,
    name: PropTypes.string,
    numberInstallment: PropTypes.number,
    totalCostDentalTreatment: PropTypes.number,
  }),
};

export default CardPatient;
