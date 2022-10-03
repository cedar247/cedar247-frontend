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
import { useState, useEffect } from "react";
import AdminService from '../../services/API/AdminService';
import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useForm } from "react-hook-form"
import { successToast } from '../common/Toasts';
import { toast } from "react-toastify";

const theme = createTheme();



export default function AddConsultant(props) {

  // const { register, handleSubmit, formState: { errors } } = useForm();

  const [Wards, setWards] = useState([]);

  const [values, setValues] = React.useState({
    name: "",
    email: "",
    phoneNumber: "",
    WardID: ""
  });


  useEffect(() => {
    getAllWards();
  }, []);

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



  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleChange3 = (event) => {
    setValues({ ...values, ["WardID"]: event.target.value });
  };

  const name = props.title;
  const onSubmit = async (e) => {
    if (values.WardID === "" || values.name === "" || values.email === "" || values.phoneNumber === "") {
      e.preventDefault();
      toast.info("Fill All Fields", {
        toastId: "2"
      })
    }
    else {
      console.log(`${values.name}`)
      e.preventDefault();
      console.log("submitted")

      try {
        const response = await AdminService.addConsultant(values);
        console.log(response);
        if (response.data.msg == "Success") {
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
                  // {...register("Name",
                  //   {
                  //     required: "Name is Required.",
                  //     minLength: {
                  //       value: 2,
                  //       message: "Name must be more than 2 characters"
                  //     }
                  //   })
                  // }
                  // error={Boolean(errors.Name)}
                  // helperText={errors.Name?.message}
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
                    //   {...register("Ward",
                    //   {
                    //     required: "Ward is Required."
                    //   })
                    // }
                    // error={Boolean(errors.Ward)}
                    // helperText={errors.Ward?.message}
                    >
                      {Wards.map((option) => (
                        <MenuItem key={option._id} value={option._id}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* <TextField
                  sx={{ m: 0, }}
                  fullWidth
                  focused
                  id="outlined-select-currency-native"
                  select
                  label="Ward"
                  value={values.WardID}
                  onChange={handleChange3}
                  helperText="Please select your Ward"
                  SelectProps={{
                    native: true,
                  }}
                >
                  {Consultant.map((option) => (
                    <option key={option._id} value={option._id}>
                      {option.name}
                    </option>
                  ))}
                </TextField> */}
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
