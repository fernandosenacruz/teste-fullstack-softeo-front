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
} from '@mui/material';
import { inputNameValidate } from '../helpers/formCreatePatientValidate';

const FormCreatePatient = () => {
  const form = useRef();
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState('');
  const [name, setName] = useState('');
  const [totalCostDentalTreatment, setTotalCostDentalTreatment] = useState('');
  const [numberInstallment, setNumberInstallment] = useState('');

  const handleClose = () => setOpen(false);

  const handleChangeName = ({ target }) => {
    setName(target.value);
    const { bool, alert } = inputNameValidate(target.value);
    setDisabled(bool);
    setAlert(alert);
  };

  const handleChangeTotalCostDentalTreatment = ({ target }) => {
    setTotalCostDentalTreatment(target.value);
    inputTotalCostDentalTreatmentValidate(target.value);
  };

  const handleChangeNumberInstallment = ({ target }) => {
    setNumberInstallment(target.value);
    inputNumberInstallmentValidate(target.value);
  };

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
            <TextField
              type="text"
              id="outlined-name"
              label="Nome"
              placeholder={alert}
              onChange={(e) => handleChangeName(e)}
              required
            />
            <TextField
              id="outlined-totalCostDentalTreatment"
              label="Custo total do tratamento"
              onChange={(e) => handleChangeTotalCostDentalTreatment(e)}
              required
            />
            <TextField
              id="outlined-numberInstallment"
              label="Número de parcelas"
              onChange={(e) => handleChangeNumberInstallment(e)}
              required
            />
            <Button type="submit" variant="contained" color="success" disabled={disabled}>
              Cadastrar Paciente
            </Button>
          </div>
        </Box>
      </FormControl>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Cadastro de paciente</DialogTitle>
        <DialogContent>
          {!message === 'Paciente cadastrado com sucesso!' && (
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
