import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getPatients = async (callback) => {
  try {
    const { data } = await api.get('patients');
    callback(data);
  } catch (error) {
    console.log(error);
  }
};

export const getFilteredPatiens = async (callback, date) => {
  try {
    const { data } = await api.get(
      `patients/installment?selectedMonth=${date}`,
    );
    callback(data);
  } catch (error) {
    console.log(error);
  }
};

export const getPatientById = async (callback, id) => {
  try {
    const { data } = await api.get(`patient/${id}`);
    callback(data);
  } catch (error) {
    console.log(error);
  }
};

// export const updatePatient = async (
//   callback,
//   id,
//   totalCostDentalTreatment,
//   numberInstallment
// ) => {};

// export const updatePatientName = async (callback, id, name) => {};

export default api;
