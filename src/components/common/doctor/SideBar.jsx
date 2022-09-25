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
import SettingsIcon from '@mui/icons-material/Settings';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CreateIcon from '@mui/icons-material/Create';
import GroupsIcon from '@mui/icons-material/Groups';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import EditAttributesIcon from '@mui/icons-material/EditAttributes';
import PasswordIcon from '@mui/icons-material/Password';
import ChangePassword from '../../pages/ChangePassword.jsx';
import CustomizedDialogs from '../../layouts/Dialog.jsx';

const useStyles = makeStyles({
    paper: {
        background: "#f5f5f5"
    }
});

const drawerWidth = 270;

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
                                            <AddBoxIcon color="success" sx={{ fontSize: 30 }} />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color= "success"
                                        sx={{ mt: 3, mb: 2, }}
                                    >
                                        Define Requirements
                                    </Button>
                                </ListItem>
                                <Divider variant="inset" color="secondary" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: "#f5f5f5" }}>
                                            <PasswordIcon color="secondary" sx={{ fontSize: 30 }} />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <div  className= " mt: 3 mb: 2" ><CustomizedDialogs ><ChangePassword/></CustomizedDialogs></div>
                                </ListItem>
                            </div>
                        </List>
                    </Box>

                    <Divider />

                    <Divider />
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