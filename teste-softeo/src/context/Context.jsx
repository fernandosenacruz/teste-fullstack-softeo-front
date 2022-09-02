import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const DEFAULT_VALUES = {
  patients: [
    {
      _id: '630d31cfe3c80f0b555b5cec',
      name: 'Arthur Bacilla',
      totalCostDentalTreatment: 10000,
      numberInstallment: 10,
      installmentAmount: 1000,
      paymentMonths: [
        '29-9-2022',
        '29-10-2022',
        '29-11-2022',
        '29-12-2022',
        '29-1-2023',
        '29-2-2023',
        '29-3-2023',
        '29-4-2023',
        '29-5-2023',
        '29-6-2023',
      ],
    },
  ],
  filtredPatients: [
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
};

export const PatientsContext = createContext({
  patients: DEFAULT_VALUES.patients,
  setPatients: () => void 0,
  filtredPatients: DEFAULT_VALUES.filtredPatients,
  setFiltredPatients: () => void 0,
  filterActived: DEFAULT_VALUES.filterActived,
  setFilterActived: () => void 0,
});

const PatientsProvider = ({ children }) => {
  const [patients, setPatients] = useState(DEFAULT_VALUES.patients);
  const [filteredPatients, setFiltredPatients] = useState(
    DEFAULT_VALUES.filtredPatients,
  );
  const [filterActived, setFilterActived] = useState(
    DEFAULT_VALUES.filterActived,
  );

  return (
    <PatientsContext.Provider
      value={{
        patients,
        filteredPatients,
        setPatients,
        setFiltredPatients,
        filterActived,
        setFilterActived,
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
