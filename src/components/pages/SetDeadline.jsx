import React, { useState, useEffect } from 'react';
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
import ConsultantService from "../../services/API/ConsultantService";
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

export default function SetDeadline() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [values, setValues] = React.useState({
        month: "",
        year: "",
        deadline: ""
    });
    const [user, setUser] = React.useState("");

    useEffect(() => {
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
    }, []);


    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (values.month === "" || values.year === "" || values.deadline === ""){
            toast.warning("Fill All Fields", {
                toastId: "1"
            })
        }

        try {
            const token = localStorage.getItem('token');
            const response = await ConsultantService.setDeadline(values, token);
    
            if(response.status === 201) {
                toast.success("Deadline has been set successfully!", {
                    toastId: "1"
                })

                navigate('/ConsultantDashboard')
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

    const setDeadlinePage =
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
                        color='secondary'
                    >
                        Set Deadline
                    </Typography>

                    {/* content of the main is here */}
                    <form action="">
                        <MonthPicker handleChange={handleChange} values={values}/>
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
                                onChange={handleChange("deadline")}
                            />
                        </Box>

                        <Box textAlign='center' m={3}>
                            <Button id="set-deadline-btn" variant="contained" color="primary" type='submit' onClick={handleSubmit}>
                                Set Deadline
                            </Button>
                        </Box>
                    </form>
                </Main>
            </Box>
        </div>
    
    return (
        <>
        {user != "" && user === "CONSULTANT" ? setDeadlinePage :<> <AccessDenied></AccessDenied> </> }
        </>
    )
}