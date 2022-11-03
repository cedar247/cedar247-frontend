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
import {ConsultantRecievedCards} from "../layouts/requestCards";

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
    const [fromRequests, setFromRequests] = React.useState([]);
    // const id = "633ab0f123be88c950fb8a89";
    const id = "633ab54a9fd528b9532b8d59"
    const [shifts, setShifts] = React.useState([]);
    const [refresh, setRefresh] = React.useState(false);

    React.useEffect(() => {
        async function handleGetRequests(){
        
            try {
                    const response = await ConsultantService.getRequests({id:id,refresh:refresh});
                    console.log(response);
                    if(response.data) {
                        setFromRequests(response.data[0])
                    }
                } catch (error) {
                    console.log(error);
                }
            }

        if (refresh){
            setRefresh(false)
        }
        handleGetRequests();
    },[id, refresh]);
    
    const handleRefresh = () => {
        console.log("setrefresh")
        setRefresh(true)

    }

    const displayRequests = ()=> {
        <div>
            <h2 style={{width: "auto", height: "auto", textAlign: "center"}}>Recievd Requests</h2>
            <Grid container spacing={5}>
                {Array.from(fromRequests).map((request, index, arr) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <ConsultantRecievedCards
                            key = {index}
                            // name={request}
                            requestId={request.id}
                            name={request.name}
                            fromDate={request.fromDate}
                            fromShiftName={request.fromShiftName}
                            fromShift={request.fromShift}
                            toDate={request.toDate}
                            toShiftName={request.toShiftName}
                            toShift={request.toShift}
                            status = {request.status}
                            refresh = {handleRefresh}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    }

    return (
        <div>
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
    );
}
