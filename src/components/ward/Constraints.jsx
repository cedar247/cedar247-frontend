import React from "react";
import Box from '@material-ui/core/Box';
import Typography  from "@material-ui/core/Typography";
import FormGroup from '@material-ui/core/FormGroup';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import Vacation from "./Vacation";
import { makeStyles  } from "@material-ui/core/styles";
import { Grid } from "@mui/material";

const useStyles = makeStyles({
    formGroup: {
        alignItems: 'center'
      }
})

export default function Constraints({ 
    shifts,
    shiftTypes,
    setShiftTypes,
    consecutiveGroups,
    setConsecutiveGroups
}) {

    const classes = useStyles();

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

            <Box mt={4} mb={3}>
                <Typography color="primary">
                    What are the shifts that doctors should get a golden day(A vacation given to doctors after completing a specific shift) after it?:
                </Typography>
            </Box>


            <FormGroup>
                {
                    shifts.map(
                        (shift, index, arr) => (
                            <Box key={shift._id}>
                                <Grid container>
                                    <Grid item sm={6} >
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
                                    </Grid>

                                    <Grid item sm={6}>
                                        <Vacation shiftTypes={shiftTypes} setShiftTypes={setShiftTypes} index={index}/>
                                    </Grid>
                                </Grid>
                            </Box>
                        )
                    )
                    
                } 

        </FormGroup>

        </Box>
    )
}