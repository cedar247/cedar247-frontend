import React, { useState } from "react";
import Box from '@material-ui/core/Box';
import Typography  from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Shifts from './Shifts';
import FormGroup from '@material-ui/core/FormGroup';
import { FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';
import Vacation from "./Vacation";

export default function Constraints() {
    const [shiftTypes, setShiftTypes] = useState({
        morning: true,
        evening: true,
        night: true
    });
    const [ numOfConsecutiveGroups, setNumOfConsecutiveGroups ] = useState(0);


    const createShiftGroups = () => {
        let arr = []
        for (let i = 0; i < numOfConsecutiveGroups; i++) {
          arr.push(<Shifts/>)
        }
        return(<div>
            {arr.map(shifts=>shifts)}
            </div>)
    }

    const [casualtyDay, setCasualtyDay] = useState("");

    const handleCasualtyDay = (e) => {
        setCasualtyDay(e.target.value);
    }

    const handleShiftTypes = (event) => {
        setShiftTypes({ ...shiftTypes, [event.target.name]: event.target.checked });
    };

    return (
        <Box>
            <Typography 
                variant="h5"
                component="h2"
                align="center"
            >
                Constraints
            </Typography>

            <TextField 
                id="outlined-basic" 
                label="Maximum number of leaves per month:" 
                variant="outlined" 
                color='secondary' 
                type="number"
            />

            <TextField 
                id="outlined-basic" 
                label="How many consecutive groups of shifts:" 
                variant="outlined" 
                color='secondary' 
                type="number"
                onChange={(e)=>setNumOfConsecutiveGroups(e.target.value)}
            />

            {createShiftGroups()}

            <Typography>
                What are the shifts that doctors should get a golden day(A vacation given to doctors after completing a specific shift) after it?:
            </Typography>


            <FormGroup>

                <FormControlLabel
                    control={
                    <Checkbox
                        checked={shiftTypes.morning}
                        onChange={handleShiftTypes}
                        name="morning"
                        color="secondary"
                    />
                    }
                    label="Morning"
                />

                <Vacation />

                <FormControlLabel
                    control={
                    <Checkbox
                        checked={shiftTypes.evening}
                        onChange={handleShiftTypes}
                        name="evening"
                        color="secondary"
                    />
                    }
                    label="Evening"
                />

                <Vacation />

                <FormControlLabel
                    control={
                    <Checkbox
                        checked={shiftTypes.night}
                        onChange={handleShiftTypes}
                        name="night"
                        color="secondary"
                    />
                    }
                    label="Night"
                />

                <Vacation />

        </FormGroup>

        <FormControl variant="filled">
            <InputLabel id="demo-simple-select-filled-label">Casualty Day:</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={casualtyDay}
                    onChange={handleCasualtyDay}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Sunday"}>Sunday</MenuItem>
                    <MenuItem value={"Monday"}>Monday</MenuItem>
                    <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
                    <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
                    <MenuItem value={"Thursday"}>Thursday</MenuItem>
                    <MenuItem value={"Friday"}>Friday</MenuItem>
                    <MenuItem value={"Saturday"}>Saturday</MenuItem>
                </Select>

        </FormControl>

        <Typography>
            Shifts that all doctors must available:
        </Typography>
        <Shifts/>

        </Box>
    )
}