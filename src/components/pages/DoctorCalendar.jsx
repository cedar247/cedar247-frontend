import * as React from "react";
import Paper from "@mui/material/Paper";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import {
    Scheduler,
    Toolbar,
    MonthView,
    Appointments,
    AppointmentTooltip,
    EditRecurrenceMenu,
    AllDayPanel,
    DateNavigator,
    Resources,
} from "@devexpress/dx-react-scheduler-material-ui";
import DoctorService from "../../services/API/DoctorService";
import { appointments, resourcesData } from "../pages/dummy_data.js";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


/* eslint-disable-next-line react/no-multi-comp */
    const Calendar=(props)=>{

        const [showAllDoctors, setShowAllDoctors] = React.useState(false);
        const [calendar, setCalendar] = React.useState(appointments);
        const [doctors, setDoctors] = React.useState(resourcesData);

        const id = "6334249bebcfbf785191df1d";

        const [windowHeight]= React.useState(props.windowHeight);

        // React.useEffect(async() => {
        //     async function loadData(){
        //         try {
        //             console.log(appointments);
        //             const response = await DoctorService.changeclendar({id:id, showAllDoctors:showAllDoctors});
        //             console.log(response);
        //             setCalendar(formatData(response.data[0]));
        //             setDoctors(response.data[1]);
        //             console.log(resourcesData);
        //             console.log(response.data[1]);
        //             console.log(formatData(response.data[0]))
        //         } catch (error) {
        //             console.log(error);
        //         }
        //     }

        // loadData();},[id,showAllDoctors]);

        const formatData = (data) =>{
            const formatedData = [];
            for(let i = 0; i < data.length; i++) {
            const date = data[i]["date"].split("-");
            const startTime = data[i]["startTime"].split(":");
            const endTime = data[i]["endTime"].split(":");
            const item = {
                    title : data[i]["title"],
                    startDate: new Date(Number(date[0]), Number(date[1])-1, Number(date[2]), Number(startTime[0]), Number(startTime[1])),
                    endDate:new Date(Number(date[0]), Number(date[1])-1, Number(date[2]), Number(endTime[0]), Number(endTime[1])) ,
                    id: data[i]["id"],
                    doctors: data[i]["doctors"]
                }
            formatedData.push(item);
            }
            return(formatedData);
        }

        const handleShowHide = async (event) =>{
            // event.preventDefault();
            setShowAllDoctors(!showAllDoctors);
            console.log(!showAllDoctors);
            console.log("changed");
    
            try {
                const response = await DoctorService.changeclendar({id:id, showAllDoctors:!showAllDoctors});
                console.log(response);
                    setCalendar(formatData(response.data[0]));
                    setDoctors(response.data[1]);
                console.log(resourcesData);
                console.log(response.data[1]);
                console.log(formatData(response.data[0]));
            } catch (error) {
                console.log(error);
            }
        };

        console.log(windowHeight);
        // console.log(calendar);

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
                    {/* <Resources
                        data ={doctors}
                    /> */}
                    <DateNavigator />
                    <AppointmentTooltip
                        showCloseButton
                    />
                </Scheduler>
            </Paper>
        );
    }
    export default Calendar;