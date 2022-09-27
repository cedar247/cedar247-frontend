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
import DoctorService from "../../services/API/DoctorService";

const drawerWidth = 240;

const useStyles = makeStyles({
    paper: {
        background: "#f5f5f5",
    },
});

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    })
);

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

export default function Defnerequirements() {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState('');
    const [morning, setMorning] = React.useState(false);
    const [evening, setEvening] = React.useState(false);
    const [night, setNight] = React.useState(false);
    const id = ""; //doctor user id
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
        <div className="DashBody">
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <Header handleDrawerOpen={handleDrawerOpen} open={open} />
                <SideBar handleDrawerClose={handleDrawerClose} open={open} />
                <Main open={open}>
                    <DrawerHeader />
                    <Grid align = "center" style ={{paddingTop:"100px"}} > 
                    <Paper style ={{width:"70%",height:"50%", padding:"5%" }}>
                    <Box align="center">
                        <Typography
                            variant="h4"
                            component="h1"
                            align="center"
                            gutterBottom
                        >
                            Define Requirement
                        </Typography>
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
                            <div style={{align: "center", width:'40%' }}>
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
                    </Paper>
                    </Grid>
                </Main>
            </Box>
        </div>
    );
}
