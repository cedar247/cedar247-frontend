import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { TextField, Grid } from '@mui/material';
import Shift from './Shift';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default function WardDetails() {
    const [ numOfShifts, setNumOfShifts ] = useState(0);
    const [ doctorCategories, setDoctorCategories ] = useState({
        checkedSeniorRegistrar: true,
        checkedRegistrar: true,
        checkedSeniorHO: true,
        checkedHO: true,
        checkedMO: true
    });

    const handleCategories = (event) => {
        setDoctorCategories({ ...doctorCategories, [event.target.name]: event.target.checked });
      };

      const createShifts = () => {
        let arr = []
        for (let i = 0; i < numOfShifts; i++) {
          arr.push(<Shift/>)
        }
        return(<div>
            {arr.map(shift=>shift)}
            </div>)
      }

    return (
        <Box>
            <Grid container >
                <Grid item md={6} sm={12} xs={12}>
                    <TextField 
                        id="outlined-basic" 
                        label="Name of the Ward" 
                        variant="outlined" 
                        color='secondary'
                        fullWidth
                        margin='normal'
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

            <Box>

                <FormGroup>

                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={doctorCategories.checkedSeniorRegistrar}
                            onChange={handleCategories}
                            name="checkedSeniorRegistrar"
                            color="secondary"
                        />
                        }
                        label="Senior Registrar"
                    />

                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={doctorCategories.checkedRegistrar}
                            onChange={handleCategories}
                            name="checkedRegistrar"
                            color="secondary"
                        />
                        }
                        label="Registrar"
                    />

                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={doctorCategories.checkedSeniorHO}
                            onChange={handleCategories}
                            name="checkedSeniorHO"
                            color="secondary"
                        />
                        }
                        label="Senior Home Officer"
                    />

                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={doctorCategories.checkedHO}
                            onChange={handleCategories}
                            name="checkedHO"
                            color="secondary"
                        />
                        }
                        label="Home Officer"
                    />

                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={doctorCategories.checkedMO}
                            onChange={handleCategories}
                            name="checkedMO"
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