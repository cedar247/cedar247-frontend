import React, {useState} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import { FormControlLabel, Checkbox } from '@material-ui/core';

export default function Shifts() {
    const [shiftTypes, setShiftTypes] = useState({
        morning: true,
        evening: true,
        night: true
    });

    const handleShiftTypes = (event) => {
        setShiftTypes({ ...shiftTypes, [event.target.name]: event.target.checked });
      };

    return (
        <FormGroup>

                <FormControlLabel
                    control={
                    <Checkbox
                        checked={shiftTypes.morning}
                        onChange={handleShiftTypes}
                        name="morning"
                        color="primary"
                    />
                    }
                    label="Morning"
                />

                <FormControlLabel
                    control={
                    <Checkbox
                        checked={shiftTypes.evening}
                        onChange={handleShiftTypes}
                        name="evening"
                        color="primary"
                    />
                    }
                    label="Evening"
                />

                <FormControlLabel
                    control={
                    <Checkbox
                        checked={shiftTypes.night}
                        onChange={handleShiftTypes}
                        name="night"
                        color="primary"
                    />
                    }
                    label="Night"
                />


        </FormGroup>
    )
}