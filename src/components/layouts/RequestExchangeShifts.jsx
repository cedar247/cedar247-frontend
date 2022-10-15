import * as React from "react";
import dayjs from "dayjs";
import { Grid, Paper, Button, Typography } from "@material-ui/core";
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

export default function RequestExchangeShifts() {
    const [fromDate, setFromDate] = React.useState("");
    const [toDate, setToDate] = React.useState("");
    const [hide, setHide] = React.useState(true);
    const [fromShift, setFromShift] = React.useState("");
    const [toShift, setToShift] = React.useState("");
    const [errors, setErrors] = React.useState([]);
    const [fromShifts, setFromShifts] = React.useState([]);
    const [toShifts, setToShifts] = React.useState([]);
    const id = "633ab0f123be88c950fb8a89";

    React.useEffect(() => {
        console.log("load page")
        console.log(fromShifts)
    });

    const handleFromDate = (value) => {
        // console.log(value)
        setFromDate(value);
        if(toDate != ""){
            getShiftData()
        }
    };

    const handleToDate = (value) => {
        setToDate(value);
        if(fromDate != ""){
            getShiftData()
        }
    };

    const handleFromShift = (event) => {
        setFromShift(event.target.value);
    };

    const handleToShift = (event) => {
        setToShift(event.target.value);
    };

    const renderFromShiftLabels = () => {
        console.log(fromShifts)
        return fromShifts.map((shift, index) => {
            return(
                <MenuItem key = {index} value={shift._id}>
                    {shift.name + " ( " + shift.startTime + " - " + shift.endTime + " )"}
                </MenuItem>
            );
        });
    };

    const renderToShiftLabels = () => {
        console.log(toShifts)
        return toShifts.map((shift, index) => {
            return(
                <MenuItem key = {index} value={shift._id}>
                    {shift.name + " ( " + shift.startTime + " - " + shift.endTime + " )"}
                </MenuItem>
            );
        });
    };

    const getShiftData = async () => {
        // console.log(fromShift,"added")
        if(errors.length == 0 ){
            const values = {
                id: id,
                fromDate: fromDate,
                toDate: toDate,
                // fromShift: fromShift,
            };
            console.log(values);
            try {
                const response = await DoctorService.getDoctorShifts(values);
                console.log(response.data,"pass1");

                const shitsForExchange =[];
                for (let i = 0; i < response.data[0].length; i++) {
                    shitsForExchange.push(response.data[0][i]["shift"])
                }
                console.log(shitsForExchange,"pass2");
                setFromShifts(shitsForExchange);

                const shitstoExchange =[];
                for (let i = 0; i < response.data[1].length; i++) {
                    shitstoExchange.push(response.data[1][i]["shift"])
                }
                console.log(shitstoExchange,"pass3");
                setToShifts(shitstoExchange);
                setHide(false)
            }catch (error) {
                console.log(error.response.data.error == "no shift Of Schedule")
                toast.error("No swap found!!!",{toastId: "1"})
                setHide(true)
            }
        }
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack
                sx={{ m: 3 }}
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <DatePicker
                    // disablePast
                    label="Select Exchange From Date"
                    openTo="year"
                    views={["year", "month", "day"]}
                    value={fromDate}
                    onChange={(newValue) =>
                        handleFromDate(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                />
                <DatePicker
                    // disablePast
                    label="Select Exchange to Date"
                    openTo="year"
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
                        Select Exchange from Shift
                    </InputLabel>
                    <Select
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
                        Select Exchange to Shift
                    </InputLabel>
                    <Select
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
            {/* <Button
                    type="submit"
                    variant="contained"
                    onClick={handleAdd}
                    color="primary"
                >
                    Confirm Dates
                </Button> */}
        </LocalizationProvider>
    );
}
