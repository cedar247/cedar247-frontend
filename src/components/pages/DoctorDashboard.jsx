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
const useStyles = makeStyles({
    paper: {
        background: "#f5f5f5"
    }
});


const drawerWidth = 240;

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

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function DoctorDashboard() {
    const classes = useStyles();
    const theme = useTheme();
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

                {/* <Main open={open}>
                </Main> */}
            </Box>
        </div>
    );
}
