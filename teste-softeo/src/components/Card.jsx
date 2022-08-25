import PropTypes from 'prop-types';
import React from 'react';
import PaymentMonthTable from './PaymentMonthTable';

const Card = ({ pacient }) => {
  return (
    <div className="card">
      <h3>Paciente: {pacient.name}</h3>
      <h4>Custo Total do Tratamento: {pacient.totalCostDentalTreatment}</h4>
      <h4>Número de Parcelas: {pacient.numberInstallment}</h4>
      <h5>Valor da Parcela: {pacient.installmentAmount}</h5>
      <PaymentMonthTable paymentMonths={pacient.paymentMonths} />
    </div>
  );
};

Card.propTypes = {
  pacient: PropTypes.shape({
    paymentMonths: PropTypes.arrayOf(PropTypes.string),
    installmentAmount: PropTypes.number,
    name: PropTypes.string,
    numberInstallment: PropTypes.number,
    totalCostDentalTreatment: PropTypes.number,
  }),
};

export default Card;
