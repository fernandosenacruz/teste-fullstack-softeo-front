import React, { useEffect, useContext } from 'react';
import RadiosFilter from '../components/RadiosFilter';
import CardPatient from '../components/Card';
import { Grid } from '@mui/material';
import { getPatients } from '../api/api';
import { PatientsContext } from '../context/Context';
import Header from '../components/Header';
import incomeCalc from '../helpers/incomeCalc';

const Home = () => {
  const { patients, setPatients, filteredPatients, filterActived, setIncome, income } =
    useContext(PatientsContext);

  const xibil = async () => {
    if (!filterActived) {
      await getPatients(setPatients);
    }
    setIncome(incomeCalc(cardsArray));
  };

  useEffect(() => {
    xibil();
  }, [filteredPatients, filterActived, income]);

  let cardsArray = filterActived ? filteredPatients : patients;
  return (
    <>
      <Header />
      <RadiosFilter />
      <Grid container spacing={2}>
        {cardsArray?.map((patient) => (
          <Grid
            item
            justifyContent="center"
            alignItems="center"
            key={`${patient.id} - ${patient.name}`}
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <CardPatient patient={patient} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
