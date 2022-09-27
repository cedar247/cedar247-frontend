import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Calendar from '../pages/Calendar.jsx';
import Header from '../common/consultant/Header';
import SideBar from "../common/consultant/SideBar";

const windowHeight = window.innerHeight-200;
const drawerWidth = 280;
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
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    // document.body.style.backgroundImage = `url(${Back2})`;
    return (
        <div className='DashBody' >
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Header handleDrawerOpen={handleDrawerOpen} open={open}/>
                <SideBar handleDrawerClose={handleDrawerClose} open={open}/>
                <Main open={open} style={{paddingTop: '100px' }}>
                    <Calendar windowHeight = {windowHeight} />
                </Main>
            </Box>
        </div>
    );
}
