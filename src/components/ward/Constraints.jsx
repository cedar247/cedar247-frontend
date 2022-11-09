import React, { useState, useEffect } from "react";
import Box from '@material-ui/core/Box';
import Typography  from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Shifts from './Shifts';
import FormGroup from '@material-ui/core/FormGroup';
import { FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';
import Vacation from "./Vacation";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ConsecutiveShifts from "./ConsecutiveShifts";

const useStyles = makeStyles({
    field: {
        "&&": {
            
        }
    }
})

export default function Constraints({ 
    shifts, 
    setMaxLeaves, 
    setNumConsecutiveGroupShifts,
    numConsecutiveGroupShifts,
    casualtyDay,
    setCasualtyDay,
    shiftTypes,
    setShiftTypes,
    maxLeaves,
    casualtyDayShifts,
    setCasualtyDayShifts,
    consecutiveGroups,
    setConsecutiveGroups
}) {

    const createShiftGroups = () => {
        let arr = []
        for (let i = 0; i < numConsecutiveGroupShifts; i++) {
          arr.push(
          <Grid key={i} item md={4} sm={6} xs={12} p={2}>
                <ConsecutiveShifts 
                    shifts={shifts} 
                    handleConsecutiveShifts={handleConsecutiveShifts} 
                    outerIndex={i} 
                    consecutiveGroups={consecutiveGroups}
                />
            </Grid>)
        }
        return(<Grid container spacing={3} mt={2} mb={2}>
            {arr.map(shifts=>shifts)}
            </Grid>)
    }

    const handleCasualtyDay = (e) => {
        setCasualtyDay(e.target.value);
    }

    const handleConsecutiveShifts = (event, innerIndex, outerIndex) => {
        let cpConsecutiveGroups = [...consecutiveGroups]
        let group = [...cpConsecutiveGroups[outerIndex]]
        let shift = {...group[innerIndex]}
        shift.checked = event.target.checked
        group[innerIndex] = shift
        cpConsecutiveGroups[outerIndex] = group
        setConsecutiveGroups(cpConsecutiveGroups)
    }

    const handleShiftTypes = (event, index) => {
        // setShiftTypes({ ...shiftTypes, [event.target.name]: event.target.checked });
        let CPshifTypes = [...shiftTypes];
        let shiftType = {...CPshifTypes[index]}
        shiftType.checked = event.target.checked;
        CPshifTypes[index] = shiftType;
        setShiftTypes(CPshifTypes)
    };

    return (
        <Box>

            <Grid container spacing={3} mt={2} mb={2}>
                <Grid item md={6} sm={12} xs={12}>
                    <TextField 
                        id="outlined-basic" 
                        label="Maximum number of leaves per month:" 
                        variant="outlined" 
                        color='secondary' 
                        type="number"
                        onChange={(e) => setMaxLeaves(e.target.value)}
                        fullWidth={true}
                        value={maxLeaves}
                    />
                </Grid>

                <Grid item md={6} sm={12} xs={12}>
                    <TextField 
                        id="outlined-basic" 
                        label="How many consecutive groups of shifts:" 
                        variant="outlined" 
                        color='secondary' 
                        type="number"
                        onChange={(e)=> setNumConsecutiveGroupShifts(e.target.value)}
                        fullWidth={true}
                        InputProps={{ inputProps: { min: 0, max: 5 } }}
                    />
                </Grid>
            </Grid>

            {/* {createShiftGroups()} */}

            <Box mt={4}>
                <Typography>
                    What are the shifts that doctors should get a golden day(A vacation given to doctors after completing a specific shift) after it?:
                </Typography>
            </Box>


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

                                <Vacation shiftTypes={shiftTypes} setShiftTypes={setShiftTypes} index={index}/>
                            </Box>
                        )
                    )
                    
                } 

        </FormGroup>

        {/* <FormControl variant="filled">
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

        </FormControl> */}

        {/* <Typography>
            Shifts that all doctors must available:
        </Typography> */}
        {/* casualty day shifts */}
        {/* <Shifts shifts={shifts} shiftTypes={casualtyDayShifts} setShiftTypes={setCasualtyDayShifts} /> */}

        </Box>
    )
}