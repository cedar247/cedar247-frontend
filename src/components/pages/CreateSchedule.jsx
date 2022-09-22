import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../common/consultant/Header';
import SideBar from "../common/consultant/SideBar";
import { styled, useTheme } from '@mui/material/styles';
import WardDetails from '../ward/WardDetails';
import Constraints from '../ward/Constraints';
import { Button, Typography, Grid, TextField } from '@material-ui/core';
import ShiftDetails from "../schedule/ShiftDetails";

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
                            <ShiftDetails shiftName="Morning shift"/>
                            <ShiftDetails shiftName="Evening shift"/>
                            <ShiftDetails shiftName="Night shift"/>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item md={6} sm={12} xs={12}>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Home Officer" 
                                    variant="outlined" 
                                    color='secondary' 
                                    type="number"
                                    fullWidth
                                    margin='normal'
                                />
                            </Grid>

                            <Grid item md={6} sm={12} xs={12}>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Medical Officer" 
                                    variant="outlined" 
                                    color='secondary' 
                                    type="number"
                                    fullWidth
                                    margin='normal'
                                />
                            </Grid>
                        </Grid>

                        <Box textAlign='center' m={3}>
                            <Button variant="contained" color="primary" type='submit'>
                                Add Ward
                            </Button>
                        </Box>
                        
                    </form>
                </Main>
            </Box>
        </div>
    );
}