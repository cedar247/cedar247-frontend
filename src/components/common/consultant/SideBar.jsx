import React from 'react';
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
import AddHomeIcon from '@mui/icons-material/AddHome';
import { Button, Grid} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CreateIcon from '@mui/icons-material/Create';
import GroupsIcon from '@mui/icons-material/Groups';
import SyncLockSharpIcon from '@mui/icons-material/SyncLockSharp';
import PreviewSharpIcon from '@mui/icons-material/PreviewSharp';
import EditAttributesIcon from '@mui/icons-material/EditAttributes';
import PasswordIcon from '@mui/icons-material/Password';
import ChangePassword from '../../pages/ChangePassword.jsx';
import CustomizedDialogs from '../../layouts/Dialog.jsx';
import { Link } from "react-router-dom";
import { blue} from "@mui/material/colors";

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
    const     handleClickChangePassword    = () =>{
        props.handleChangePassword();
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
                            <IconButton onClick={props.handleDrawerClose}>
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
                                                <CalendarMonthIcon color="success" sx={{ fontSize: 30 }} />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                        >
                                            View Schedules
                                        </Button>
                                    </ListItem>
                                    <Divider variant="inset" color="secondary" />
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar sx={{ bgcolor: "#f5f5f5" }}>
                                                <CreateIcon color="primary" sx={{ fontSize: 30 }} />
                                            </Avatar>
                                        </ListItemAvatar>
                                        {/* <ListItemText primary=""/> */}
                                        <Link to="/create-schedule" style={{textDecoration: 'none'}}>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2 }}
                                            >
                                                Create Schedule
                                            </Button>
                                        </Link>
                                    </ListItem>
                                    <Divider variant="inset" color="secondary" />
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar sx={{ bgcolor: "#f5f5f5" }}>
                                                <GroupsIcon color="secondary" sx={{ fontSize: 30 }} />
                                            </Avatar>
                                        </ListItemAvatar>
                                        {/* <ListItemText primary="Vacation" secondary="July 20, 2014" /> */}
                                        <Link to="/view-doctors" style={{textDecoration: 'none'}}>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2 }}
                                            >
                                                View Doctors
                                            </Button>
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar sx={{ bgcolor: "#f5f5f5" }}>
                                                <PreviewSharpIcon color="secondary" sx={{ color: blue[800],fontSize: 30 }} />
                                            </Avatar>
                                        </ListItemAvatar>
                                        {/* <ListItemText primary="Vacation" secondary="July 20, 2014" /> */}
                                        <Link to="/ConsultantViewSwappingShifts" style={{textDecoration: 'none'}}>
                                        <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                sx={{ bgcolor: blue[800], mt: 3, mb: 2 }}
                                            >
                                                View Exchange Shifts
                                            </Button>
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar sx={{ bgcolor: "#f5f5f5" }}>
                                                <EditAttributesIcon color="secondary" sx={{ fontSize: 30 }} />
                                            </Avatar>
                                        </ListItemAvatar>
                                        {/* <ListItemText primary="Vacation" secondary="July 20, 2014" /> */}
                                        <Link to="/set-deadline" style={{textDecoration: 'none'}}>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2 }}
                                            >
                                                Set Deadline
                                            </Button>
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: "#f5f5f5" }}>
                                            <SyncLockSharpIcon color="primary" sx={{ fontSize: 30 }} />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <div  className= " mt: 3 mb: 2" >
                                        <Button
                                            onClick={handleClickChangePassword}
                                            variant="contained"
                                            fullWidth
                                            color="primary"
                                        > Change password
                                        </Button>
                                    </div>
                                </ListItem>
                                </div>
                            </List>
                        </Box>

                        <Divider />

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
    )
}