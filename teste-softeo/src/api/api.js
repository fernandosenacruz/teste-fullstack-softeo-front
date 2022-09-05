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

export const updatePatient = async (
  id,
  totalCostDentalTreatment,
  numberInstallment,
) => {
  try {
    const { data } = await api.put(`patient/${id}`, {
      totalCostDentalTreatment,
      numberInstallment,
    });

    return data;
    } catch (error) {
      console.log(error);
      };
};

export const updatePatientName = async (id, name) => {
  try {
    const { data } = await api.patch(`patient/${id}`, { name });

    return data;
  } catch (error) {
    console.log(error);
  };
};

export const deletePatient = async (callback, id) => {
  try {
    await api.delete(`patient/${id}`);

    callback('Paciente deletado com sucesso!');
  } catch (error) {
    console.log(error);
  }
};

export default api;
