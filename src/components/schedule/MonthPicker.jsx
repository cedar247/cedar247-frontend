import React, {useState} from 'react';
import { InputLabel, Select, MenuItem, FormControl, Box} from '@material-ui/core';
import { Typography } from '@mui/material';

export default function MonthPicker() {
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    
    const handleYear = (e) => {
        setYear(e.target.value);
    };

    const handleMonth = (e) => {
        setMonth(e.target.value);
    }
    
    return (
        <Box>
            <Typography>
                Schedule Month:
            </Typography>
            <FormControl variant="filled" fullWidth>
                <InputLabel id="demo-simple-select-filled-label">Year</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={year}
                        onChange={handleYear}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={2022}>2022</MenuItem>
                        <MenuItem value={2023}>2023</MenuItem>
                        <MenuItem value={2024}>2024</MenuItem>
                    </Select>
            </FormControl>
            <br/>
            <FormControl variant="filled" fullWidth>
                <InputLabel id="demo-simple-select-filled-label">Month</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={month}
                        onChange={handleMonth}
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

        </Box>
    )
};
