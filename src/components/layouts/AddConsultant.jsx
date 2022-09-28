import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";


const theme = createTheme();





const currencies = [
  {
    value: 'USD',
    label: 'DOllerUS',
  },
  {
    value: 'EUR',
    label: 'EUROPE',
  },
  {
    value: 'BTC',
    label: 'BTC',
  },
  {
    value: 'JPY',
    label: '¥Japan',
  },
];

export default function AddConsultant(props) {

  const [values, setValues] = React.useState({
    password: "",
    re_password: "",
    showPassword: false,
    fname: "",
    lname: "",
    ememailail: "",
    contactNO: ""
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  
  const [currency, setCurrency] = React.useState('');

  const handleChange2 = (event) => {
    setCurrency(event.target.value);
  };

  const name = props.title;
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    alert(`${values.contactNO},${values.email}`);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <PersonIcon sx={{ fontSize: 30 }} />
          </Avatar>
          <Typography component="h1" variant="h5">
            {name}
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="Name"
                  name="firstName"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                sx={{ m: 0, }}
                fullWidth
                  id="outlined-select-currency-native"
                  select
                  label="Ward"
                  value={currency}
                  onChange={handleChange2}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="contactNO"
                  label="Contact Number"
                  name="contactNO"
                  autoComplete="Contact-Number"
                  value={values.contactNO}
                  onChange={handleChange('contactNO')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                sx={{ m: 0 }}
                fullWidth
                  id="outlined-select-currency-native"
                  select
                  label="Ward"
                  value={currency}
                  onChange={handleChange2}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange('email')}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ADD
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
