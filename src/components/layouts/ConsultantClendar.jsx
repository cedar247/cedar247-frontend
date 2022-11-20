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
import consulantService from '../../services/API/ConsultantService';
import jwtDecode from "jwt-decode";


/* eslint-disable-next-line react/no-multi-comp */
    const Calendar=(props)=>{

        const [calendar, setCalendar] = React.useState([]);
        const [doctors, setDoctors] = React.useState([]);

        // const id = "633ab0f123be88c950fb8a89";

        const [windowHeight]= React.useState(props.windowHeight);

        React.useEffect(() => {
            async function loadData(){
                try {
                    // console.log(appointments);
                    const token = localStorage.getItem('token') // get token from local storage
                    const user  = jwtDecode(token)
                    const id = user._id
                    const response = await consulantService.viewCalendar({id:id, showAllDoctors:true});
                    console.log(response);
                    setCalendar(formatData(response.data[0]));
                    setDoctors(response.data[1]);
                    // console.log(resourcesData);
                    // console.log(response.data[1]);
                    // console.log(formatData(response.data[0]))
                } catch (error) {
                    console.log(error);
                }
            }

        loadData();},[]);

        const formatData = (data) =>{
            const formatedData = [];
            for(let i = 0; i < data.length; i++) {
            const date = data[i]["date"].split("-");
            const startTime = data[i]["startTime"].split(":");
            const endTime = data[i]["endTime"].split(":");
            const startDate = new Date(Number(date[0]), Number(date[1])-1, Number(date[2]), Number(startTime[0]), Number(startTime[1]));
            const endDate = new Date(Number(date[0]), Number(date[1])-1, Number(date[2]), Number(endTime[0]), Number(endTime[1]));
            // console.log(endDate)           
            if (startDate > endDate){
                endDate.setDate(endDate.getDate() + 1) 
                // console.log(endDate)           
            }

            const item = {
                    title : data[i]["title"],
                    startDate: new Date(Number(date[0]), Number(date[1])-1, Number(date[2]), Number(startTime[0]), Number(startTime[1])),
                    endDate: endDate,
                    id: data[i]["id"],
                    doctors: data[i]["doctors"]
                }
            formatedData.push(item);
            }
            return(formatedData);
        }

        // console.log(windowHeight);
        // console.log(calendar);

        return (
            <Paper  >
                <Scheduler data={calendar} height = {windowHeight} label='schedule' >
                    <ViewState />
                    <EditingState/>
                    <MonthView height = {windowHeight} />
                    <AllDayPanel />
                    <EditRecurrenceMenu />
                    <Appointments />
                    <Toolbar />
                    <Resources
                        data ={[{
                            fieldName: 'doctors',
                            title: 'Doctors',
                            instances: doctors,
                            allowMultiple: true,
                            },
                        ]}
                    />
                    <DateNavigator />
                    <AppointmentTooltip
                        showCloseButton
                        // showOpenButton
                    />
                </Scheduler>
            </Paper>
        );
    }
    export default Calendar;