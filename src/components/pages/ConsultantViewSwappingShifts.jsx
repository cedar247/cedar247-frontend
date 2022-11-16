import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppViewSwappingShifts from "../common/consultant/appViewSwappingShifts";
import ConsultantService from "../../services/API/ConsultantService";
import ConsultantResponededSwapshifts from '../layouts/consultantResponededSwapshifts.jsx';
import ConsultantRecievedSwapshifts from '../layouts/consultantRecievedSwapshifts.jsx';
import jwtDecode from 'jwt-decode'


export default function ConsultantViewSwappingShifts() {
    const [option, setOption] = React.useState(0);
    const [Reqests, setRequests] = React.useState([]);
    const [acceptedReqests, setAcceptedRequests] = React.useState([]);
    const [rejectedReqests, setRejectedRequests] = React.useState([]);
    // const id = "633ab0f123be88c950fb8a89";
    const [user, setUser] = React.useState("");
    const [id, setID] = React.useState("");
    const [refresh, setRefresh] = React.useState(false);

    React.useEffect(() => {
        if (refresh){
            setRefresh(false)
        }

        const token = localStorage.getItem('token');
        if (token) {
            const user = jwtDecode(token)
            if (!user) {
                localStorage.removeItem('token')
                window.location.href = "/restricted"
            }
            else if (user) {
                if (user.type === "CONSULTANT") {
                    setUser("CONSULTANT");
                    setID(user._id);
                    handleGetRequests(user._id);
                } else {
                    window.location.href = "/restricted"
                    setUser("NONE")
                }

            }
        } else {
            window.location.href = "/restricted"
            setUser("")
        }

    },[id, refresh]);
    
    const handleRefresh = () => {
        console.log("setrefresh")
        setRefresh(true)

    }

    async function handleGetRequests(userId){
        try {
                const response = await ConsultantService.getRequests({id:userId,refresh:refresh});
                console.log(response);
                if(response.data) {
                    setRequests(response.data[0]);
                    setAcceptedRequests(response.data[1]);
                    setRejectedRequests(response.data[2]);
                }
            } catch (error) {
                console.log(error);
            }
        }


    const displayRequests = ()=> {
        if (option === 0) {
            return  <ConsultantRecievedSwapshifts refresh = {handleRefresh} recievedRequests = {Reqests}/>
        }else if (option === 1){
            return <ConsultantResponededSwapshifts  respondedRequests = {acceptedReqests}/>
        }else{
            return <ConsultantResponededSwapshifts  respondedRequests = {rejectedReqests}/>
        }
    }
    const vieveSwappingShiftsPage = <div>
                                    <Box sx={{ display: 'flex' }}>
                                        <CssBaseline />
                                        <AppViewSwappingShifts setOption ={setOption} />
                                    </Box>
                                    <Box>
                                        <div>
                                            {displayRequests()}
                                        </div>
                                    </Box>
                                </div>
    return (
        <>
            {user !== "" && user === "CONSULTANT" ? vieveSwappingShiftsPage : <></>}
        </>
    );
}
