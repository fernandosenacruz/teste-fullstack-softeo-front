import React, { useEffect, useContext } from 'react';
import Calc from '../components/Calc';
import CardPatient from '../components/Card';
import { Grid } from '@mui/material';
import { getPatients } from '../api/api';
import { PatientsContext } from '../context/Context';

const Home = () => {
  const { patients, setPatients, filteredPatients, filterActived } =
    useContext(PatientsContext);

  useEffect(() => {
    getPatients(setPatients);
  }, [filteredPatients, filterActived]);

  let cardsArray = filterActived ? filteredPatients : patients;
  return (
    <>
      <Calc />
      <Grid container spacing={2}>
        {cardsArray?.map((patient) => (
          <Grid
            item
            justifyContent="center"
            alignItems="center"
            key={patient.id}
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
