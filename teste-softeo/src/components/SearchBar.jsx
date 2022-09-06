import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import BoxComponent from '../partials/Box';
import { PatientsContext } from '../context/Context';
import { Button } from '@mui/material';
import { Stack } from '@mui/system';
import searchByName from '../helpers/searchName';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchAppBar = () => {
  const { income, patients, setFilteredPatients, setFilterActived } =
    useContext(PatientsContext);
  const [searchName, setSearchName] = useState('');

  const location = useLocation();
  const route = location.pathname.split('/');

  const handleChange = ({ target }) => setSearchName(target.value);

  const handleSearch = (name) => {
    const therePatients = searchByName(patients, name);

    if (therePatients.length !== 0) {
      setFilterActived(true);
      setFilteredPatients(therePatients);
    } else {
      setFilterActived(false);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {route.length < 3 && <BoxComponent value={income} />}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Início
            </Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link
              to="/patient/:id"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Paciente
            </Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link
              to="/patient/register"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Cadastrar Pacientes
            </Link>
          </Typography>
          {route.length < 3 && <Search>
            <Stack direction="row" spacing={2}>
              <Button
                type="button"
                id="search-button"
                onClick={() => handleSearch(searchName)}
                color="secondary"
              >
                <SearchIcon />
              </Button>
              <StyledInputBase
                placeholder="Buscar..."
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => handleChange(e)}
              />
            </Stack>
          </Search>}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default SearchAppBar;
