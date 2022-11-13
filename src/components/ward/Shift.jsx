import React from 'react';
import { Box } from '@material-ui/core';
import { TextField } from '@mui/material';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles({

    field: {
        "&&": {
            marginRight: "10px",
        }
    },
    fieldTop: {
        "&&": {
            marginBottom: "10px"
        }
    }
})


export default function Shift({ shifts, addShift, allShifts, handleShiftChange, index}) {
    const classes = useStyles();

    return (
        <Box>
            <FormControl>
                <Typography htmlFor="select-multiple-native">
                    Select a shift
                </Typography>

                <select 
                    data-testid="select"
                    className="form-select"  
                    size="3" 
                    aria-label="size 3 select example"
                    onChange={(e) => handleShiftChange(e, index, "shiftId")}
                    id="shift-select"
                >

                    {allShifts.map((shift) => (
                            <option key={shift.name} value={shift._id}>
                            {shift.name}
                            </option>
                    ))}
                        <option value={"other"}>
                            other
                        </option>
                </select>
            </FormControl>

            { addShift[index] === true ?
                <Box sx={{ mt: 3}}>
                    <TextField 
                        id="outlined-basic" 
                        label="Shift" 
                        variant="outlined" 
                        color='secondary'
                        fullWidth
                        InputProps={{
                            className: classes.fieldTop
                        }}
                        onChange={(e) => handleShiftChange(e, index, "name")}
                    />

                    <TextField 
                        id="outlined-basic" 
                        label="Start" 
                        variant="outlined" 
                        color='secondary' 
                        type="time"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            className: classes.field
                        }}
                        onChange={(e) => handleShiftChange(e, index, "startTime")}
                    />

                    <TextField 
                        id="outlined-basic" 
                        label="End" 
                        variant="outlined" 
                        color='secondary' 
                        type="time"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => handleShiftChange(e, index, "endTime")}
                    />
                </Box>
                :
                <Box>
                    {shifts[index] && 
                        <Box>
                            <Typography>{shifts[index]["name"]}</Typography>
                            <Typography>Start time: {shifts[index]["startTime"]}</Typography>
                            <Typography>End time: {shifts[index]["endTime"]}</Typography>
                        </Box>
                    }
                </Box>
                
            }
        </Box>
    )
}