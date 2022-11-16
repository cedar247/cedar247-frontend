import React from "react";
import Box from "@mui/material/Box";
import { TextField } from "@material-ui/core";
import CssBaseline from "@mui/material/CssBaseline";
import { Button, Typography } from "@material-ui/core";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { toast } from "react-toastify";
import DoctorService from "../../services/API/DoctorService";
import ShiftItem from "./ShiftItem"
const theme = createTheme();


export default function Defnerequirements(props) {
    const [date, setDate] = React.useState('');
    const [shifts, setShifts] = React.useState([]);
    const [shiftTypes, setShiftTypes] = React.useState([]);
    const [errors,setErrors] = React.useState([]);
    const [id] = React.useState(props.id);
    // const id = "633ab0f123be88c950fb8a89"; //doctor user id

    const handleDate = (event) =>{
            setDate(event.target.value);
    }

    React.useEffect(() => {
        const handleGetShifts = async () => {
            try {
                const shiftsGot = props.shifts;
                setShifts(shiftsGot)
                const types = []
                for(let i = 0; i < shiftsGot.length; i++){
                    types.push({
                        id: shiftsGot[i]._id,
                        checked: false,
                    })
                }
                console.log(types)
                setShiftTypes(types)
            } catch (error) {
                console.log(error)
            }
        }
        handleGetShifts();},[id,props.shifts]);

    const handleSubmit = async (e) => {

        console.log("submitted");
        console.log(shiftTypes);

        e.preventDefault();
        if (date === ""){
            errors.push("Set a Date")
            console.log(errors);
        }

        let checkedCount = 0
        for(let i = 0; i < shiftTypes.length; i++){
            if (shiftTypes[i].checked === true){
                checkedCount = checkedCount + 1
            }
        }

        if(checkedCount === 0){
            errors.push("Set leaving Shift")
            console.log(errors);
        }

        if (errors.length === 0){
            try {
                const values ={
                    id:id,
                    date:date,
                    shiftTypes:shiftTypes,
                }
                const response = await DoctorService.defineRequirements(values);
                if(response.status === 200){
                    // e.preventDefault();
                    toast.success("Requirement is added",{toastId: "1"})
                }else{
                    toast.error("Please try again",{toastId: "1"})
                }

                setDate('')
                let CPshifTypes = [...shiftTypes];
                for(let i = 0; i < CPshifTypes.length; i++){
                    CPshifTypes[i].checked = false;
                }
                setShiftTypes(CPshifTypes);
                console.log(response);
            } catch (error) {
                if(error.response.data.error === "Maximum leaves for this month is reached"){
                    toast.error("Maximum leaves for this month is reached",{toastId: "1"})
                }
                console.log(error);
            }
        }else{
            for(let i = 0; i < errors.length; i++){
                toast.error(errors[i],{toastId: i.toString()})
            }
        }
        setErrors([])
    };

    // const paperStyle = { padding: '0px',}


    return (
        <ThemeProvider theme={theme}>
            <div data-testid= "definerequirement">
            <Container component="main" maxWidth="xs">
                <Typography variant='caption' ><h1 align="center" >Define Requirements</h1></Typography>
                <CssBaseline />
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                <form action="">
                    <TextField
                        data-testid="date"
                        id="date"
                        label="date"
                        type="date"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        margin='normal'
                        color='secondary'
                        onChange={handleDate}
                    />
                    <div style={{align: "center", width:'100%' }}>
                        <ShiftItem 
                            shifts={shifts} 
                            shiftTypes={shiftTypes}
                            setShiftTypes={setShiftTypes}
                        />
                        <Button
                            aria-label= "submit"
                            type="submit"
                            style={{ margineTop: "10px" }}
                            variant="contained"
                            onClick={handleSubmit}
                            color="primary"
                        >
                            Add
                        </Button>
                    </div>
                </form>
                </Box>
            </Container>
            </div>
        </ThemeProvider>
    );
}
