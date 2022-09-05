import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPatientById } from '../api/api';
import CardPatient from '../components/Card';
import Header from '../components/Header';
import FormEditName from '../components/FormEditName';
import FormEditTreatment from '../components/FormEditTreatment';
import DeletePatientModal from '../components/DeletePatientModal';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from '@mui/material';
import { useContext } from 'react';
import { PatientsContext } from '../context/Context';

const Patient = () => {
  const { patiens } = useContext(PatientsContext);
  const [patient, setPatient] = useState({});
  const [editName, setEditName] = useState(false);
  const [editTreatment, setEditTreatment] = useState(false);

  const params = useParams();
  const id = params.id;

  const handleEdit = ({ target }) => {
    if (target.value === 'edit-name') {
      setEditName(true);
      setEditTreatment(false);
    } else {
      setEditName(false);
      setEditTreatment(true);
    }
  };

  useEffect(() => {
    id !== ':id' && getPatientById(setPatient, id);
  }, [patiens, editName, editTreatment]);

  return (
    <>
      <Header />
      <FormControl>
        <FormLabel id="edit-radio-buttons-group-label">Editar:</FormLabel>
        <RadioGroup
          aria-labelledby="edit-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="edit-name"
            label="nome"
            onClick={(e) => handleEdit(e)}
            control={<Radio id="edit-name" />}
          />
          <FormControlLabel
            value="edit-installment"
            label="tratamento"
            onClick={(e) => handleEdit(e)}
            control={<Radio id="edit-installment" />}
          />
        </RadioGroup>
        {patient.id && <DeletePatientModal patient={patient} />}
      </FormControl>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <CardPatient patient={patient} />
          {editName && <FormEditName id={patient.id} />}
          {editTreatment && <FormEditTreatment />}
        </Grid>
      </Grid>
    </>
  );
};

export default Patient;
