import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Calendar from '../layouts/ConsultantClendar.jsx';
import Header from '../common/consultant/Header';
import SideBar from "../common/consultant/SideBar";
import jwtDecode from 'jwt-decode'
import AccessDenied from './AccessDenied';
import { useEffect, useState } from "react";
import PopUp from '../layouts/ConsultantPopups';

const windowHeight = window.innerHeight-200;
const drawerWidth = 240;
// console.log(windowHeight);
// console.log(windowWidth);


//style the main body of the page when opening and closing the menue bar and differentiate according to device
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

export default function ConsultantDashboard() {

    const [user, setUser] = React.useState("");
    const [id, setID] = React.useState("");
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const user = jwtDecode(token)
            if (!user) {
                localStorage.removeItem('token')
                window.location.href = "/"
            }
            else if (user) {
                if (user.type === "CONSULTANT") {
                    setUser("CONSULTANT");
                    setID(user._id);
                    // handleGetShifts()

                } else {
                    setUser("NONE")
                }

            }
        } else {
            setUser("")
        }
    }, []);
    const [open, setOpen] = React.useState(false);
    const [popOpen, setPopOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleLogout = async (e) => {
        localStorage.removeItem('token')
        window.location.href = "/"
    }


    const handleClosePop = () => {
        setPopOpen(false);
    };

    const handleChangePassword = () => {
        setPopOpen(true);
    };


    // document.body.style.backgroundImage = `url(${Back2})`;
    const consultantpage = 
        <div className='DashBody' >
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                <Header handleDrawerOpen={handleDrawerOpen} open={open} handlelogout={handleLogout}/>
                <SideBar handleDrawerClose={handleDrawerClose} open={open} handleChangePassword={handleChangePassword} />

                <Main open={open} style={{paddingTop: '100px' }}>
                    <Calendar windowHeight = {windowHeight} />
                    <PopUp opener={popOpen} closer={handleClosePop}/>
                </Main>
            </Box>
        </div>
        return (
            <>
                {user != "" && user == "CONSULTANT" ? consultantpage : <> <AccessDenied></AccessDenied> </>}
            </>
        )
}
