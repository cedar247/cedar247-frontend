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
import { Button, Grid } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from "react-router-dom";

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
                                        <Link to="/add-wards" style={{textDecoration: 'none'}} fullWidth>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2 , pl: 5, pr:5}}
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
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
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
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
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
    )
}