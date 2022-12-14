import React from 'react';
import { InputLabel, Select, MenuItem, FormControl, Box, Grid} from '@material-ui/core';
import { Typography } from '@mui/material';

export default function MonthPicker({ values, handleChange }) {
    
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
                                id="year"
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
                                id="month"
                                value={values.month}
                                onChange={handleChange("month")}
                                color='secondary'
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>Janunary</MenuItem>
                                <MenuItem value={2}>February</MenuItem>
                                <MenuItem value={3}>March</MenuItem>
                                <MenuItem value={4}>April</MenuItem>
                                <MenuItem value={5}>May</MenuItem>
                                <MenuItem value={6}>June</MenuItem>
                                <MenuItem value={7}>July</MenuItem>
                                <MenuItem value={8}>August</MenuItem>
                                <MenuItem value={9}>September</MenuItem>
                                <MenuItem value={10}>October</MenuItem>
                                <MenuItem value={11}>November</MenuItem>
                                <MenuItem value={12}>December</MenuItem>
                            </Select>
                    </FormControl>
                </Grid>

            </Grid>
        </Box>
    )
};
