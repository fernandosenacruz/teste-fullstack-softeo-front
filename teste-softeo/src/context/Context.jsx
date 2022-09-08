import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const DEFAULT_VALUES = {
  patients: [
    {
      _id: '1',
      name: '',
      totalCostDentalTreatment: 0,
      numberInstallment: 0,
      installmentAmount: 0,
      paymentMonths: [
        '29-9-2022',
      ],
    },
  ],
  filteredPatients: [
    {
      _id: '630f8a1e197d0840633b24b3',
      name: 'Rafael Scherer',
      totalCostDentalTreatment: 6000,
      numberInstallment: 12,
      installmentAmount: 500,
      paymentMonths: [
        '31-9-2022',
        '31-10-2022',
        '31-11-2022',
        '31-12-2022',
        '31-1-2023',
        '31-2-2023',
        '31-3-2023',
        '31-4-2023',
        '31-5-2023',
        '31-6-2023',
      ],
    },
  ],
  filterActived: false,
  income: 0,
};

export const PatientsContext = createContext({
  patients: DEFAULT_VALUES.patients,
  setPatients: () => void 0,
  filteredPatients: DEFAULT_VALUES.filteredPatients,
  setFilteredPatients: () => void 0,
  filterActived: DEFAULT_VALUES.filterActived,
  setFilterActived: () => void 0,
  income: DEFAULT_VALUES.income,
  setIncome: () => void 0,
});

const PatientsProvider = ({ children }) => {
  const [patients, setPatients] = useState(DEFAULT_VALUES.patients);
  const [filteredPatients, setFilteredPatients] = useState(
    DEFAULT_VALUES.filteredPatients,
  );
  const [filterActived, setFilterActived] = useState(
    DEFAULT_VALUES.filterActived,
  );
  const [income, setIncome] = useState(DEFAULT_VALUES.income);

  return (
    <PatientsContext.Provider
      value={{
        patients,
        filteredPatients,
        setPatients,
        setFilteredPatients,
        filterActived,
        setFilterActived,
        income,
        setIncome,
      }}
    >
      {children}
    </PatientsContext.Provider>
  );
};

PatientsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PatientsProvider;
