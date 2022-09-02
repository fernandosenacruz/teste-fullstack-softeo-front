import React, { useContext, useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  LocalizationProvider,
  MobileDatePicker,
  ptBR,
} from '@mui/x-date-pickers';
import pt_BR from 'date-fns/locale/pt-BR';
import { getFilteredPatiens, getPatients } from '../api/api';
import { PatientsContext } from '../context/Context';

function Calc() {
  const { setFiltredPatients, setFilterActived, setPatients } = useContext(PatientsContext);
  const [date, setDate] = useState(dayjs());
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {}, []);

  const handleMonth = async (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
      case 'every-months':
        setShowInput(false);
        setFilterActived(false);
        getPatients(setPatients);
      case 'actually-month':
        setShowInput(false);
        setFilterActived(true);
        await getFilteredPatiens(setFiltredPatients, date.format('DD-MM-YYYY'));
        break;
      case 'next-month':
        setShowInput(false);
        setFilterActived(true);
        const nextMonth = date.add(1, 'M');
        await getFilteredPatiens(
          setFiltredPatients,
          nextMonth.format('DD-MM-YYYY'),
        );
      case 'other-month':
        setShowInput(true);
      
      default:
        break;
    }
    // if (e.target.id === 'actually-month') {
    //   setShowInput(false);
    //   await getFilteredPatiens(setFiltredPatients, date.format('DD-MM-YYYY'));
    // } else if (e.target.id === 'next-month') {
    //   setShowInput(false);
    //   const nextMonth = date.add(1, 'M');
    //   await getFilteredPatiens(
    //     setFiltredPatients,
    //     nextMonth.format('DD-MM-YYYY'),
    //   );
    // } else {
    //   setShowInput(true);
    // }
  };

  return (
    <FormControl>
      <FormLabel id="date-radio-buttons-group-label">Receita em:</FormLabel>
      <RadioGroup
        aria-labelledby="date-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="every-months"
          name="selected-month"
          label="todos os mês"
          onClick={(e) => handleMonth(e)}
          control={<Radio id="every-months" />}
        />
        <FormControlLabel
          value="actually-month"
          name="selected-month"
          label="mês atual"
          onClick={(e) => handleMonth(e)}
          control={<Radio id="actually-month" />}
        />
        <FormControlLabel
          value="next-month"
          name="selected-month"
          label="próximo mês"
          onClick={(e) => handleMonth(e)}
          control={<Radio id="next-month" />}
        />
        <FormControlLabel
          value="other-month"
          name="selected-month"
          label="outra data"
          onClick={(e) => handleMonth(e)}
          control={<Radio id="other-month" />}
        />
      </RadioGroup>

      {showInput && (
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale={pt_BR}
          localeText={
            ptBR.components.MuiLocalizationProvider.defaultProps.localeText
          }
        >
          <Stack spacing={1}>
            <MobileDatePicker
              id="date-income"
              name="date-income"
              label="Escolha uma data"
              value={date}
              onChange={(newDate) => {
                setFilterActived(true);
                setDate(newDate);
                getFilteredPatiens(
                  setFiltredPatients,
                  newDate.format('DD-MM-YYYY'),
                );
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
      )}
    </FormControl>
  );
}

export default Calc;
