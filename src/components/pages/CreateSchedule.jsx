import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../common/consultant/Header';
import SideBar from "../common/consultant/SideBar";
import { styled } from '@mui/material/styles';
import { Button, Typography, Grid } from '@material-ui/core';
import ShiftDetails from "../schedule/ShiftDetails";
import adminService from '../../services/API/AdminService';
import consulantService from '../../services/API/ConsultantService';
import { toast } from "react-toastify";
import jwtDecode from 'jwt-decode' 
import AccessDenied from './AccessDenied';
import { useNavigate } from 'react-router-dom' 

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
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [shifts, setShifts] = useState([]);
    const [doctorCategories, setDoctorCategories] = useState([]);
    const [requirements, setRequirements] = useState([])
    const [user, setUser] = React.useState("");
   
    useEffect(() => {
        // get the token and identify user type
        const token  = localStorage.getItem('token');
        if(token){
            const user = jwtDecode(token)
            if(!user){
                localStorage.removeItem('token')
                window.location.href = "/"
            }
            else if(user){
                if(user.type ==='CONSULTANT'){
                    setUser("CONSULTANT")
                }else{
                    setUser("NONE")
                }
                
            }
        }else{
            setUser("")
        }

        getShifts();
        getDoctorCategories();
    }, []);
    

    const getShifts = async (token) => {
        try {
            const token  = localStorage.getItem('token'); // get token
            const response = await adminService.getShifts(token);
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
            const token  = localStorage.getItem('token'); // get token
            const response = await consulantService.getDoctorCategories(token);
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
        if(requirement.shiftId === id) {
            // console.log(typeof doctorCategory)
            requirement[doctorCategory] = e.target.value;
            cpRequirements[index] = requirement;
            setRequirements(cpRequirements)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let error = false;
        console.log(requirements)
        for(let i = 0; i < requirements.length; i++){
            const requirementDetails = requirements[i];

            // iterate through doctor cactegories
            for(let i = 0; i < doctorCategories.length; i++){
                if(requirementDetails[doctorCategories[i]] === ""){
                    error = true
                }
            }
        }

        
        
        try {
            if(error) {
                toast.warning("Fill all the fields", {
                    toastId: "1"
                })
            } else {
                const token = localStorage.getItem('token')
                const response = await consulantService.createSchedule(requirements, token);
                if(response.status === 201) {
                    toast.success("Schedule created successfully!!", {
                        toastId: "1"
                    })
                    navigate('/ConsultantDashboard')
                }
                console.log(response)
            }
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

    const CreateSchedulePage =
        <div>
            <Box 
                sx={{ display: 'flex' }}
                className="container"
            >
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
                        color='secondary'
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
                                        <ShiftDetails requirements={requirements} handleRequirements={handleRequirements} index={index} id={shift._id} shiftName={shift.name} doctorCategories={doctorCategories} key={shift._id}/>
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
    
    return (
        <>
        {user !== "" && user === "CONSULTANT" ? CreateSchedulePage :<> <AccessDenied></AccessDenied> </> }
        </>
    )
}