import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../common/admin/Header';
import SideBar from '../common/admin/SideBar';
import { styled, useTheme } from '@mui/material/styles';
import WardDetails from '../ward/WardDetails';
import Constraints from '../ward/Constraints';
import { Button, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";
import adminService from "../../services/API/AdminService";
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

export default function AddWard() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    // const [ numShifts, setNumShifts ] = useState(0);
    const [wardDetails, setWardDetails] = React.useState({
        name: "",
        number: ""
    });

    const [shifts, setShifts] = useState([]);
    const [doctorCategories, setDoctorCategories] = useState({
        "Senior Registrar": true,
        "Registrar": true,
        "Senior Home Officer": true,
        "Home Officer": true,
        "Medical Officer": true
    })

    const handleShiftChange = (e, index, name) => {
            let cpShifts = [...shifts];
            let shift = {...cpShifts[index]}
            shift[name] = e.target.value;
            cpShifts[index] = shift;
            setShifts(cpShifts)
    }

    const handleDoctorCategories = (event) => {
        setDoctorCategories({ ...doctorCategories, [event.target.name]: event.target.checked });
    }


    const handleChange = (prop) => (event) => {
        setWardDetails({ ...wardDetails, [prop]: event.target.value });
      };

    

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await adminService.addWard({...wardDetails, doctorCategories, shifts});
            if(response.status === 201) {
                // navigate.push({
                //     pathname: '/set-constraints',
                //     state: response.data.wardId
                // })
                navigate('/set-constraints')
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
                        Add Ward
                    </Typography>

                    {/* content of the main is here */}
                    <form action="">
                        <WardDetails wardDetails={wardDetails} handleChange={handleChange} handleShiftChange={handleShiftChange} handleDoctorCategories={handleDoctorCategories} doctorCategories={doctorCategories}/>
                        {/* <Constraints/> */}
                        <Box textAlign='center'>
                            <Link to="/set-constraints" style={{textDecoration: 'none'}}>
                                <Button variant="contained" color="primary" type='submit' onClick={handleSubmit}>
                                Next
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Main>
            </Box>
        </div>
    );
}