import React from "react";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import { Grid, Typography, TextField } from "@material-ui/core";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function Requirements() {
    const [date, setDate] = React.useState(null);
    
    const card = (
        <React.Fragment>
            <CardContent>
                <Grid item  style={{bgcolor: 'background.paper',borderColor: 'text.primary',}} >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Select Date"
                            value={date}
                            onChange ={(newValue)=> setDate(newValue)}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <FormGroup >
                        <FormControlLabel control={<Checkbox   />} style={{ paddingTop: '10px' }} label="Morning shift (8 am -1 pm)" />
                    </FormGroup>
                    <FormGroup >
                        <FormControlLabel control={<Checkbox   />} style={{ paddingTop: '10px' }} label="Evening shift (1 pm - 7 pm)" />
                    </FormGroup>
                    <FormGroup >
                        <FormControlLabel control={<Checkbox   />} style={{ paddingTop: '10px' }} label="Night shift (7 pm - 8 am)" />
                    </FormGroup>
                </Grid>
            </CardContent>
        </React.Fragment>
    );

    return (
        
        <Box sx={{ minWidth: 280, minHeight: 200 }}>
        <div style={{
            boxShadow: '0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)',
            borderRadius: '10px'
        }}><Card variant="outlined" > {card}</Card></div>

        </Box>
    );
}
