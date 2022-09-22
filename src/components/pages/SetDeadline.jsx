import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../common/consultant/Header';
import SideBar from "../common/consultant/SideBar";
import { styled, useTheme } from '@mui/material/styles';
import WardDetails from '../ward/WardDetails';
import Constraints from '../ward/Constraints';
import { Button, Typography, Grid, TextField} from '@material-ui/core';
import ShiftDetails from "../schedule/ShiftDetails";
import MonthPicker from "../schedule/MonthPicker";

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

export default function SetDeadline() {
    const [open, setOpen] = React.useState(false);
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
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
                        Set Deadline
                    </Typography>

                    {/* content of the main is here */}
                    <form action="">
                        <MonthPicker/>
                        <Box textAlign='center' m={3}>
                            <TextField
                                id="date"
                                label="Deadline"
                                type="date"
                                defaultValue="2022-09-23"
                                InputLabelProps={{
                                shrink: true,
                                }}
                                margin='normal'
                                color='secondary'
                            
                            />
                        </Box>

                        <Box textAlign='center' m={3}>
                            <Button variant="contained" color="primary" type='submit'>
                                Set Deadline
                            </Button>
                        </Box>
                    </form>
                </Main>
            </Box>
        </div>
    );
}