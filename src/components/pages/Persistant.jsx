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
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Button, Grid } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import InputAdornment from '@mui/material/InputAdornment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
// import ResponsiveGrid from './Gridss';
import AddHomeIcon from '@mui/icons-material/AddHome';
import { Add } from '@mui/icons-material';
// import Divider from '@mui/material/Divider';
import { green } from "@mui/material/colors";
// import OutlinedCard from './Cards';
// import Details from './Details';
// import Back2 from './Back2.jpg'
import { makeStyles } from "@material-ui/core/styles";
import '../../index.css';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Details from '../layouts/Details';
import PopUp from '../layouts/Popup';
import { Main, AppBar, DrawerHeader, drawerWidth } from '../layouts/Drawer'
import { useState, useEffect } from "react";
import AdminService from '../../services/API/AdminService';

const useStyles = makeStyles({
    paper: {
        background: "#f5f5f5"
    }
});


export default function AdminDashboard() {
    const [Wards, setWards] = useState([]);
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [openPop, setPopOpen] = React.useState(false);
    const [Option, setOption] = React.useState(0);

    useEffect(() => {
        getAllWards();
      }, []);
    
      const getAllWards = async () => {
        try {
          const response = await AdminService.getAllWards();
          console.log(response);
          console.log(response.data);
          setWards(response.data);
        } catch (error) {
          console.log(error)
        }
    
      };
    const handleConsultant = () => {
        setPopOpen(true);
        setOption(1);
    }
    const handleDoctor = () => {
        setPopOpen(true);
        setOption(2);
    }
    const handleCloseAddWard = () => {
        setPopOpen(false);
    }


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const SetDefaultOption = () => {
        setOption(0);
    };
    // document.body.style.backgroundImage = `url(${Back2})`;
    return (
        <div className='DashBody' >
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
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
                            DASHBOARD
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
                                {/* <AccountBoxIcon color="primary" sx={{ fontSize: 100 }} /> */}
                                {/* <Avatar sx={{ width: 150, height: 150, bgcolor:  "#f5f5f5" }}></Avatar> */}
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
                                        <Button
                                            color="success"
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}

                                        >
                                            WARD
                                        </Button>
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
                        {/* <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List> */}

                        <Divider />
                        <div className='settings'>
                            <List>
                                <ListItem>
                                    {/* import SettingsIcon from '@mui/icons-material/Settings'; */}
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

                <Main open={open}>
                    <DrawerHeader />
                    <div className="container text-center"
                        style={{
                            width: "auto", height: "auto", textAlign: "center"
                        }}><h2>WARDS</h2></div>
                    {/* <ResponsiveGrid /> */}
                    {/* <OutlinedCard/> */}
                    <Details  wards = {Wards}/>
                    <PopUp opener={openPop} closer={handleCloseAddWard} DefaultOption={SetDefaultOption} Option={Option} />
                </Main>
            </Box>
        </div>
    );
}
