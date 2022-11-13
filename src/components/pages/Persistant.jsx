import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import AddHomeIcon from '@mui/icons-material/AddHome';
import { makeStyles } from "@material-ui/core/styles";
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { useEffect, useState } from "react";
import '../../index.css';
import AdminService from '../../services/API/AdminService';
import Details from '../layouts/Details';
import { AppBar, DrawerHeader, drawerWidth, Main } from '../layouts/Drawer';
import PopUp from '../layouts/Popup';
import jwtDecode from 'jwt-decode'
import AccessDenied from './AccessDenied';
import Header from '../common/admin/Header';
import { Link } from "react-router-dom";



//to style the page
const useStyles = makeStyles({
    paper: {
        background: "#f5f5f5"
    }
});


export default function AdminDashboard() {
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
                if(user.type ==='Admin'){
                    getAllWards();
                    setUser("Admin")
                     
                }else{
                    setUser("NONE")
                }
                
            }
        }else{
            setUser("")
        }
      }, []);
    //   useEffect(() => {
        
    //         getAllWards();
        
    //   }, []);
    const handleLogout= async (e) => {
        localStorage.removeItem('token')
        window.location.href = "/"
        }
    //to keep the details of the ward
    const [Wards, setWards] = useState([]);
    //to save the classes
    const classes = useStyles();
    //to stlye the page
    const theme = useTheme();
    //to open the side navbar
    const [open, setOpen] = React.useState(false);
    //to control the popup page )(opens the popup page)
    const [openPop, setPopOpen] = React.useState(false);
    const [Option, setOption] = React.useState(0);
    // fetches all details of the ward

    const getAllWards = async () => {
        try {
            const response = await AdminService.getAllWards();

            console.log(response);
            console.log(response.data);
            //stores the details of the ward
            setWards(response.data);
        } catch (error) {
            console.log(error)
        }

    };
    // handles the opening of the popup for consultant
    const handleConsultant = () => {
        setPopOpen(true);
        setOption(1);
    }
    // const handleWard = () => {
    //     setPopOpen(true);
    //     setOption(3);
    // }
    // handles the opening of the popup for doctor
    const handleDoctor = () => {
        setPopOpen(true);
        setOption(2);
    }
    //to handle the close function of the add ward
    const handleCloseAddWard = () => {
        setPopOpen(false);
    }

    // to handle the side bar open
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    // to handle the side bar close
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const SetDefaultOption = () => {
        setOption(0);
    };
    // document.body.style.backgroundImage = `url(${Back2})`;

    const Adminpage = 
        <div className='DashBody' >
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                {/* appBar component of the page */}
                <Header handleDrawerOpen={handleDrawerOpen} handlelogout={handleLogout} open={open} />
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h5" component="div">
                            ADMIN
                        </Typography>

                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'row-reverse'
                            }}
                        >
                            <Button color="inherit">   <Divider orientation="vertical" flexItem>
                                <Typography variant="h6" component="div">
                                    LOGOUT
                                </Typography>
                            </Divider><LogoutIcon /></Button>
                        </Box>

                    </Toolbar>
                </AppBar>


                {/* Side bar component of the page */}
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <div className={classes.paper}>
                        <DrawerHeader>
                            <Typography variant="h6" component="div">
                                MENU
                            </Typography>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                            </IconButton>
                        </DrawerHeader>
                        <div className='SideBody' >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                               
                            </Box>
                        </div>
                        <br></br>
                        <br></br>
                        <Divider color="primary" />
                        <Box>
                            <List
                                sx={{
                                    width: '100%',
                                    maxWidth: 360,
                                    bgcolor: 'background.paper',
                                }}
                            >
                                <div className={classes.paper}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar sx={{ bgcolor: "#f5f5f5" }}>
                                                <AddHomeIcon color="success" sx={{ fontSize: 30 }} />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <Link to="/add-wards" style={{textDecoration: 'none'}} fullWidth>
                                            <Button
                                                color="success"
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2 , pl: 5, pr:5}}
                                                // onClick={handleWard}

                                            >
                                                WARD
                                            </Button>
                                        </Link>
                                    </ListItem>
                                    <Divider variant="inset" color="secondary" />
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar sx={{ bgcolor: "#f5f5f5" }}>
                                                <PersonAddIcon color="primary" sx={{ fontSize: 30 }} />
                                            </Avatar>
                                        </ListItemAvatar>
                                        {/* <ListItemText primary=""/> */}
                                        <Button
                                            color="primary"
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                            onClick={handleConsultant}
                                        >
                                            Consultant
                                        </Button>
                                    </ListItem>
                                    <Divider variant="inset" color="secondary" />
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar sx={{ bgcolor: "#f5f5f5" }}>
                                                <PersonAddIcon color="secondary" sx={{ fontSize: 30 }} />
                                            </Avatar>
                                        </ListItemAvatar>
                                        {/* <ListItemText primary="Vacation" secondary="July 20, 2014" /> */}
                                        <Button
                                            color="secondary"
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                            onClick={handleDoctor}
                                        >
                                            Doctor
                                        </Button>
                                    </ListItem>
                                </div>
                            </List>
                        </Box>

                        <Divider />
                        <Divider />
                        <div className='settings'>
                            <List>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: "#f5f5f5" }}>
                                            <SettingsIcon color="primary" sx={{ fontSize: 40 }} />
                                        </Avatar>
                                    </ListItemAvatar>
                                    Settings

                                </ListItem>
                            </List>
                        </div>
                    </div>
                </Drawer>
                {/* main component of the page */}
                <Main open={open}>
                    <DrawerHeader />
                    <div className="container text-center"
                        style={{
                            width: "auto", height: "auto", textAlign: "center"
                        }}><h2>WARDS</h2></div>
                    {/* <ResponsiveGrid /> */}
                    {/* <OutlinedCard/> */}
                    {/* details of the ward  */}
                    <Details wards={Wards} />
                    {/* send the props to pop up */}
                    <PopUp opener={openPop} closer={handleCloseAddWard} DefaultOption={SetDefaultOption} Option={Option} />
                </Main>
            </Box>
        </div>
        return(
            <>
            {user !== "" && user === "Admin" ? Adminpage :<> <AccessDenied></AccessDenied> </> }
            </>
        )


}
