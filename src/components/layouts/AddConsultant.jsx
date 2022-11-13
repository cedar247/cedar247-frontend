import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useEffect, useState } from "react";
import AdminService from '../../services/API/AdminService';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { toast } from "react-toastify";

//theme for the page
const theme = createTheme();



export default function AddConsultant(props) {

  // const { register, handleSubmit, formState: { errors } } = useForm();
//to set the ward names
  const [Wards, setWards] = useState([]);
// to set the values from the form
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    phoneNumber: "",
    WardID: ""
  });

  //to fetch the ward names from the backed 
  // useEffect(() => {
  //   getAllWards();
  // }, []);

  const getAllWards = async () => {
    try {
      //to fetch the ward names from the backed 
      const response = await AdminService.getWards();
      console.log(response);//for dubuggin purposes
      console.log(response.data);//for debugging purposes
      setWards(response.data);//  setting ward data in the array
    } catch (error) {
      console.log(error)
    }

  };


  // function to set the values when there is a change happens in the form
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };


  // to set the ID of the ward in the wardid attribute
  const handleChange3 = (event) => {
    setValues({ ...values, ["WardID"]: event.target.value });
  };

  const name = props.title;// the title is passed from the rendering page

  const onSubmit = async (e) => {
    // to check all fields are enterred
    if (values.WardID === "" || values.name === "" || values.email === "" || values.phoneNumber === "") {
      e.preventDefault();// to prevent page refreshing
      toast.info("Fill All Fields", {
        toastId: "2"
      })
    }
    else {
      console.log(`${values.name}`)//fo dubugging
      e.preventDefault();//for debugging
      console.log("submitted")//for dubugging

      try {
        //adding data to the backed 
        const response = await AdminService.addConsultant(values);
        console.log(response);//for dubugging purpose
        if (response.data.msg == "Success") {
          //success toast
          toast.success("New Cosultant Added", {
            toastId: "1"
          })
        }

      } catch (error) {
        if (error.response.data.msg == "User validation failed: email: The specified email address is already in use.") {
          toast.warn("Email Already Exits", {
            toastId: "3"
          })
        }
        else {
          toast.error("Cosultant Not Added", {
            toastId: "4"
          })
          console.log(error)
        }

      }
    }

  }

  return (
    <>

    {/* rendeering page  */}
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{

              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          > {/* Avatar Object  */}
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <PersonIcon sx={{ fontSize: 30 }} />
            </Avatar>
            <Typography component="h1" variant="h5">
              {name}
            </Typography>
            <Box component="form" onSubmit={onSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="Name"
                    name="firstName"
                    // required
                    fullWidth
                    id="Name"
                    label="Name"
                    autoFocus
                    value={values.name}
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
                    fullWidth
                    id="contactNO"
                    label="Contact Number"
                    name="contactNO"
                    autoComplete="Contact-Number"
                    value={values.phoneNumber}
                    onChange={handleChange("phoneNumber")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
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

    </>
  );
}
