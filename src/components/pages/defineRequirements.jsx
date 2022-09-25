import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../common/consultant/Header';
import SideBar from "../common/consultant/SideBar";
import { styled, useTheme } from '@mui/material/styles';
import WardDetails from '../ward/WardDetails';
import Constraints from '../ward/Constraints';
import { Button, Typography, Grid, TextField } from '@material-ui/core';
import Requirements from "../common/doctor/Requirements.jsx";

const drawerWidth = 240;

const box = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: '5%',
    p: '5%',
    border: 1,
    width: '90%',
};

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

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function DefineRequirements() {
    const [open, setOpen] = React.useState(false);
    const [numberofRequirements, setNumberofRequirements] = React.useState();
    const [RequirementGrid, setRequirementGrid] = React.useState([]);
    console.log(numberofRequirements);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        
        setOpen(false);
    };

    const requirementGridComponent = () =>{
        return RequirementGrid.map((item) => {
            return(
                <Grid item xs= {12} sm = {6} md = {3} key={item.id} >
                    <Requirements id = {item.id} />
                </Grid>
                );
            });
    };

    const AddRequirementToGrid = () =>{
        const length =  RequirementGrid.length
        console.log(numberofRequirements);
        console.log(length);
        const newItem ={ 
            id : {},
            date :"",
            morning : "",
            evening: "",
            night: ""
        };
        setRequirementGrid((RequirementGrid)=>[...RequirementGrid, newItem])
        setNumberofRequirements();
    };

    const dropRequirementFromGrid = () => {
        const dropItem = {
            
        }
    }

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline/>
                <Header handleDrawerOpen={handleDrawerOpen} open={open}/>
                <SideBar handleDrawerClose={handleDrawerClose} open={open}/>
                <Main open={open} style={{paddingTop: '70px' }} >
                    <Box sx={{ ...box, borderRadius: 10 }}>
                        <Typography 
                            variant='h4' 
                            component="h1"
                            align='center'
                            gutterBottom
                        >
                            Define Requirements
                        </Typography>

                        {/* content of the main is here */}
                        <form action="">

                            <TextField 
                                id="outlined-basic" 
                                label="Number of requirements" 
                                variant="outlined" 
                                color='secondary' 
                                type="number"
                                InputProps={{ inputProps: { min: 1 }}}
                                margin='normal'
                                onChange = {AddRequirementToGrid}
                                style ={{marginBottom: 30}}
                            />
                            <Grid container spacing={5} item>
                                {requirementGridComponent()}
                            </Grid>
                        </form>
                    </Box>
                </Main>
            </Box>
        </div>
    );
}