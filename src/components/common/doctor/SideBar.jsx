import React from 'react';
// import {Redirect} from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import { makeStyles } from "@material-ui/core/styles";
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import SyncLockSharpIcon from '@mui/icons-material/SyncLockSharp';
import PreviewSharpIcon from '@mui/icons-material/PreviewSharp';
import TransferWithinAStationSharpIcon from '@mui/icons-material/TransferWithinAStationSharp';
import { Link } from "react-router-dom";
import { indigo, blue, green, purple } from "@mui/material/colors";


const useStyles = makeStyles({
    paper: {
        background: "#f5f5f5"
    }
});

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function SideBar(props) {
    const classes = useStyles();
    const theme = useTheme();

    const handleClickDefineRequirements = () =>{
        props.handledefinerequirements();
    }
    const     handleClickChangePassword    = () =>{
        props.handleChangePassword();
    }
    const handleClickRequestExchangeShifts = () =>{
        props.handleRequestExchangeShifts();
    }
    return (
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
                open={props.open}
            >
                <div className={classes.paper}>
                    <DrawerHeader>
                        <Typography variant="h6" component="div">
                            MENU
                        </Typography>
                        <IconButton aria-label = "btn-menue" onClick={props.handleDrawerClose}>
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
                                <ListItem sx={{ mr: 2, ...(!props.defreq && { display: 'none' }) }}>
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: "#f5f5f5" }}>
                                            <LibraryAddIcon sx={{ color: blue[800], fontSize: 30 }} aria-label= "avatar-DefReq"/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <div  className= " mt: 3 mb: 2" >
                                        <Button sx={{ bgcolor: blue[800] }}
                                            aria-label = "btn-DefReq"
                                            onClick={handleClickDefineRequirements}
                                            variant="contained"
                                            fullWidth
                                        > Define Requirements
                                        </Button>
                                    </div>
                                </ListItem>
                                <Divider variant="inset" color="blue" sx={{ ...(!props.defreq && { display: 'none' }) }} />
                                <ListItem sx={{ mr: 2, ...(!props.chanpass && { display: 'none' }) }}>
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: "#f5f5f5" }}>
                                            <TransferWithinAStationSharpIcon sx={{color: indigo[700], fontSize: 30 }} aria-label= "avatar-ExShift" />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <div  className= " mt: 3 mb: 2" >
                                    <Button sx={{ bgcolor: blue[800] }}
                                            aria-label = "btn-ExShift"
                                            onClick={handleClickRequestExchangeShifts}
                                            variant="contained"
                                            fullWidth
                                        > Request to Exchange Shift
                                        </Button>
                                    </div>
                                </ListItem>
                                <Divider variant="inset" color="blue" sx={{ ...(!props.chanpass && { display: 'none' }) }} />
                                <ListItem>
                                        <ListItemAvatar>
                                            <Avatar sx={{ bgcolor: "#f5f5f5" }}>
                                                <PreviewSharpIcon color="secondary" sx={{ color: blue[800],fontSize: 30 }} aria-label= "avatar-ViewExchange"/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        {/* <ListItemText primary="Vacation" secondary="July 20, 2014" /> */}
                                        <Link to="/viewExchangeShifts" style={{textDecoration: 'none'}}>
                                        <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                aria-label = "btn-ViewExchange"
                                                sx={{ bgcolor: blue[800], mt: 3, mb: 2 }}
                                            >
                                                View Exchange Shifts
                                            </Button>
                                        </Link>
                                </ListItem>
                                <Divider variant="inset" color="blue" sx={{ ...(!props.chanpass && { display: 'none' }) }} />
                                <ListItem sx={{ mr: 2, ...(!props.chanpass && { display: 'none' }) }}>
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: "#f5f5f5" }}>
                                            <SyncLockSharpIcon color="secondary" sx={{ color: blue[800], fontSize: 30 }} aria-label= "avatar-chanPassword" />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <div  className= " mt: 3 mb: 2" >
                                    <Button sx={{ bgcolor: blue[800] }}
                                            aria-label = "btn-chanPassword"
                                            onClick={handleClickChangePassword}
                                            variant="contained"
                                            fullWidth
                                        > Change password
                                        </Button>
                                    </div>
                                </ListItem>
                            </div>
                        </List>
                    </Box>
                    <Divider color="secondary" />

                    <div className='settings'>
                    <List>
                        <Button>
                            <ListItem>
                                {/* import SettingsIcon from '@mui/icons-material/Settings'; */}
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: "#f5f5f5" }}>
                                        <AccountCircleIcon color="primary" sx={{ fontSize: 40 }} />
                                    </Avatar>
                                </ListItemAvatar>
                                Profile
                            </ListItem>
                        </Button>
                    </List>
                    </div>
                </div>
            </Drawer>
    )
}