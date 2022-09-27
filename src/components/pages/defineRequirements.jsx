import React from "react";
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import { TextField } from "@material-ui/core";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Header from '../common/doctor/Header';
import SideBar from "../common/doctor/SideBar";
import { Grid, Paper, Button, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";


const drawerWidth = 240;

const useStyles = makeStyles({
    paper: {
        background: "#f5f5f5"
    }
});


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

export default function Defnerequirements() {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState(null);
    const [morning, setMorning] = React.useState(null);
    const [evening, setEvening] = React.useState(null);
    const [night, setNight] = React.useState(null);
    const paperStyle = { padding: '0 15px 40px 15px', width: 250, }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className='DashBody' >
            <Box sx={{ display: 'flex' }}>
                <CssBaseline/>
                <Header handleDrawerOpen={handleDrawerOpen} open={open}/>
                <SideBar handleDrawerClose={handleDrawerClose} open={open}/>
                <Main open={open} >
                    <Grid align = "center" style ={{paddingTop:"100px"}} > 
                    <Paper style={paperStyle}>
                    <Box align='center' >
                        <h1 >
                        Define Requirements
                        </h1>
                            <form >
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Select Date"
                                    value={date}
                                    onChange ={(newValue)=> setDate(newValue)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                            <div style={{align: "center", width:'250px' }}>
                                <FormGroup >
                                    <FormControlLabel control={<Checkbox value={morning} onchange = {setMorning}  />} label="Morning shift (8 am -1 pm)"  />
                                </FormGroup>
                                <FormGroup >
                                    <FormControlLabel control={<Checkbox value={evening} onchange = {setEvening}  />}  label="Evening shift (1 pm - 7 pm)"/>
                                </FormGroup>
                                <FormGroup >
                                    <FormControlLabel control={<Checkbox value={night}  onchange = {setNight} />}  label="Night shift (7 pm - 8 am)"  />
                                </FormGroup>
                                <Button type='submit' style={{margineTop:"10px"}} variant='contained'
                                            color='primary'>Submit</Button>
                            </div>
                            </form>
                    </Box>
                    </Paper>
                    </Grid>
                </Main>
            </Box>
        </div>
    ); 
}
