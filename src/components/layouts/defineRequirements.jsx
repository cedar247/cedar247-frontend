import React from "react";
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import { TextField } from "@material-ui/core";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Header from "../common/doctor/Header";
import SideBar from "../common/doctor/SideBar";
import { Grid, Paper, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { toast } from "react-toastify";
import DoctorService from "../../services/API/DoctorService";

const theme = createTheme();

const useStyles = makeStyles({
    paper: {
        background: "#f5f5f5",
    },
});

export default function Defnerequirements() {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState('');
    const [morning, setMorning] = React.useState(false);
    const [evening, setEvening] = React.useState(false);
    const [night, setNight] = React.useState(false);
    const id = "633ab0f123be88c950fb8a89"; //doctor user id
    // const shifts ={
    //     {id: "", startTime: "",endTime: "",}, //shiftid
    //     {id: "", startTime: "",endTime: "",}, //shiftid
    //     {id: "", startTime: "",endTime: "",}, //shiftid
    // }
    // const [values, setValues] = React.useState({
    //     date: "",
    //     morning: '',
    //     evening: '',
    //     night: '',
    // });

    // const handleChange = (prop) => (event) => {
    //     if(prop == "morning"){
    //         setValues({ ...values, [prop]: event.target.checked });
    //         console.log(event.target.checked);
    //     }if(prop == "enening"){
    //         setValues({ ...values, [prop]: event.target.checked });
    //     }if(prop == "night"){
    //         setValues({ ...values, [prop]: event.target.checked });
    //     }else{
    //     setValues({ ...values, [prop]: event.target.value });
    //     }
    // };

    const handleDate = (event) =>{
            setDate(event.target.value);
    }
    const handleMorning = (event) =>{
        setMorning(event.target.checked);
    }
    const handleEvening = (event) =>{
        setEvening(event.target.checked);
    }
    const handleNight = (event) =>{
        setNight(event.target.checked);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submitted");
        const values ={
            id:id,
            date:date,
            morning:morning,
            evening:evening,
            night:night,
        }
        console.log(values);
        try {
            const response = await DoctorService.defineRequirements(values);
            if(response.status === 200){
                // e.preventDefault();
                toast.success("Requirement is added",{
                    toastId: "1"})
            }else{
                toast.error("Please try again",{
                    toastId: "1"})
            }
            console.log(response);

        } catch (error) {
            console.log(error);
        }
    };

    // const paperStyle = { padding: '0px',}

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (

        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <Typography variant='caption' ><h1 align="center" >Define Requirements</h1></Typography>
                <CssBaseline />
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                <form action="">
                    <TextField
                        id="date"
                        label="date"
                        type="date"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        margin='normal'
                        color='secondary'
                        onChange={handleDate}
                    />
                    <div style={{align: "center", width:'100%' }}>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        id="morning"
                                        value={morning}
                                        onChange={handleMorning}
                                    />
                                }
                                label="(8 am -1 pm)"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        id="evening"
                                        value={evening}
                                        onChange={handleEvening}
                                    />
                                }
                                label="(1 pm - 7 pm)"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        id="night"
                                        value={night}
                                        onChange={handleNight}
                                    />
                                }
                                label="(7 pm - 8 am)"
                            />
                        </FormGroup>
                        <Button
                            type="submit"
                            style={{ margineTop: "10px" }}
                            variant="contained"
                            onClick={handleSubmit}
                            color="primary"
                        >
                            Add
                        </Button>
                    </div>
                </form>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
