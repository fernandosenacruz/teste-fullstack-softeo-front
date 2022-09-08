import React, { useEffect, useContext } from 'react';
import { PatientsContext } from '../context/Context';
import Grid from '@mui/material/Grid';
import Header from '../components/Header';
import RadiosFilter from '../components/RadiosFilter';
import CardPatient from '../components/Card';
import incomeCalc from '../helpers/incomeCalc';
import { getPatients } from '../api/api';

const Home = () => {
  const {
    patients,
    setPatients,
    filteredPatients,
    filterActived,
    setIncome,
    income,
  } = useContext(PatientsContext);

  const getIncomeFromServer = async () => {
    if (!filterActived) {
      await getPatients(setPatients);
    }
  };

  useEffect(() => {
    getIncomeFromServer();
    setIncome(incomeCalc(cardsArray));
  }, [filteredPatients, filterActived, income]);

  let cardsArray = filterActived ? filteredPatients : patients;
  return (
    <>
      <Header />
      <Grid container spacing={2} p={1}>
        <Grid item xs={12}>
          <RadiosFilter />
        </Grid>
        {cardsArray?.map((patient) => (
          <Grid
            item
            // justifyContent="center"
            // alignItems="center"
            key={`${patient.id} - ${patient.name}`}
            // xs={12}
            // sm={6}
            // md={4}
            // lg={3}
          >
            <CardPatient patient={patient} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
