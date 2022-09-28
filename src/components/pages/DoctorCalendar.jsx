import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import {
    Scheduler,
    Toolbar,
    MonthView,
    WeekView,
    ViewSwitcher,
    Appointments,
    AppointmentTooltip,
    AppointmentForm,
    DragDropProvider,
    EditRecurrenceMenu,
    AllDayPanel,
    DateNavigator,
} from "@devexpress/dx-react-scheduler-material-ui";
import { connectProps } from "@devexpress/dx-react-core";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import LocationOn from "@mui/icons-material/LocationOn";
import Notes from "@mui/icons-material/Notes";
import Close from "@mui/icons-material/Close";
import CalendarToday from "@mui/icons-material/CalendarToday";
import Create from "@mui/icons-material/Create";
import PersonIcon from '@mui/icons-material/Person';
import DoctorService from "../../services/API/DoctorService";
import { appointments } from "../pages/dummy_data.js";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


/* eslint-disable-next-line react/no-multi-comp */
    const Calendar=(props)=>{

        const [showAllDoctors, setShowAllDoctors] = React.useState(false);
        const [calendar, setCalendar] = React.useState(appointments);
        const id = props.id;

        const [windowHeight,windowHeightData]= React.useState(null);

        React.useEffect(async() => {
            try {
                const response = await DoctorService.changeclendar({id:id, showAllDoctors:showAllDoctors});
                // console.log(response);
                    setCalendar(appointments);
                // console.log(calendar);
            } catch (error) {
                console.log(error);
            }
        },[]);

        const handleShowHide = async (event) =>{
            // event.preventDefault();
            setShowAllDoctors(!showAllDoctors);
            console.log(!showAllDoctors);
            console.log("changed");
    
            try {
                const response = await DoctorService.changeclendar({id:id, showAllDoctors:!showAllDoctors});
                // console.log(response);
                    setCalendar(response.data);
                // console.log(calendar);
            } catch (error) {
                console.log(error);
            }
        };

        console.log(windowHeight);
        console.log(calendar);

        return (
            <Paper  >
                <FormGroup >
                        <FormControlLabel control={<Checkbox onChange ={handleShowHide}  />} style={{ marginLeft: '10px', paddingTop: '10px' }} label="Display All doctors Schedule" />
                    </FormGroup>
                <Scheduler data={calendar} height = {windowHeight} >
                    <ViewState />
                    <EditingState/>
                    <MonthView height = {windowHeight} />
                    <AllDayPanel />
                    <EditRecurrenceMenu />
                    <Appointments />
                    <Toolbar />
                    <DateNavigator />
                    <AppointmentTooltip
                        showCloseButton
                    />
                </Scheduler>
            </Paper>
        );
    }
    export default Calendar;