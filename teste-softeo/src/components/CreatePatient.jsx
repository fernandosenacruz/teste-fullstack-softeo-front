import React, { useRef, useState } from 'react';
import { createPatient } from '../api/api';
import {
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Button,
  TextField,
  FormControl,
  Grid,
} from '@mui/material';
import useInputs from '../hooks/useInputs';

const FormCreatePatient = () => {
  const form = useRef();
  const [
    name,
    alert,
    disabled,
    numberInstallment,
    totalCostDentalTreatment,
    handleChangeName,
    handleChangeNumberInstallment,
    handleChangeTotalCostDentalTreatment,
  ] = useInputs();
  // const [name, setName] = useState('');
  const [open, setOpen] = useState(false);
  // const [alert, setAlert] = useState('Ok');
  const [message, setMessage] = useState('');
  // const [disabled, setDisabled] = useState(true);
  // const [numberInstallment, setNumberInstallment] = useState('');
  // const [totalCostDentalTreatment, setTotalCostDentalTreatment] = useState('');

  const handleClose = () => setOpen(false);

  // const handleChangeName = ({ target }) => {
  //   if (target.value !== '') {
  //   const { regex, length, alert } = inputNameValidate(
  //     target.value[target.value.length - 1], target.value,
  //   );
  //   regex && setName(target.value);
  //   regex && setDisabled(regex);
  //   length && setDisabled(length);
  //   setAlert(alert);
  //   } else {
  //     setName('');
  //   }
  // };

  // const handleChangeTotalCostDentalTreatment = ({ target }) => {
  //   setTotalCostDentalTreatment(target.value);
  //   const { bool, alert } = inputTotalCostDentalTreatmentValidate(target.value);
  //   setDisabled(bool);
  //   setAlert(alert);
  // };

  // const handleChangeNumberInstallment = ({ target }) => {
  //   setNumberInstallment(target.value);
  //   const { bool, alert } = inputNumberInstallmentValidate(target.value);
  //   setDisabled(bool);
  //   setAlert(alert);
  // };

  const handleCreatePatient = async (e) => {
    e.preventDefault();

    const data = await createPatient(
      name,
      +totalCostDentalTreatment,
      +numberInstallment,
    );

    console.log(message);

    if (data.id) {
      setMessage('Paciente cadastrado com sucesso!');
      setOpen(true);
      e.target.reset();
    } else {
      setMessage(
        'Algo deu errado! Tente novamente ou entre em contato com suporte.',
      );
      setOpen(true);
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormControl
            ref={form}
            onSubmit={(e) => handleCreatePatient(e)}
            id="form-edit-Treatment"
          >
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '30ch' },
              }}
              required
              autoComplete="off"
            >
              <div>
                {alert !== 'Ok' && <Alert severity="error">{alert}</Alert>}
                <TextField
                  id="outlined-name"
                  value={name}
                  label="Nome"
                  onChange={(e) => handleChangeName(e)}
                  required
                />
                <TextField
                  type="number"
                  id="outlined-totalCostDentalTreatment"
                  label="Custo total do tratamento"
                  onChange={(e) => handleChangeTotalCostDentalTreatment(e)}
                  required
                />
                <TextField
                  type="number"
                  id="outlined-numberInstallment"
                  label="Número de parcelas"
                  onChange={(e) => handleChangeNumberInstallment(e)}
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  disabled={disabled}
                >
                  Cadastrar Paciente
                </Button>
              </div>
            </Box>
          </FormControl>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Cadastro de paciente</DialogTitle>
        <DialogContent>
          {!message !== 'Paciente cadastrado com sucesso!' && (
            <Alert severity="warning">{message}</Alert>
          )}
          {message === 'Paciente cadastrado com sucesso!' && (
            <Alert variant="outlined" severity="success">
              {message}
            </Alert>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="info">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FormCreatePatient;
