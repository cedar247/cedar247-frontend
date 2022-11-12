import React from 'react'
import { Button, Typography } from '@material-ui/core'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { TextField } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { toast } from "react-toastify";
import DoctorService from "../../services/API/DoctorService";

const theme = createTheme();

export default function DoctorChangePassword(props) {
    const [id] = React.useState(props.id);
    // const id = "633ab0f123be88c950fb8a89"

    const btnStyle = { marginTop: 10 }
    const passwordRegExp=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    const initialValues = {
        email: '',
        password: '',
        confirmPassword:''
    }
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
            const response = await DoctorService.changePassword({id,...values});
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

    return (
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
                                <Field data-testid="email" as={TextField} name='email' label='Email' fullWidth
                                    error={props.errors.email && props.touched.email}
                                    helperText={<ErrorMessage name='email' />} required />
                                <Field data-testid="password" as={TextField} name='password' label='Password' type='password' fullWidth
                                    error={props.errors.password && props.touched.password}
                                    helperText={<ErrorMessage name='password' />} required />
                                <Field  data-testid="confirm password" as={TextField} name='confirmPassword' label='Confirm Password' type='password' fullWidth
                                    error={props.errors.confirmPassword && props.touched.confirmPassword}
                                    helperText={<ErrorMessage name='confirmPassword' />} required />
                                <Button  aria-label="submit" type='submit' style={btnStyle} variant='contained'
                                    color='primary'>Submit</Button>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Container>
        </ThemeProvider>
    )
}