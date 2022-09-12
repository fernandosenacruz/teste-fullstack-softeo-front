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
  FormControl,
  Grid,
} from '@mui/material';
import useInputs from '../hooks/useInputs';
import InputName from '../partials/InputName';
import InputCost from '../partials/InputCost';
import InputInstallment from '../partials/InputInstallment';

const FormCreatePatient = () => {
  const form = useRef();
  const {
    name,
    alert,
    disabled,
    showAlert,
    numberInstallment,
    totalCostDentalTreatment,
    handleChangeName,
    handleChangeNumberInstallment,
    handleChangeTotalCostDentalTreatment,
  } = useInputs();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleClose = () => setOpen(false);

  const handleCreatePatient = async (e) => {
    e.preventDefault();

    const data = await createPatient(
      name,
      +totalCostDentalTreatment,
      +numberInstallment,
    );

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
                {showAlert && <Alert severity="error">{alert}</Alert>}
                <InputName name={name} handleChangeName={handleChangeName} />
                <InputCost
                  totalCostDentalTreatment={totalCostDentalTreatment}
                  handleChangeTotalCostDentalTreatment={
                    handleChangeTotalCostDentalTreatment
                  }
                />
                <InputInstallment
                  numberInstallment={numberInstallment}
                  handleChangeNumberInstallment={handleChangeNumberInstallment}
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
