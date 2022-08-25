import React from 'react';
import PropTypes from 'prop-types';

const PaymentMonthTable = ({ paymentMonths }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Pagamentos em</th>
          </tr>
        </thead>
        <tbody>
          {paymentMonths.map((month, i) => (
            <tr key={i}>
              <td>{month}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

PaymentMonthTable.propTypes = {
  paymentMonths: PropTypes.arrayOf(PropTypes.string),
};

export default PaymentMonthTable;
