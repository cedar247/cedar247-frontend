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
                        color="secondary"
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
                        color="secondary"
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
                        color="secondary"
                    />
                    }
                    label="Night"
                />


        </FormGroup>
    )
}