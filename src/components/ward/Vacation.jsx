import React, { useState } from 'react';
import { InputLabel, Select, MenuItem, FormControl} from '@material-ui/core';

export default function Vacation() {
    const [days, setDays] = useState("");
    
    const handleChange = (e) => {
        setDays(e.target.value);
    };

    return (
        <FormControl variant="filled">
            <InputLabel id="demo-simple-select-filled-label">Vacation</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={days}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1 day</MenuItem>
                    <MenuItem value={2}>2 days</MenuItem>
                    <MenuItem value={3}>3 days</MenuItem>
                </Select>

        </FormControl>
    )
}