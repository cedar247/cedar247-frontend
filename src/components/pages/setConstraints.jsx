import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../common/admin/Header';
import SideBar from '../common/admin/SideBar';
import { styled, useTheme } from '@mui/material/styles';
import WardDetails from '../ward/WardDetails';
import Constraints from '../ward/Constraints';
import { Button, Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import adminService from '../../services/API/AdminService';


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

export default function SetConstraint() {
    const [open, setOpen] = React.useState(false);
    const [shifts, setShifts] = useState([]);
    const [maxLeaves, setMaxLeaves] = useState(0);
    const [numConsecutiveGroupShifts, setNumConsecutiveGroupShifts] = useState(0);
    const [consecutiveGroups, setConsecutiveGroups] = useState([]);
    const [specialShifts, setSpecialShifts] = useState([]);
    const [casualtyDay, setCasualtyDay] = useState('');
    const [casualtyDayShifts, setCasualtyDayShifts] = useState([]);
    const [shiftTypes, setShiftTypes] = useState([]);

    useEffect(() => {
            getShifts();
    }, []);
    

    const getShifts = async () => {
        try {
            const response = await adminService.getShifts();
            if(response.data) {
                const shiftsGot = response.data;
                setShifts(shiftsGot)
                const types = []
                for(let i = 0; i < shiftsGot.length; i++){
                    types.push({
                        id: shiftsGot[i]._id,
                        checked: true
                    })
                }
                setShiftTypes(types)
            }
        } catch (error) {
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
                        Constraints
                    </Typography>

                    {/* content of the main is here */}
                    <form action="">
                        {/* <WardDetails/> */}
                        <Constraints 
                            shifts={shifts} 
                            setMaxLeaves={setMaxLeaves} 
                            setNumConsecutiveGroupShifts={setNumConsecutiveGroupShifts}
                            numConsecutiveGroupShifts={numConsecutiveGroupShifts}
                            casualtyDay={casualtyDay}
                            setCasualtyDay={setCasualtyDay}
                            shiftTypes={shiftTypes}
                            setShiftTypes={setShiftTypes}
                        />
                        <Box textAlign='center'>
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