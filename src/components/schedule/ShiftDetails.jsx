import React from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';

export default function ShiftDetails(props) {

    return (
        <Grid item 
            md={4} sm={6} xs={12}
        >
            <Typography
                variant='h6' 
                component='p'   
            >
                {props.shiftName}:
            </Typography>

            <TextField 
                id="outlined-basic" 
                label="Senior Registrar" 
                variant="outlined" 
                color='secondary' 
                type="number"
                fullWidth
                margin='normal'
        
            />

            <TextField 
                id="outlined-basic" 
                label="Registrar" 
                variant="outlined" 
                color='secondary' 
                type="number"
                fullWidth
                margin='normal'
            />

            <TextField 
                id="outlined-basic" 
                label="Senior Home Office" 
                variant="outlined" 
                color='secondary' 
                type="number"
                fullWidth
                margin='normal'
            />
        </Grid>
    )
}