import React, {useState} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import Box from '@material-ui/core/Box';

export default function ConsecutiveShifts({ shifts, handleConsecutiveShifts, outerIndex,  consecutiveGroups}) {

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
                                        checked={consecutiveGroups[outerIndex][index].checked}
                                        onChange={(e) => handleConsecutiveShifts(e, index, outerIndex)}
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