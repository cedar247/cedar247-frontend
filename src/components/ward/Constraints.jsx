import React from "react";
import Box from '@material-ui/core/Box';
import Typography  from "@material-ui/core/Typography";
import FormGroup from '@material-ui/core/FormGroup';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import Vacation from "./Vacation";


export default function Constraints({ 
    shifts,
    shiftTypes,
    setShiftTypes,
    consecutiveGroups,
    setConsecutiveGroups
}) {



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