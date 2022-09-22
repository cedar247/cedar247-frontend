import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { TextField } from '@mui/material';
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

    return (
        <Box>
            <TextField 
                id="outlined-basic" 
                label="Name of the Ward" 
                variant="outlined" 
                color='primary'
                fullWidth
            />

            <TextField 
                id="outlined-basic" 
                label="Number of the Ward" 
                variant="outlined" 
                color='primary' 
                type="number"
            />

            <TextField 
                id="outlined-basic" 
                label="Number of the shifts" 
                variant="outlined" 
                color='primary' 
                type="number"
                onChange={(e) => setNumOfShifts(e.target.value)}
            />

            {Array.from(Array(numOfShifts), (e, i) => {
                return <Shift key={i} />
            })}

            <Typography>
                Doctor catergories: *need to select at least one type
            </Typography>

            <FormGroup>

                <FormControlLabel
                    control={
                    <Checkbox
                        checked={doctorCategories.checkedSeniorRegistrar}
                        onChange={handleCategories}
                        name="checkedSeniorRegistrar"
                        color="primary"
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
                        color="primary"
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
                        color="primary"
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
                        color="primary"
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
                        color="primary"
                    />
                    }
                    label="Medical Officer"
                />

            </FormGroup>
            
        </Box>
    )
}