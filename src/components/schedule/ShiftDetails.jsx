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

            {
                props.doctorCategories.map(
                    (doctorCategory, index, arr)  =>  
                        (
                        <TextField 
                            id="outlined-basic" 
                            label={doctorCategory} 
                            variant="outlined" 
                            color='secondary' 
                            type="number"
                            fullWidth
                            margin='normal'
                            key={index}
                        />
                        )
                )
            }
            
        </Grid>
    )
}