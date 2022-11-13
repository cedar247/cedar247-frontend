import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../common/admin/Header';
import SideBar from '../common/admin/SideBar';
import { styled, useTheme } from '@mui/material/styles';
import WardDetails from '../ward/WardDetails';
import Constraints from '../ward/Constraints';
import { Button, Typography } from '@material-ui/core';
import { Navigate, useLocation } from 'react-router-dom';
import adminService from '../../services/API/AdminService';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'
import jwtDecode from 'jwt-decode';
import AccessDenied from './AccessDenied';
import { Grid } from '@mui/material';
import ConsecutiveShifts from '../ward/ConsecutiveShifts';

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
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [shifts, setShifts] = useState([]);
    const [shiftTypes, setShiftTypes] = useState([]);
    const [numConsecGroups, setNumConsecGroups] = useState(0);
    const [consecGroups, setConsecGroups] = useState([]);

    const [user, setUser] = React.useState("");

    useEffect(() => {
        getShifts();
    }, []);
    

    const getShifts = async () => {
        try {
            // get token
            const token  = localStorage.getItem('token');
            if(token){
                const user = jwtDecode(token)
                if(!user){
                    localStorage.removeItem('token')
                    window.location.href = "/"
                }
                else if(user){
                    if(user.type ==='Admin'){
                        setUser("Admin")
                    }else{
                        setUser("NONE")
                    }
                    
                }
            }else{
                setUser("")
            }

            const response = await adminService.getShifts(token);
            const consecutiveGroupsResponse = await adminService.getNumConsecGroups(token);
            if(response.data && consecutiveGroupsResponse.data) {
                const shiftsGot = response.data;
                setShifts(shiftsGot)

                // consecutive groups of shifts
                const numConsec = consecutiveGroupsResponse.data.numConsecGroups;
                setNumConsecGroups(numConsec)

                const consecGroupsShifts = []
                for(let i = 0; i < numConsec; i++) {
                    const shiftGroups = []

                    for(let j = 0; j < shiftsGot.length; j++) {
                        shiftGroups.push({
                            id: shiftsGot[j]._id,
                            checked: true
                        })
                    }

                    consecGroupsShifts.push(shiftGroups)
                }
                setConsecGroups(consecGroupsShifts)

                // for shifts with vacation
                const types = []
                const casualtyDShifts = []
                for(let i = 0; i < shiftsGot.length; i++){
                    types.push({
                        id: shiftsGot[i]._id,
                        checked: true,
                        vacation: 0
                    })

                    casualtyDShifts.push({
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

    // for consecutive shifts
    const handleConsecutiveShifts = (e, innerIndex, outerIndex) => {
        let cpConsecGroups = [...consecGroups]
        let consecGroup = [...cpConsecGroups[outerIndex]]
        consecGroup[innerIndex].checked = e.target.checked
        cpConsecGroups[outerIndex] = consecGroup
        setConsecGroups(cpConsecGroups)
    }

    const createGroups = () => {
        let arr  = []
        for(let i = 0; i < numConsecGroups; i++){
            arr.push(
                <Grid key={i} item md={4} sm={6} xs={12}>
                    <ConsecutiveShifts 
                        shifts={shifts}
                        handleConsecutiveShifts={handleConsecutiveShifts}
                        outerIndex={i}
                        consecutiveGroups={consecGroups}
                    />
                </Grid>
            )
        }

        return(
            <Grid container spacing={3}  mb={2}>
                {arr.map(shiftGroup=>shiftGroup)}
            </Grid>
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(shiftTypes === []) {
            toast.warning("Fill All Fields", {
                toastId: "1"
            })
        }

        else {
            try {
                const token = localStorage.getItem('token') // get the token from localstorage
                const response = await adminService.setConstraints({
                    shiftTypes,
                    consecGroups
                }, token)

                if(response.status === 201) {
                    toast.success("Constraints has been successfully set", {
                        toastId: "1"
                    })

                    navigate('/wards')
                } else if(response.status === 200) {
                    const error = response.data.error;

                    if(error !== undefined){
                        toast.error(error, {
                            toastId: "1"
                        })
                    }
                }
            } catch(error) {
                console.log(error)
            }
        }
        
    }
    

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const setConstraintPage = 
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
                            shiftTypes={shiftTypes}
                            setShiftTypes={setShiftTypes}
                        />
                        <Typography>
                            Select the consecutive Groups of Shifts* (select alteast two shifts in a group)
                        </Typography>
                        {createGroups()}
                        <Box textAlign='center'>
                            <Button variant="contained" color="primary" type='submit' onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Box>
                    </form>
                </Main>
            </Box>
        </div>
    
    return(
        <>
        {user != "" && user === "Admin" ? setConstraintPage :<> <AccessDenied></AccessDenied> </> }
        </>
    )
}