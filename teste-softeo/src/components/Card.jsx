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
      <h5>Dia de pagamento: {pacient.dateInstallmentAmount.paymentDay}</h5>
      <PaymentMonthTable
        paymentMonths={pacient.dateInstallmentAmount.paymentMonths}
      />
    </div>
  );
};

Card.propTypes = {
  pacient: PropTypes.shape({
    dateInstallmentAmount: PropTypes.shape({
      paymentDay: PropTypes.number,
      paymentMonths: PropTypes.arrayOf(PropTypes.string),
    }),
    installmentAmount: PropTypes.number,
    name: PropTypes.string,
    numberInstallment: PropTypes.number,
    totalCostDentalTreatment: PropTypes.number,
  }),
};

export default Card;
