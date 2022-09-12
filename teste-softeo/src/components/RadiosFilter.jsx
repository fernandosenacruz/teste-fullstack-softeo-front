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
import { Grid } from '@mui/material';

const RadiosFilter = () => {
  const { setFilteredPatients, setFilterActived, setPatients } =
    useContext(PatientsContext);
  const [date, setDate] = useState(dayjs());
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {}, []);

  const handleEveryMonths = async () => {
    setShowInput(false);
    setFilterActived(false);
    await getPatients(setPatients);
  };

  const handleActuallyMonth = async () => {
    setShowInput(false);
    setFilterActived(true);
    await getFilteredPatiens(setFilteredPatients, date.format('DD-MM-YYYY'));
  };

  const handleNextMonth = async () => {
    setShowInput(false);
    setFilterActived(true);
    const nextMonth = date.add(1, 'M');
    await getFilteredPatiens(
      setFilteredPatients,
      nextMonth.format('DD-MM-YYYY'),
    );
  };

  const handleOtherMonth = async () => {
    setShowInput(true);
  };

  return (
    <Grid container spacing={2} p={1}>
      {/* <Grid item> */}
      <FormControl>
        <FormLabel id="date-radio-buttons-group-label">Receita em:</FormLabel>
        <RadioGroup
          row
          sx={{ m: 1 }}
          name="radio-buttons-group"
          aria-labelledby="date-radio-buttons-group-label"
        >
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              value="every-months"
              name="selected-month"
              label="todos os meses"
              onClick={() => handleEveryMonths()}
              control={<Radio id="every-months" />}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              value="actually-month"
              name="selected-month"
              label="mês atual"
              onClick={() => handleActuallyMonth()}
              control={<Radio id="actually-month" />}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              value="next-month"
              name="selected-month"
              label="próximo mês"
              onClick={(e) => handleNextMonth(e)}
              control={<Radio id="next-month" />}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              value="other-month"
              name="selected-month"
              label="outra data"
              onClick={(e) => handleOtherMonth(e)}
              control={<Radio id="other-month" />}
            />
          </Grid>
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
                    setFilteredPatients,
                    newDate.format('DD-MM-YYYY'),
                  );
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        )}
      </FormControl>
    </Grid>
    // </Grid>
  );
};

export default RadiosFilter;
