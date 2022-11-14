import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import SentExchangeRequests from '../layouts/sentExchangeRequests.jsx';
import RecievedExchangeRequests from '../layouts/recievedExchangeRequests.jsx';
import AppBarExchangeRequest from "../common/doctor/appBarExchangeRequest";
import DoctorService from "../../services/API/DoctorService";
import jwtDecode from 'jwt-decode'
import AccessDenied from './AccessDenied';



export default function ViewExchangeShifts() {
    const [option, setOption] = React.useState(0);
    const [toRequests, setToRequests] = React.useState([]);
    const [fromRequests, setFromRequests] = React.useState([]);
    const [user, setUser] = React.useState("");
    const [id, setID] = React.useState("");
    // const id = "633ab0f123be88c950fb8a89";
    // const id = "633ab54a9fd528b9532b8d59"
    const [refresh, setRefresh] = React.useState(false);

    React.useEffect(() => {
        if (refresh){
            setRefresh(false)
        }
        async function handleGetRequests(userId){
            try {
                    const response = await DoctorService.getRequests({id:userId,refresh:refresh});
                    console.log(response);
                    if(response.data) {
                        setToRequests(response.data[1])
                        setFromRequests(response.data[0])
                    }
                } catch (error) {
                    console.log(error);
                }
                
            }
        const token = localStorage.getItem('token');
            if (token) {
                const user = jwtDecode(token)
                console.log(user)
                if (!user) {
                    localStorage.removeItem('token')
                    window.location.href = "/"
                }
                else if (user) {
                    if (user.type === "DOCTOR") {
                        setUser("DOCTOR");
                        setID(user._id);
                        handleGetRequests(user._id);
                    } else {
                        setUser("NONE")
                    }
                }
            } else {
                setUser("")
            }

    },[user, refresh]);
    

    const handleRefresh = () => {
        console.log("setrefresh")
        setRefresh(true)

    }

    const displayRequests = ()=> {
        if (option === 0) {
            return <SentExchangeRequests  toRequests = {toRequests}/>
        }
        else{
            return  <RecievedExchangeRequests refresh = {handleRefresh} fromRequests = {fromRequests}/>
        }
    }

    const viewExchangePage = <div data-testid= "ViewExchan">
                                <Box sx={{ display: 'flex' }}>
                                    <CssBaseline />
                                    <AppBarExchangeRequest setOption ={setOption} />
                                </Box>
                                <Box>
                                    <div>
                                        {displayRequests()}
                                    </div>
                                </Box>
                            </div>

    return (
        <>
            {user !== "" && user === "DOCTOR" ? viewExchangePage : <> <AccessDenied></AccessDenied> </>}
        </>
    )
}
