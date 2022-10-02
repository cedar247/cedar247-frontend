import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { TextField, Grid } from '@mui/material';
import Shift from './Shift';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default function WardDetails({ wardDetails, handleChange, handleShiftChange, handleDoctorCategories, doctorCategories}) {
    const [ numOfShifts, setNumOfShifts ] = useState(0);
    // const [ doctorCategories, setDoctorCategories ] = useState({
    //     checkedSeniorRegistrar: true,
    //     checkedRegistrar: true,
    //     checkedSeniorHO: true,
    //     checkedHO: true,
    //     checkedMO: true
    // });

    // const handleCategories = (event) => {
    //     setDoctorCategories({ ...doctorCategories, [event.target.name]: event.target.checked });
    //     handleDoctorCategories(doctorCategories);
    //   };

      const createShifts = () => {
        let arr = []
        for (let i = 0; i < numOfShifts; i++) {
          arr.push(<Grid key={i} item md={4} sm={6} xs={12}><Shift key={i} index={i} wardDetails={wardDetails} handleShiftChange={handleShiftChange}/></Grid>)
        }
        return(<Grid container spacing={3} mt={2} mb={2}>
            {arr.map(shift=>shift)}
            </Grid>)
      }

    return (
        <Box>
            <Grid container >
                <Grid item md={6} sm={12} xs={12} pr={2}>
                    <TextField 
                        id="outlined-basic" 
                        label="Name of the Ward" 
                        variant="outlined" 
                        color='secondary'
                        fullWidth
                        margin='normal'
                        onChange={ handleChange("name") }
                    />
                </Grid>

                <Grid item md={6} sm={12} xs={12}>
                    <TextField 
                        id="outlined-basic" 
                        label="Number of the Ward" 
                        variant="outlined" 
                        color='secondary' 
                        type="number"
                        fullWidth
                        margin='normal'
                        onChange={ handleChange("number") }
                    />
                </Grid>
            </Grid>

            <TextField 
                id="outlined-basic" 
                label="Number of the shifts" 
                variant="outlined" 
                color='secondary' 
                type="number"
                onChange={(e)=>setNumOfShifts(e.target.value)}
                fullWidth
                margin='dense'
                
            />

          
            
            {/* numOfShifts.map((i) => <Shift key={i}/>) */}
            {createShifts()}

            <Typography
                variant='h6'
                component='p'
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