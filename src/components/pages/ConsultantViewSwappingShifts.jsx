import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PasswordIcon from '@mui/icons-material/Password';
import { Button, Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ChangePassword from '../pages/ChangePassword.jsx';
import SentExchangeRequests from '../layouts/sentExchangeRequests.jsx';
import RecievedExchangeRequests from '../layouts/recievedExchangeRequests.jsx';
import CustomizedDialogs from '../layouts/Dialog.jsx';
import AppViewSwappingShifts from "../common/consultant/appViewSwappingShifts";
import PopUp from '../layouts/DoctorPopups';
import ConsultantService from "../../services/API/ConsultantService";
import ConsultantResponededSwapshifts from '../layouts/consultantResponededSwapshifts.jsx';
import ConsultantRecievedSwapshifts from '../layouts/consultantRecievedSwapshifts.jsx';
import jwtDecode from 'jwt-decode'
import AccessDenied from './AccessDenied';

const useStyles = makeStyles({
    paper: {
        background: "#f5f5f5"
    }
});

const drawerWidth = 240;
const windowHeight = window.innerHeight-200;
const id = "633ab54a9fd528b9532b8d59"

export default function ConsultantViewSwappingShifts() {
    const classes = useStyles();
    const theme = useTheme();
    const [hideSent, setHideSent] = React.useState(0);
    const [hideRecieved, setHideRecieved] = React.useState(0);
    const [option, setOption] = React.useState(0);
    const [Reqests, setRequests] = React.useState([]);
    const [acceptedReqests, setAcceptedRequests] = React.useState([]);
    const [rejectedReqests, setRejectedRequests] = React.useState([]);
    // const id = "633ab0f123be88c950fb8a89";
    const [user, setUser] = React.useState("");
    const [id, setID] = React.useState("");
    const [shifts, setShifts] = React.useState([]);
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
                window.location.href = "/"
            }
            else if (user) {
                if (user.type === "CONSULTANT") {
                    setUser("CONSULTANT");
                    setID(user._id);
                    handleGetRequests();
                } else {
                    setUser("NONE")
                }

            }
        } else {
            setUser("")
        }

    },[id, refresh]);
    
    const handleRefresh = () => {
        console.log("setrefresh")
        setRefresh(true)

    }

    async function handleGetRequests(){
        try {
                const response = await ConsultantService.getRequests({id:id,refresh:refresh});
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
        if (option == 0) {
            return  <ConsultantRecievedSwapshifts refresh = {handleRefresh} recievedRequests = {Reqests}/>
        }else if (option == 1){
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
            {user != "" && user == "CONSULTANT" ? vieveSwappingShiftsPage : <> <AccessDenied></AccessDenied> </>}
        </>
    );
}
