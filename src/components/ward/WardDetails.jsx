import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import { Grid, TextField } from '@mui/material';
import Shift from './Shift';


export default function WardDetails(
    { 
        wardDetails, 
        handleChange, 
        handleShiftChange, 
        handleDoctorCategories, 
        doctorCategories,
        allShifts,
        addShift,
        shifts,
        numOfShifts, 
        setNumOfShifts
    }
) {

      const createShifts = () => {
        let arr = []
        for (let i = 0; i < numOfShifts; i++) {
          arr.push(<Grid key={i} item md={4} sm={6} xs={12}><Shift shifts={shifts} addShift={addShift} allShifts={allShifts} key={i} index={i} wardDetails={wardDetails} handleShiftChange={handleShiftChange}/></Grid>)
        }
        return(<Grid container spacing={3} mt={2} mb={2}>
            {arr.map(shift=>shift)}
            </Grid>)
      }

    //   console.log("slfk", allShifts)
    return (
        <Box>
            <Grid container >
                <Grid item md={12} sm={12} xs={12} >
                    <TextField 
                        id="outlined-basic" 
                        label="Name of the Ward" 
                        variant="filled" 
                        color='secondary'
                        fullWidth
                        margin='normal'
                        onChange={ handleChange("name") }
                        value={wardDetails.name}
                    />
                </Grid>

                <Grid item md={12} sm={12} xs={12}>
                    <TextField 
                        id="outlined-basic" 
                        label="Number of the Ward" 
                        variant="filled" 
                        color='secondary' 
                        type="number"
                        fullWidth
                        margin='normal'
                        onChange={ handleChange("number") }
                        InputProps={{ inputProps: { min: 0 } }}
                        value={wardDetails.number}
                    />
                </Grid>
            </Grid>

            <TextField 
                id="outlined-basic" 
                label="Number of shifts" 
                variant="filled" 
                color='secondary' 
                type="number"
                onChange={(e)=>setNumOfShifts(e.target.value)}
                fullWidth
                margin='normal'
                value={numOfShifts}
            />

          
            
            {/* numOfShifts.map((i) => <Shift key={i}/>) */}
            {createShifts()}

            <Typography
                variant='h6'
                component='p'
                color='primary'
                style={{ "marginTop": "20px"}}
            >
                Doctor catergories: *need to select at least one type
            </Typography>

            <Box style={{ "paddingLeft": "100px" }}>

                <FormGroup>

                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={doctorCategories["Senior Registrar"]}
                            onChange={handleDoctorCategories}
                            name="Senior Registrar"
                            color="secondary"
                        />
                        }
                        label="Senior Registrar"
                    />

                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={doctorCategories["Registrar"]}
                            onChange={handleDoctorCategories}
                            name="Registrar"
                            color="secondary"
                        />
                        }
                        label="Registrar"
                    />

                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={doctorCategories["Senior Home Officer"]}
                            onChange={handleDoctorCategories}
                            name="Senior Home Officer"
                            color="secondary"
                        />
                        }
                        label="Senior Home Officer"
                    />

                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={doctorCategories["Home Officer"]}
                            onChange={handleDoctorCategories}
                            name="Home Officer"
                            color="secondary"
                        />
                        }
                        label="Home Officer"
                    />

                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={doctorCategories["Medical Officer"]}
                            onChange={handleDoctorCategories}
                            name="Medical Officer"
                            color="secondary"
                        />
                        }
                        label="Medical Officer"
                    />

                </FormGroup>
            </Box>
            
        </Box>
    )
}