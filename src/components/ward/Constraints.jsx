import React, { useState, useEffect } from "react";
import Box from '@material-ui/core/Box';
import Typography  from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Shifts from './Shifts';
import FormGroup from '@material-ui/core/FormGroup';
import { FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';
import Vacation from "./Vacation";

export default function Constraints({ shifts }) {
    // const [shifts, setShifts] = useState([
    //     {
    //         _id: '1',
    //         name: 'morning',
    //         startTime: '08:00',
    //         endTime: '13:00'
    //     },
    //     {
    //         _id: '2',
    //         name: 'evening',
    //         startTime: '13:00',
    //         endTime: '19:00'
    //     },
    //     {
    //         _id: '3',
    //         name: 'night',
    //         startTime: '19:00',
    //         endTime: '08:00'
    //     }
    // ]); // need to get from database
    const [shiftTypes, setShiftTypes] = useState({});
    const [ numOfConsecutiveGroups, setNumOfConsecutiveGroups ] = useState(0);

    useEffect(() => {
        getShifts();
    }, []);

    const getShifts = async () => {
        
    }
    const createShiftGroups = () => {
        let arr = []
        for (let i = 0; i < numOfConsecutiveGroups; i++) {
          arr.push(<Shifts shifts={shifts}/>)
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
                {
                    shifts.map(
                        shift => (
                            <Box key={shift._id}>
                                <FormControlLabel
                                    key={shift._id}
                                    control={
                                    <Checkbox
                                        checked={shiftTypes.morning}
                                        onChange={handleShiftTypes}
                                        name={shift.name}
                                        color="secondary"
                                        key={shift._id}
                                    />
                                    }
                                    label={shift.name + " ( " + shift.startTime + " - " + shift.endTime + " )"}
                                />

                                <Vacation/>
                            </Box>
                        )
                    )
                    
                }   

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