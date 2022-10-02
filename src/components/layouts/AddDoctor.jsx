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
import AdminService from '../../services/API/AdminService';
// import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from "react";
import InputLabel from '@mui/material/InputLabel';
import { toast } from "react-toastify";

const theme = createTheme();


const curr = [
  {
    value: 'ho',
    label: 'ho',
  },
  {
    value: 'wo',
    label: 'wo',
  },
  {
    value: 'lo',
    label: 'lo',
  },
  {
    value: 'mo',
    label: 'mo',
  },
];

export default function AddDoctor(props) {

  const [Wards, setWards] = useState([]);

  useEffect(() => {
    getAllWards();
  }, []);

  const handleChange3 = (event) => {
    setValues({ ...values, ["WardID"]: event.target.value });
  };
  const getAllWards = async () => {
    try {
      const response = await AdminService.getWards();
      console.log(response);
      console.log(response.data);
      setWards(response.data);
    } catch (error) {
      console.log(error)
    }

  };


  const [values, setValues] = React.useState({
    name: "",
    phoneNumber: "",
    email: "",
    category:"" ,
    WardID:"",
  });


  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const name = props.title;



const onSubmit = async (e) => {
  if(values.WardID === "" || values.name === ""|| values.email===""|| values.phoneNumber ==="" || values.category ==="" ){
    e.preventDefault();
    toast.warn("Fill All Fields",{
      toastId: "1"})
  }
  else{
    console.log(`${values.name}`)
    e.preventDefault();
    console.log("submitted")

    try {
      const response = await AdminService.addDoctor(values);
      console.log(response);
      if(response.data.msg =="Success"){
        toast.success("New Cosultant Added",{
          toastId: "1"})
      }
    } catch (error) {
      console.log(error)
    }
  }

}
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
          <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  onChange={handleChange('name')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Ward</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.WardID}
                    label="Ward"
                    onChange={handleChange3}
                  >
                    {Wards.map((option) => (
                      <MenuItem key={option._id} value={option._id}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                sx={{ m: 0 }}
                fullWidth
                  id="outlined-select-currency-native"
                  select
                  label="Ward"
                  value={values.category}
                  onChange={handleChange("category")}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {curr.map((option) => (
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
                  onChange={handleChange('phoneNumber')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
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
