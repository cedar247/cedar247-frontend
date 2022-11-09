import React, { useState } from 'react';
import { InputLabel, Select, MenuItem, FormControl} from '@material-ui/core';

export default function Vacation({shiftTypes, setShiftTypes, index}) {
    const [days, setDays] = useState("");
    
    const handleChange = (e) => {
        let CPshifTypes = [...shiftTypes];
        let shiftType = {...CPshifTypes[index]}
        shiftType.vacation = e.target.value;
        CPshifTypes[index] = shiftType;
        setShiftTypes(CPshifTypes)
    };

    return (
        <FormControl variant="filled">
            <InputLabel id="demo-simple-select-filled-label">Vacation</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={shiftTypes[index].vacation}
                    onChange={handleChange}
                >
                    <MenuItem value={0}>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1 day</MenuItem>
                    <MenuItem value={2}>2 days</MenuItem>
                    <MenuItem value={3}>3 days</MenuItem>
                </Select>

        </FormControl>
    )
}