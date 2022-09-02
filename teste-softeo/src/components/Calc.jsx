import React, { useEffect, useState } from 'react';
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

function Calc() {
  const [value, setValue] = useState(dayjs());
  const [showInput, setShowInput] = useState(false);
  // const [month, setMonth] = useState('');
  // const [dateIncome, setDateIncome] = useState('');

  useEffect(() => {}, []);

  console.log(value);

  const handleMonth = (e) => {
    if (e.target.id !== 'other-month') {
      setShowInput(false);
      setMonth(e.target.id);
    } else {
      setShowInput(true);
      setDateIncome(e.target.id);
    }
  };

  // const handleDateIncome = (e) => {
  //   console.log(e.target.value);
  //   setDateIncome(e.target.value);
  // };

  return (
    <FormControl>
      <FormLabel id="date-radio-buttons-group-label">Receita em:</FormLabel>
      <RadioGroup
        aria-labelledby="date-radio-buttons-group-label"
        name="radio-buttons-group"
      >
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
              // onChange={(e) => handleDateIncome(e)}
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
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
