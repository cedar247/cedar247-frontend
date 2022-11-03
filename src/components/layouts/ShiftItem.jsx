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


export default function ShiftItem({ shifts, shiftTypes, setShiftTypes}){

    const handleShiftTypes = (event, index) => {
        // setShiftTypes({ ...shiftTypes, [event.target.name]: event.target.checked });
        let CPshifTypes = [...shiftTypes];
        let shiftType = {...CPshifTypes[index]}
        shiftType.checked = event.target.checked;
        CPshifTypes[index] = shiftType;
        setShiftTypes(CPshifTypes)
    };
    return (
    <FormGroup>
        {
        shifts.map(
            (shift, index, arr) => (
                <Box key={shift._id}>
                    <FormControlLabel
                        key={shift._id}
                        control={
                        <Checkbox
                            checked={shiftTypes[index].checked}
                            onChange={(e) => handleShiftTypes(e, index)}
                            name={shift.name}
                            color="secondary"
                            key={shift._id}
                        />
                        }
                        label={shift.name + " ( " + shift.startTime + " - " + shift.endTime + " )"}
                    />
                </Box>
                )
            )
        } 
    </FormGroup>
    );
}