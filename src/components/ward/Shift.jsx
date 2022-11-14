import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@mui/material';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import { brown } from '@material-ui/core/colors'


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
                <Typography htmlFor="select-multiple-native" color='primary'>
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
                        variant="filled" 
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
                        variant="filled" 
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
                        variant="filled" 
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
                            <Typography color={brown[500]}>{shifts[index]["name"]}</Typography>
                            <Typography color=''>Start time: {shifts[index]["startTime"]}</Typography>
                            <Typography>End time: {shifts[index]["endTime"]}</Typography>
                        </Box>
                    }
                </Box>
                
            }
        </Box>
    )
}