import React from 'react';
import { Box } from '@material-ui/core';
import { TextField } from '@mui/material';
import Typography from '@material-ui/core/Typography';

export default function Shift() {

    return (
        <Box>
            <TextField id="outlined-basic" label="Shift" variant="outlined" color='primary'/>
            <Typography>
                Duration:
            </Typography>

            <TextField 
                id="outlined-basic" 
                label="Start" 
                variant="outlined" 
                color='primary' 
                type="time"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField 
                id="outlined-basic" 
                label="End" 
                variant="outlined" 
                color='primary' 
                type="time"
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </Box>
    )
}