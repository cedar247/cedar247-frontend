import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import DoctorService from "../../services/API/DoctorService";
import Header from '../common/doctor/Header';
import SideBar from "../common/doctor/SideBar";
import Calendar from '../layouts/DoctorCalendar.jsx';
import PopUp from '../layouts/DoctorPopups';
import jwtDecode from 'jwt-decode'
import { useEffect } from "react";


const drawerWidth = 240;
const windowHeight = window.innerHeight - 200;

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

export default function DoctorDashboard() {


    const [user, setUser] = React.useState("");
    const [id, setID] = React.useState("");
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const user = jwtDecode(token)
            if (!user) {
                localStorage.removeItem('token')
                window.location.href = "/restricted"
            }
            else if (user) {
                if (user.type === "DOCTOR") {
                    setUser("DOCTOR");
                    setID(user._id);
                    handleGetShifts(user._id)
                } else {
                    window.location.href = "/restricted"
                    setUser("NONE")
                }

            }
        } else {
            window.location.href = "/restricted"
            setUser("")
        }
    }, []);
    const handleLogout = async (e) => {
        localStorage.removeItem('token')
        window.location.href = "/"
    }
    const [open, setOpen] = React.useState(false);
    const [popOpen, setPopOpen] = React.useState(false);
    const [Option, setOption] = React.useState(0);

    // const id = "6334249bebcfbf785191df1d";
    const [shifts, setShifts] = React.useState([]);


    const handleGetShifts = async (userid) => {

        try {
            const response = await DoctorService.getShifts({ id: userid });
            console.log(response);
            if (response.data) {
                setShifts(response.data)
            }
        } catch (error) {
            console.log(error);
        }

    };

    // React.useEffect(() => {

    //     async function handleGetShifts(){

    //         try {
    //                 const response = await DoctorService.getShifts({id:id});
    //                 console.log(response);
    //                 if(response.data) {
    //                     setShifts(response.data)
    //                 }
    //             } catch (error) {
    //                 console.log(error);
    //             }
    //         }

    // handleGetShifts();},[id]);

    const handledefinerequirements = () => {
        setPopOpen(true);
        setOption(1);
    }
    const handleChangePassword = () => {
        setPopOpen(true);
        setOption(2);
    }
    const handleRequestExchangeShifts = () => {
        setPopOpen(true);
        setOption(3);
    }
    const handleClosePop = () => {
        setPopOpen(false);
    }
    const SetDefaultOption = () => {
        setOption(0);
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const doctorpage = <div>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header handleDrawerOpen={handleDrawerOpen} handlelogout={handleLogout} open={open} />
            <SideBar 
                    handleDrawerClose={handleDrawerClose} 
                    open={open} 
                    home={false} 
                    chanpass={true} 
                    defreq={true} 
                    handledefinerequirements={handledefinerequirements} 
                    handleChangePassword={handleChangePassword} 
                    handleRequestExchangeShifts ={handleRequestExchangeShifts}
                />
            <Main open={open} style={{ paddingTop: '100px' }}>
                <Calendar id={id} windowHeight={windowHeight} />
                <PopUp id={id} opener={popOpen} closer={handleClosePop} DefaultOption={SetDefaultOption} Option={Option} shifts={shifts} />
            </Main>
        </Box>
    </div>

    return (
        <>
            {user !== "" && user === "DOCTOR" ? doctorpage : <></>}
        </>
    )
}
