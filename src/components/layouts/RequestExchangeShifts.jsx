import * as React from "react";
import dayjs from "dayjs";
import { Button, Typography } from "@material-ui/core";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import DoctorService from "../../services/API/DoctorService";

export default function RequestExchangeShifts(props) {
    const [fromDate, setFromDate] = React.useState(dayjs());
    const [toDate, setToDate] = React.useState(dayjs());
    const [selectedOneDate,setSelectedOneDate] = React.useState(false);
    const [hide, setHide] = React.useState(true);
    const [hideDoctor, setHideDoctor] = React.useState(true);
    const [fromShift, setFromShift] = React.useState("");
    const [toShift, setToShift] = React.useState("");
    const [doctor, setDoctor] = React.useState("");
    const [fromShifts, setFromShifts] = React.useState([]);
    const [toShifts, setToShifts] = React.useState([]);
    const [doctors, setDoctors] = React.useState([]);
    const [errors] = React.useState([]);
    const [shifts, setShifts] = React.useState([]);
    const [id, setID] = React.useState(props.id);

    // const id = "633ab0f123be88c950fb8a89";
    // const id = "633ab54a9fd528b9532b8d59"

    React.useEffect(() => {
        console.log("load page")
        // console.log(fromShifts)
    });

    const handleFromDate = (value) => {
        console.log(value,"value1", toDate , fromDate )
        setFromDate(value);
        if(selectedOneDate){
            getShiftData(value, toDate);
        }
        setSelectedOneDate(true);
    };

    const handleToDate = (value) => {
        console.log(value,"value1", toDate , fromDate )
        setToDate(value);
        if(selectedOneDate){
            getShiftData(fromDate, value);
        }
        setSelectedOneDate(true);
    };

    const handleFromShift = (event) => {
        setFromShift(event.target.value);
        if(toShift !== ""){
            getDoctorData(event.target.value , toShift)
        }
    };

    const handleToShift = (event) => {
        console.log(fromShift,event.target.value, "handletoshift")
        setToShift(event.target.value);
        if(fromShift !== ""){
            getDoctorData(fromShift ,event.target.value)
        }
    };

    const handleDoctor = (event) => {
        setDoctor(event.target.value);
    };

    const handleSubmit = async () => {
        const values = {
            id: id,
            fromShiftofSchedule: fromShift,
            toShiftofSchedule: toShift,
            doctor: doctor
        }
        try {
            const response = await DoctorService.setSwappingShifts(values);
            if(response.data === "Successfull"){
                toast.success("Successfull!!!",{toastId: "1"})
                setHideDoctor(true);
                setHide(true);
            }
        }catch (error) {
            console.log(error)
            if(error.response.data.error === "swapping requiest is exists"){
                toast.error("swapping requiest is exists",{toastId: "1"})
            }
            toast.error("Something went wrong! \nTry again.",{toastId: "1"})
        }
    }

    const getDoctorData = (shift1,shift2) =>{
        const existingShiftDoctors = []
        const exchangeShiftDoctors = []
        console.log(shift1,shift2, "inside getDoctorData")

        for (let i = 0; i < fromShifts.length; i++) {
            if (fromShifts[i].id === shift1){
                for (let j = 0; j < fromShifts[i]["doctors"].length; j++) {
                    const doctor = fromShifts[i]["doctors"][j];
                    if(!existingShiftDoctors.includes(doctor)){
                        existingShiftDoctors.push(doctor)
                    }
                }
            }
        }

        for (let i = 0; i < toShifts.length; i++) {
            if (toShifts[i].id === shift2){
                for (let j = 0; j < toShifts[i]["doctors"].length; j++) {
                    console.log(toShifts[i]["doctors"])
                    const doctor = toShifts[i]["doctors"][j];
                    if(!exchangeShiftDoctors.includes(doctor) && !existingShiftDoctors.includes(doctor)){
                        console.log(doctor)
                        exchangeShiftDoctors.push(doctor);
                    }
                }
            }
        }

        if(exchangeShiftDoctors.length === 0){
                toast.error("No Doctor found!!!. \nSelect another  shift!!!",{toastId: "1"})
                setHideDoctor(true);
        }else{
            console.log(exchangeShiftDoctors);
            setDoctors(exchangeShiftDoctors);
            setHideDoctor(false);
            console.log(doctors);
        }
    }

    const getShiftData = async (date1,date2) => {
        // console.log(fromShift,"added")
        if(errors.length === 0 ){
            const values = {
                id: id,
                fromDate: date1,
                toDate: date2,
                // fromShift: fromShift,
            };
            console.log(values);
            try {
                const response = await DoctorService.getDoctorShifts(values);
                console.log(response.data,"pass1");
                setShifts(response.data)
                const shitsForExchange =[];
                for (let i = 0; i < response.data[0].length; i++) {
                    shitsForExchange.push(response.data[0][i])
                }
                console.log(shitsForExchange,"pass2");
                setFromShifts(shitsForExchange);

                const shitstoExchange =[];
                for (let i = 0; i < response.data[1].length; i++) {
                    shitstoExchange.push(response.data[1][i])
                }
                console.log(shitstoExchange,"pass3");
                setToShifts(shitstoExchange);
                setHideDoctor(true);
                setHide(false);
                setToShift("");
                setFromShift("");
                setDoctor("");
            }catch (error) {
                console.log(error.response.data.error === "no shift Of Schedule")
                toast.error("No swapping option found!!!",{toastId: "1"})
                setHide(true)
                setHideDoctor(true)
            }
        }
    };

    const renderFromShiftLabels = () => {
        console.log(fromShifts,"fromShifts")
        return fromShifts.map((shift, index) => {
            return(
                <MenuItem key = {index} value={shift.id}>
                    {shift["shift"].name + " ( " + shift["shift"].startTime + " - " + shift["shift"].endTime + " )"}
                </MenuItem>
            );
        });
    };

    const renderToShiftLabels = () => {
        console.log(toShifts,"toShifts")
        return toShifts.map((shift, index) => {
            return(
                <MenuItem key = {index} value={shift.id}>
                    {shift["shift"].name + " ( " + shift["shift"].startTime + " - " + shift["shift"].endTime + " )"}
                </MenuItem>
            );
        });
    };

    const renderDoctorLabels = () => {
        console.log(doctors,"doctors")
        return doctors.map((doctor, index) => {
            return(
                <MenuItem key = {index} value={doctor.id}>
                    {doctor.name}
                </MenuItem>
            );
        });
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div data-testid= "Reqexchan">
            <Typography variant='caption' ><h1 align="center" >Swapping Shift Form</h1></Typography>
            <Stack
                sx={{ m: 3 }}
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <DatePicker
                    inputProps={{'aria-label':'Exchange-From-Date'}}
                    disablePast
                    label="Select the from date."
                    openTo="day"
                    views={["year", "month", "day"]}
                    value={fromDate}
                    onChange={(newValue) =>
                        handleFromDate(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                />
                <DatePicker
                    inputProps={{'aria-label':'Exchange-To-Date'}}
                    disablePast
                    label="Select the to date."
                    openTo="day"
                    views={["year", "month", "day"]}
                    value={toDate}
                    onChange={(newValue) =>
                        handleToDate(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                />
            </Stack>
            <Stack
                sx={{ m: 3 }}
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 8 }}
            >
                <FormControl sx={{ minWidth: 200 }}>
                    <InputLabel id="Select_doctor_inputlable_from">
                        Choose from Shift. 
                    </InputLabel>
                    <Select
                        data-testid="ExchangeToShift"
                        labelId="Select_Doctor_label_1"
                        id="Select_Shift_From"
                        value={fromShift}
                        onChange={handleFromShift}
                        autoWidth
                        label="Select Exchange from Shift"
                        disabled={hide}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {renderFromShiftLabels()}
                    </Select>
                </FormControl>

                <FormControl sx={{ minWidth: 200 }}>
                    <InputLabel id="Select_doctor_inputlable_to">
                        Choose to Shift. 
                    </InputLabel>
                    <Select
                        data-testid="ExchangeFromShift"
                        labelId="Select_Doctor_label_2"
                        id="Select_Shift_To"
                        value={toShift}
                        onChange={handleToShift}
                        autoWidth
                        label="Select Exchange to Shift"
                        disabled={hide}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {renderToShiftLabels()}
                    </Select>
                </FormControl>
            </Stack>
            <Stack
                sx={{ m: 3 }}
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 8 }}
            >
                <FormControl sx={{ minWidth: 200 }}>
                    <InputLabel id="Select_doctor_inputlable">
                        Select Doctor
                    </InputLabel>
                    <Select
                        data-testid="ExchangeWithDoctor"
                        labelId = "Select_Doctor_1"
                        id = "Select_Doctor"
                        value = {doctor}
                        onChange = {handleDoctor}
                        autoWidth
                        label= "Select Doctor"
                        disabled ={hideDoctor}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {renderDoctorLabels()}
                    </Select>
                </FormControl>
                <Button
                    aria-label= "submit"
                    type="submit"
                    variant="contained"
                    onClick={handleSubmit}
                    color="primary"
                >
                    Add Swapping Request
                </Button>
            </Stack>
            </div>
        </LocalizationProvider>
    );
}
