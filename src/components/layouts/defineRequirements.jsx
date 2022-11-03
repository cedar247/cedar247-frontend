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
import ShiftItem from "./ShiftItem"
const theme = createTheme();

const useStyles = makeStyles({
    paper: {
        background: "#f5f5f5",
    },
});

export default function Defnerequirements(props) {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState('');
    const [shifts, setShifts] = React.useState([]);
    const [shiftTypes, setShiftTypes] = React.useState([]);
    const [errors,setErrors] = React.useState([]);

    const id = "633ab0f123be88c950fb8a89"; //doctor user id

    const handleDate = (event) =>{
            setDate(event.target.value);
    }

    React.useEffect(() => {
        const handleGetShifts = async () => {
            try {
                const shiftsGot = props.shifts;
                setShifts(shiftsGot)
                const types = []
                for(let i = 0; i < shiftsGot.length; i++){
                    types.push({
                        id: shiftsGot[i]._id,
                        checked: false,
                    })
                }
                console.log(types)
                setShiftTypes(types)
            } catch (error) {
                console.log(error)
            }
        }
        handleGetShifts();},[id]);

    const handleSubmit = async (e) => {

        console.log("submitted");
        console.log(shiftTypes);

        e.preventDefault();
        if (date == ""){
            errors.push("Set a Date")
            console.log(errors);
        }

        let checkedCount = 0
        for(let i = 0; i < shiftTypes.length; i++){
            if (shiftTypes[i].checked == true){
                checkedCount = checkedCount + 1
            }
        }

        if(checkedCount == 0){
            errors.push("Set leaving Shift")
            console.log(errors);
        }

        if (errors.length == 0){
            try {
                const values ={
                    id:id,
                    date:date,
                    shiftTypes:shiftTypes,
                }
                const response = await DoctorService.defineRequirements(values);
                if(response.status === 200){
                    // e.preventDefault();
                    toast.success("Requirement is added",{toastId: "1"})
                }else{
                    toast.error("Please try again",{toastId: "1"})
                }

                setDate('')
                let CPshifTypes = [...shiftTypes];
                for(let i = 0; i < CPshifTypes.length; i++){
                    CPshifTypes[i].checked = false;
                }
                setShiftTypes(CPshifTypes);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }else{
            for(let i = 0; i < errors.length; i++){
                toast.error(errors[i],{toastId: i.toString()})
            }
        }
        setErrors([])
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
                        <ShiftItem 
                            shifts={shifts} 
                            shiftTypes={shiftTypes}
                            setShiftTypes={setShiftTypes}
                        />
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
