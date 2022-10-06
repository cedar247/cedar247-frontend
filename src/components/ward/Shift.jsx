import React, {useState} from 'react';
import { Box } from '@material-ui/core';
import { TextField } from '@mui/material';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

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

export default function Shift(props) {
    const classes = useStyles();
    const [shiftDetails, setShiftDetails] = useState({
        name: "",
        startTime: "",
        endTime: ""
    })

    return (
        <Box>
            <TextField 
                id="outlined-basic" 
                label="Shift" 
                variant="outlined" 
                color='secondary'
                fullWidth
                InputProps={{
                    className: classes.fieldTop
                }}
                onChange={(e) => props.handleShiftChange(e, props.index, "name")}
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
                onChange={(e) => props.handleShiftChange(e, props.index, "startTime")}
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
                onChange={(e) => props.handleShiftChange(e, props.index, "endTime")}
                />
        </Box>
    )
}