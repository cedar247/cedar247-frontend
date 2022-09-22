import React from 'react'
import { Grid, Paper, Button, Typography } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const ChangePassword = () => {
    const paperStyle = { padding: '0 15px 40px 15px', width: 250, }
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
    const onSubmit = (values, props) => {
        alert("Are you sure you wants to change the password")
        props.resetForm()
        // alert(JSON.stringify(values), null, 2)
        // props.resetForm()
    }
    return (
        <Grid>
            <Paper elevation={0} style={paperStyle}>
                <Grid align='center'>
                    <Typography variant='caption'>Fill the form to create an account</Typography>
                </Grid>
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
            </Paper>
        </Grid>
    )
}
export default ChangePassword;