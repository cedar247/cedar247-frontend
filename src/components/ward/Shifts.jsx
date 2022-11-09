import React, {useState} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import Box from '@material-ui/core/Box';

export default function Shifts({ shifts, shiftTypes, setShiftTypes }) {
    const handleShiftTypes = (event, index) => {
        let CPshifTypes = [...shiftTypes];
        let shiftType = {...CPshifTypes[index]}
        shiftType.checked = event.target.checked;
        CPshifTypes[index] = shiftType;
        setShiftTypes(CPshifTypes)
    }

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
    )
}