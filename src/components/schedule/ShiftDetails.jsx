import React from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';

export default function ShiftDetails(props) {

    return (
        <Grid item md={4} s={6} xs={12}>
            <Typography>
                {props.shiftName}
            </Typography>

            <TextField 
                id="outlined-basic" 
                label="Senior Registrar" 
                variant="outlined" 
                color='primary' 
                type="number"
            />

            <TextField 
                id="outlined-basic" 
                label="Registrar" 
                variant="outlined" 
                color='primary' 
                type="number"
            />

            <TextField 
                id="outlined-basic" 
                label="Senior Home Office" 
                variant="outlined" 
                color='primary' 
                type="number"
            />
        </Grid>
    )
}