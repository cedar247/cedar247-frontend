import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import AdminService from '../../services/API/AdminService';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from "react";
import InputLabel from '@mui/material/InputLabel';
import { toast } from "react-toastify";
import Autocomplete, {createFilterOptions} from "@mui/material/Autocomplete";


// to set filter optionsss
const filter = createFilterOptions();

// theme is to theme the page
const theme = createTheme();



export default function AddDoctor(props) {
  //to sore values 
  const [value, setValue] = useState("");
  //to store types of doctor
  const [models, setmodels] = useState([]);
  //to store names of wards
  const [Wards, setWards] = useState([]);


  //use effects to fetch wards and doctor types while rendering
  // useEffect(() => {
  //   getAllWards();
  // }, []);

// to set the value for the wards (ID)
  const handleChange3 = (event) => {
    setValues({ ...values, ["WardID"]: event.target.value });
    getDoctorTypes();
  };

  // to fetch all details of the wards
  const getAllWards = async () => {
    try {
      //fetches the data of wards 
      const response = await AdminService.getWards();
      // console.log(response);
      // console.log(response.data);
      //sets the ward names with id in the wards array
      setWards(response.data);
    } catch (error) {
      console.log(error)
    }

  };

  //to fetch the doctor types from the backend
  const getDoctorTypes = async (event) => {
    
    try {
      //fetches the data from the backend
      const response = await AdminService.getDoctorTypes(values);
      //for debugging purpose
      // console.log(response);
      console.log(response.data);
      //sets the doctor types in the array
      setmodels(response.data);
    } catch (error) {
      console.log(error)
    }

  };

//to store the values in the form
  const [values, setValues] = React.useState({
    //name of the doctor and other details
    name: "",
    phoneNumber: "",
    email: "",
    category: "",
    WardID: "",
    NewCategory : ""
  });

//to store the values from the form
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };


  //the name propery sent from the main page
  const name = props.title;


//to handle the submin
  const onSubmit = async (e) => {
    //to check the access of the .env file
    // console.log(process.env.REACT_APP_DEFAULT_PASSWORD);
    // console.log(models);
    //to check whether the fields are empty or not
    if (values.WardID === "" || values.name === "" || values.email === "" || values.phoneNumber === "" || (values.NewCategory === "" && values.category==="") ){
      e.preventDefault();// to prevent page refresh
      // to notify the user to fill all fields
      toast.info("Fill All Fields", {
        toastId: "1"
      })
    }
    else {
      console.log(`${values.name}`)
      e.preventDefault();
      console.log("submitted")
      try {
        //to add the data to the database
        const response = await AdminService.addDoctor(values);
        console.log(response);
        //gets the response from the backend and gives the success notification
        if (response.data.msg == "Success") {
          toast.success("New Doctor Added", {
            toastId: "1"
          })
        }
        // gives a warning if the email id already exits
        if(response.data.msg === "User validation failed: email: The specified email address is already in use."){
          toast.warn("Email Already Exits",{
            toastId: "3"})
        }
      } catch (error) {
        // gives a warning if the email id already exits
        if (error.response.data.msg == "User validation failed: email: The specified email address is already in use.") {
          toast.warn("Email Already Exits", {
            toastId: "3"
          })
        }
        else {
          //gives an error if the user is not added to the system
          toast.error("Doctor Not Added", {
            toastId: "4"
          })
          console.log(error)
        }

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
            {/* name of the coponent from the page */}
            {name}
          </Typography>
          <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
            {/* grids are used to align the page */}
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
                    {/* maps the values in the wards array  and displays it */}
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
                  required
                  fullWidth
                  id="contactNO"
                  label="Contact Number"
                  name="contactNO"
                  autoComplete="Contact-Number"
                  onChange={handleChange('phoneNumber')}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Category</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.category}
                    label="Category"
                    onChange={handleChange("category")}
                  >
                    {/* maps the values in the doctor types array  and displays it */}
                    {models.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
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
