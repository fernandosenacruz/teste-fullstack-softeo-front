import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Alert } from '@mui/material';
import { deletePatient } from '../api/api';

export default function DeletePatientModal({ patient }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleDelete = async () => {
    await deletePatient(setMessage, patient.id);

    setTimeout(() => {
      setOpen(false);
      navigate('/');
    }, 3000);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} color="error">
        Deletar este paciente
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Deletar paciente</DialogTitle>
        <DialogContent>
          {!message && (
            <Alert severity="warning">
              Atenção!
            </Alert>
          )}
          <DialogContentText id="alert-dialog-description">
            Ao executar esta ação o paciente será excluído permanentemente.
          </DialogContentText>
          {message && (
            <Alert variant="outlined" severity="success">
              {message}
            </Alert>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="info">
            Cancelar
          </Button>
          <Button
            onClick={handleDelete}
            autoFocus
            variant="contained"
            color="error"
          >
            Deletar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

DeletePatientModal.propTypes = {
  patient: PropTypes.shape({
    id: PropTypes.string,
  }),
};
