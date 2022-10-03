import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../common/consultant/Header';
import SideBar from "../common/consultant/SideBar";
import { styled, useTheme } from '@mui/material/styles';
import WardDetails from '../ward/WardDetails';
import Constraints from '../ward/Constraints';
import { Button, Typography, Grid, TextField } from '@material-ui/core';
import ShiftDetails from "../schedule/ShiftDetails";
import adminService from '../../services/API/AdminService';
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

export default function CreateSchedule() {
    const [open, setOpen] = React.useState(false);
    const [shifts, setShifts] = useState([]);
    const [doctorCategories, setDoctorCategories] = useState([]);
    const [requirements, setRequirements] = useState([])
   
    useEffect(() => {
        getShifts();
        getDoctorCategories();
    }, []);
    

    const getShifts = async () => {
        try {
            const response = await adminService.getShifts();
            if(response.data) {
                setShifts(response.data)
                const data = response.data;
                // console.log(data)
                const arr_requirements = [];
                for(let i = 0; i < data.length; i++) {
                    const shiftId = data[i]._id;
                    const shift = {shiftId: shiftId}
                    // console.log(shift)
                    arr_requirements.push(shift);
                }
                setRequirements(arr_requirements)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getDoctorCategories = async () => {
        try {
            const response = await consulantService.getDoctorCategories();
            if(response.data) {
                setDoctorCategories(response.data)
            }
            // console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleRequirements = (id, index, e, doctorCategory) => {
        let cpRequirements = [...requirements]
        let requirement = {...cpRequirements[index]}
        if(requirement.shiftId == id) {
            // console.log(typeof doctorCategory)
            requirement[doctorCategory] = e.target.value;
            cpRequirements[index] = requirement;
            setRequirements(cpRequirements)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await consulantService.createSchedule(requirements);
            console.log(response)
        } catch(error) {
            console.log(error)
        }
    }

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
                        Create Schedule
                    </Typography>

                    {/* content of the main is here */}
                    <form action="">
                        <Typography 
                            variant='h5'
                            component='p'
                            >
                            Number of doctors needed per day:
                        </Typography>
                        <Grid container spacing={3}>
                            {
                                shifts.map(
                                    (shift, index, arr) => (
                                        <ShiftDetails handleRequirements={handleRequirements} index={index} id={shift._id} shiftName={shift.name} doctorCategories={doctorCategories} key={shift._id}/>
                                    )
                                )
                            }
                            
                            {/* <ShiftDetails shiftName="Evening shift"/>
                            <ShiftDetails shiftName="Night shift"/> */}


                        </Grid>

                        <Box textAlign='center' m={3}>
                            <Button variant="contained" color="primary" type='submit' onClick={handleSubmit}>
                                Create Schedule
                            </Button>
                        </Box>
                        
                    </form>
                </Main>
            </Box>
        </div>
    );
}