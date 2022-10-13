import React, {useState} from 'react';
import { InputLabel, Select, MenuItem, FormControl, Box, Grid} from '@material-ui/core';
import { Typography } from '@mui/material';

export default function MonthPicker({ values, handleChange }) {
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    
    const handleYear = (e) => {
        setYear(e.target.value);
        // handleChange("year")(e);
    };

    const handleMonth = (e) => {
        setMonth(e.target.value);
        // handleChange("month")(e);
    }
    
    return (
        <Box>
            <Typography
                variant='h6'
                component='p'
                gutterBottom
                color="primary"
            >
                Schedule Month:
            </Typography>

            <Grid container spacing={3}>

                <Grid item md={6} sm={12} xs={12}>
                    <FormControl variant="filled" fullWidth>
                        <InputLabel id="demo-simple-select-filled-label" color='secondary'>Year</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={values.year}
                                onChange={handleChange("year")}
                                color='secondary'
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={2022}>2022</MenuItem>
                                <MenuItem value={2023}>2023</MenuItem>
                                <MenuItem value={2024}>2024</MenuItem>
                            </Select>
                    </FormControl>

                </Grid>

                <br/>

                <Grid item md={6} sm={12} xs={12}>
                    <FormControl variant="filled" fullWidth>
                        <InputLabel id="demo-simple-select-filled-label" color='secondary'>Month</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={values.month}
                                onChange={handleChange("month")}
                                color='secondary'
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"Janunary"}>Janunary</MenuItem>
                                <MenuItem value={"February"}>February</MenuItem>
                                <MenuItem value={"March"}>March</MenuItem>
                                <MenuItem value={"April"}>April</MenuItem>
                                <MenuItem value={"May"}>May</MenuItem>
                                <MenuItem value={"June"}>June</MenuItem>
                                <MenuItem value={"July"}>July</MenuItem>
                                <MenuItem value={"August"}>August</MenuItem>
                                <MenuItem value={"September"}>September</MenuItem>
                                <MenuItem value={"October"}>October</MenuItem>
                                <MenuItem value={"November"}>November</MenuItem>
                                <MenuItem value={"December"}>December</MenuItem>
                            </Select>
                    </FormControl>
                </Grid>

            </Grid>
        </Box>
    )
};
