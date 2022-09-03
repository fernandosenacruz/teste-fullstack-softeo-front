import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPatientById } from '../api/api';
import CardPatient from '../components/Card';
import Header from '../components/Header';

const Patient = () => {
  const [patient, setPatient] = useState({});
  const params = useParams();

  useEffect(() => {
    getPatientById(setPatient, params.id);
  }, []);

  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CardPatient patient={patient}/>
        </Grid>
      </Grid>
    </>
  );
};

export default Patient;
