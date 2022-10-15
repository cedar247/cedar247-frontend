import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PasswordIcon from '@mui/icons-material/Password';
import { Button, Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { makeStyles } from "@material-ui/core/styles";
import LogoutIcon from '@mui/icons-material/Logout';
import ChangePassword from '../pages/ChangePassword.jsx';
import CustomizedDialogs from '../layouts/Dialog.jsx';
import Calendar from '../layouts/DoctorCalendar.jsx';
import Header from '../common/doctor/Header';
import SideBar from "../common/doctor/SideBar";
import PopUp from '../layouts/DoctorPopups';
import DoctorService from "../../services/API/DoctorService";

const useStyles = makeStyles({
    paper: {
        background: "#f5f5f5"
    }
});


const drawerWidth = 240;
const windowHeight = window.innerHeight-200;

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
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [openPop, setPopOpen] = React.useState(false);
    const [Option, setOption] = React.useState(0);

    const id = "6334249bebcfbf785191df1d";
    const [shifts, setShifts] = React.useState([]);

    React.useEffect(() => {
        
        async function handleGetShifts(){
            
            try {
                    const response = await DoctorService.getShifts({id:id});
                    console.log(response);
                    if(response.data) {
                        setShifts(response.data)
                    }
                } catch (error) {
                    console.log(error);
                }
            }
    
    handleGetShifts();},[id]);

    const handledefinerequirements = () => {
        setPopOpen(true);
        setOption(1);
    }
    const handleChangePassword = () => {
        setPopOpen(true);
        setOption(2);
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
    return (
        <div className='DashBody' >
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Header handleDrawerOpen={handleDrawerOpen} open={open}/>
                <SideBar handleDrawerClose={handleDrawerClose} open={open} home = {false} chanpass ={true} defreq ={true} handledefinerequirements = {handledefinerequirements} handleChangePassword= {handleChangePassword} />
                <Main open={open} style={{paddingTop: '100px' }}>
                    <Calendar  id = {id} windowHeight = {windowHeight} />
                    <PopUp opener={openPop} closer={handleClosePop} DefaultOption={SetDefaultOption} Option={Option} shifts={shifts} />
                </Main>
            </Box>
        </div>
    );
}
