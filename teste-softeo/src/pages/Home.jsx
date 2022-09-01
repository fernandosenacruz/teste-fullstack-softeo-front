import React from 'react';
// import Card from '../components/Card';
import Calc from '../components/Calc';
import pacients from '../api/termIncome.json';
import CardPatient from '../components/Card';
import { Grid } from '@mui/material';

function Home() {
  return (
    <>
      <Calc />
      <Grid container spacing={2}>
        {pacients.map((patient) => (
          <Grid
            item
            direction="row"
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
}

export default Home;
