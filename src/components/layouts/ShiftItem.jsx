import React from "react";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";


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