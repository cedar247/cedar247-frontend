import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../common/consultant/Header';
import SideBar from '../common/consultant/SideBar';
import { styled, useTheme } from '@mui/material/styles';
import WardDetails from '../ward/WardDetails';
import Constraints from '../ward/Constraints';
import { Button, Typography, Grid } from '@material-ui/core';
import Doctor from '../ward/Doctor';
import consulantService from '../../services/API/ConsultantService';

const drawerWidth = 240;

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

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function DoctorsView() {
    const [open, setOpen] = useState(false);
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        getDoctors();
    }, []);

    const getDoctors = async () => {
        try {
            const response = await consulantService.getDoctors();
            setDoctors(response.data);
        } catch (error) {

        }
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline/>
                <Header handleDrawerOpen={handleDrawerOpen} open={open}/>
                <SideBar handleDrawerClose={handleDrawerClose} open={open}/>
                <Main open={open}>
                    <DrawerHeader />
                    <Typography 
                        variant='h4' 
                        component="h1"
                        align='center'
                        gutterBottom
                    >
                        Doctors
                    </Typography>

                    {/* content of the main is here */}
                    <form action="">
                        <Grid container spacing={3}>

                            {
                                doctors.map(
                                    doctor => (<Doctor key={doctor._id} name={doctor.name} category={doctor.category} wardName={doctor.wardName} wardNumber={doctor.wardNumber} contactNumber={doctor.phoneNumber}/>)
                                )
                            }
                        </Grid>
                    </form>
                </Main>
            </Box>
        </div>
    );
}