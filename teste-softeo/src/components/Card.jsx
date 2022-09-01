import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PaymentMonthTable from './PaymentMonthTable';
import { Grid } from '@mui/material';

const card = ({
  name,
  totalCostDentalTreatment,
  numberInstallment,
  installmentAmount,
  paymentMonths,
}) => (
  <Grid container direction="row" justifyContent="center" alignItems="center">
    <CardContent sx={{ borderRadius: '50' }}>
      <Typography color="text.secondary" variant="h5" gutterBottom>
        Paciente: {name}
      </Typography>
      <Typography component="div">
        Custo Total do Tratamento: {totalCostDentalTreatment}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Número de Parcelas: {numberInstallment}
      </Typography>
      <Typography variant="body2">
        Valor da Parcela: {installmentAmount}
      </Typography>
    </CardContent>
      <PaymentMonthTable paymentMonths={paymentMonths} />
  </Grid>
);

const CardPatient = ({ patient }) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card(patient)}</Card>
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
