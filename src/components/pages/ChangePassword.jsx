import React from 'react'
import { Grid, Paper, Button, Typography } from '@material-ui/core'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import { TextField } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Header from '../common/doctor/Header';
import SideBar from "../common/doctor/SideBar";
import { makeStyles } from "@material-ui/core/styles";
import DoctorService from "../../services/API/DoctorService";


const drawerWidth = 240;

const useStyles = makeStyles({
    paper: {
        background: "#f5f5f5"
    }
});

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);


export default function ChangePassword() {
    const [open, setOpen] = React.useState(false);
    const id = ""

    const paperStyle = { padding: '0 15px 40px 15px', width: 250, }
    const btnStyle = { marginTop: 10 }
    const passwordRegExp=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    const initialValues = {
        email: '',
        password: '',
        confirmPassword:''
    }
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
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

        } catch (error) {
            console.log(error);
        }
        // props.resetForm()
    }


    return (
        <div className='DashBody' >
            <Box sx={{ display: 'flex' }}>
                <CssBaseline/>
                <Header handleDrawerOpen={handleDrawerOpen} open={open}/>
                <SideBar handleDrawerClose={handleDrawerClose} open={open} home = {true} chanpass ={false} defreq ={true}/>
                <Main open={open} >
                    <Grid align = "center" style ={{paddingTop:"100px"}} > 
                        <Paper style={paperStyle} style ={{width:"50%",height:"50%", padding:"20px" }}>
                            <Grid align='center' >
                                <Typography variant='caption' ><h3 align="center" >Change Password</h3></Typography>
                            </Grid>
                            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                                {(props) => (
                                    <Form noValidate>
                                        <Field as={TextField} name='email' label='Email' fullwidth="true"
                                            error={props.errors.email && props.touched.email}
                                            helperText={<ErrorMessage name='email' />} required />
                                        <Field as={TextField} name='password' label='Password' type='password' fullwidth="true"
                                            error={props.errors.password && props.touched.password}
                                            helperText={<ErrorMessage name='password' />} required />
                                        <Field as={TextField} name='confirmPassword' label='Confirm Password' type='password' fullwidth="true"
                                            error={props.errors.confirmPassword && props.touched.confirmPassword}
                                            helperText={<ErrorMessage name='confirmPassword' />} required />
                                        <Button type='submit' style={btnStyle} variant='contained'
                                            color='primary'>Submit</Button>
                                    </Form>
                                )}
                            </Formik>
                        </Paper>
                    </Grid>
                </Main>
            </Box>
        </div>
    )
}