import React, { useState, useEffect } from "react";
import Box from '@material-ui/core/Box';
import Typography  from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Shifts from './Shifts';
import FormGroup from '@material-ui/core/FormGroup';
import { FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';
import Vacation from "./Vacation";
import { makeStyles } from "@material-ui/core/styles";
import ConsecutiveShifts from "./ConsecutiveShifts";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    field: {
        "&&": {
            
        }
    }
})

export default function Constraints({ 
    shifts,
    shiftTypes,
    setShiftTypes,
    consecutiveGroups,
    setConsecutiveGroups
}) {



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
                        fullWidth
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
                        fullWidth
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

        </Box>
    )
}