import React, { useState, useEffect } from 'react';
import Calc from '../components/Calc';
import CardPatient from '../components/Card';
import { Grid } from '@mui/material';
import api from '../api/api';

const Home = () => {
  const [patients, setPatients] = useState([]);

  const getPatients = async () => {
    try {
      const { data } = await api.get('patients');
      setPatients(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPatients();
  }, []);

  return (
    <>
      <Calc />
      <Grid container spacing={2}>
        {patients?.map((patient) => (
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
