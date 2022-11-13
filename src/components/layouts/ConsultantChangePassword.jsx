import React from 'react'
import {  Button, Typography } from '@material-ui/core'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { TextField } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import ChanpasswordHeader from "../common/consultant/chanpasswordHeader";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { toast } from "react-toastify";
import ConsultantService from "../../services/API/ConsultantService";
import jwtDecode from 'jwt-decode'
import { useEffect } from "react";
import AccessDenied from '../pages/AccessDenied';

const theme = createTheme();

export default function ConsultantChangePassword() {
    // const id = "633abc43c6e98fb5c1b2ec3a"

    const btnStyle = { marginTop: 10 }
    const passwordRegExp=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    const initialValues = {
        email: '',
        password: '',
        confirmPassword:''
    }
    const [user, setUser] = React.useState("");
    const [id, setID] = React.useState("");
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const user = jwtDecode(token)
            if (!user) {
                localStorage.removeItem('token')
                window.location.href = "/"
            }
            else if (user) {
                if (user.type === "CONSULTANT") {
                    setUser("CONSULTANT");
                    setID(user._id);
                    // handleGetShifts()

                } else {
                    setUser("NONE")
                }

            }
        } else {
            setUser("")
        }
    }, []);


    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Enter valid email").required("Required"),
        password: Yup.string().min(8, "Minimum characters should be 8")
        .matches(passwordRegExp,"Password must have one upper, lower case, number, special symbol").required('Required'),
        confirmPassword:Yup.string().oneOf([Yup.ref('password')],"Password not matches").required('Required')
    })
    const onSubmit = async (values, props) => {
        console.log({id,...values});
        alert("Are you sure you wants to change the password")
        try {
            const response = await ConsultantService.changePassword({id,...values});
            console.log(response);
            if(response.status === 200){
                // e.preventDefault();
                toast.success("Email & Password has changed",{
                    toastId: "1"})
            }else{
                toast.error("Please try again",{
                    toastId: "1"})
            }
            // DescriptionAlerts(true);
        } catch (error) {
            toast.error("Please try again. There is some error",{
                toastId: "1"})
            console.log(error);
        }
        // props.resetForm()
    }
    const consultantpage =
                    <div>
                        <Box sx={{ display: 'flex' }}>
                            <CssBaseline />
                            <ChanpasswordHeader />
                        </Box>
                        <Box>
                            <div>
                            <ThemeProvider theme={theme}>
                                <Container component="main" maxWidth="xs" label = "container">
                                    <Typography variant='caption' ><h1 align="center" >Change Password</h1></Typography>
                                    <CssBaseline />
                                    <Box
                                        sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        }}
                                    >
                                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                                            {(props) => (
                                                <Form noValidate>
                                                    <Field as={TextField} name='email' label='Email' fullWidth
                                                        error={props.errors.email && props.touched.email}
                                                        helperText={<ErrorMessage name='email' />} required />
                                                    <Field as={TextField} name='password' label='Password' type='password' fullWidth
                                                        error={props.errors.password && props.touched.password}
                                                        helperText={<ErrorMessage name='password' />} required />
                                                    <Field as={TextField} name='confirmPassword' label='Confirm Password' type='password' fullWidth
                                                        error={props.errors.confirmPassword && props.touched.confirmPassword}
                                                        helperText={<ErrorMessage name='confirmPassword' />} required />
                                                    <Button type='submit' style={btnStyle} variant='contained'
                                                        color='primary'>Submit</Button>
                                                </Form>
                                            )}
                                        </Formik>
                                    </Box>
                                </Container>
                            </ThemeProvider>
                            </div>
                        </Box>
                    </div> 
        return (
            <>
                {user !== "" && user === "CONSULTANT" ? consultantpage : <> <AccessDenied></AccessDenied> </>}
            </>
        );
}