import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { red, green, blue } from "@mui/material/colors";
import CardHeader from '@mui/material/CardHeader';
import { Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import Alert from './Alert'
import DoctorService from "../../services/API/DoctorService";
import { toast } from "react-toastify";

//to style the page with bullet
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

//card componet is to have the details of the doctor sent requests
function SentCards(props) {

    const changeAvetar = ()=>{
        if (props.status == 1) {
            return  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"><MarkAsUnreadIcon sx={{ fontSize: 30 }} /></Avatar>
        }
        else if(props.status == 2) {
            return  <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe"><MarkAsUnreadIcon sx={{ fontSize: 30 }} /></Avatar>
        }else{
            return  <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe"><EmailIcon sx={{ fontSize: 30 }} /></Avatar>
        }
    }

    return (
        <Box sx={{ minWidth: 200, minHeight: 200 }}>
            <div style={{
                boxShadow: '0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)',
                borderRadius: '10px'
        }}><Card elevation={24} >
                <React.Fragment>
                    <CardContent>
                        {changeAvetar()}
                        <Typography variant="h5" component="div">
                            {/* to display the  name of the ward */}
                            Dr. {props.name} 
                        </Typography>
                        <Divider color="primary" />
                        <Box component="div" sx={{ display: 'inline' }}>
                            <Typography fontSize={20} fontWeight = "bold"component="div">From </Typography>
                            <Typography fontSize={18} marginLeft={5} component="div">Date : {props.fromDate}</Typography>
                            <Typography fontSize={18} marginLeft={5} component="div">Shift : {props.fromShiftName}</Typography>
                            <Typography fontSize={18} marginLeft={5} component="div">Time : {props.fromShift}</Typography>
                        </Box>
                        <Box component="div" sx={{ display: 'inline' }}>
                            <Typography fontSize={20} fontWeight = "bold"component="div">To </Typography>
                            <Typography fontSize={18} marginLeft={5} component="div">Date : {props.toDate}</Typography>
                            <Typography fontSize={18} marginLeft={5} component="div">Shift : {props.toShiftName}</Typography>
                            <Typography fontSize={18} marginLeft={5} component="div">Time : {props.toShift}</Typography>
                        </Box>
                    </CardContent>
                </React.Fragment>
            </Card></div>
        </Box>
    );
}

//card componet is to have the details of the doctor recieved requests
function RecievedCards(props) {

    const [alertAccept, setAlertAccept] = React.useState(false);
    const [alertReject, setAlertReject] = React.useState(false);
    const [disabled, setDisabled] = React.useState(false);
    const handleAccept =()=>{
        setAlertAccept(true)
    }
    const handleReject =()=>{
        setAlertReject(true)
    }

    const handleAcceptAgree = async ()=>{
        console.log(props.requestId)
        console.log("Agree1")
        const values = {
            requestId: props.requestId,
            Agree: true,
        };
        try {
            const response = await DoctorService.setRequestResponse(values);
            console.log(response.data,"pass1");
            props.refresh();
            setDisabled(true);
            toast.success("Successfully agreed",{toastId: "1"});
        }catch (error) {
            console.log(error)
            toast.error("There is some errors. try again",{toastId: "1"})
        }
    }
    const handleRejectAgree = async ()=>{
        console.log(props.requestId)
        console.log("Agree2")
        const values = {
            requestId: props.requestId,
            Agree: false,
        };
        try {
            const response = await DoctorService.setRequestResponse(values);
            console.log(response.data,"pass1");
            props.refresh();
            setDisabled(true)
            toast.success("Successfully agreed",{toastId: "1"});
        }catch (error) {
            console.log(error)
            toast.error("There is some errors. try again",{toastId: "1"})
        }
    }

    const changeAvetar = ()=>{
        if (props.status == 1) {
            return  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"><MarkAsUnreadIcon sx={{ fontSize: 30 }} /></Avatar>
        }
        else if(props.status == 2) {
            return  <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe"><MarkAsUnreadIcon sx={{ fontSize: 30 }} /></Avatar>
        }else{
            return  <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe"><EmailIcon sx={{ fontSize: 30 }} /></Avatar>
        }
    }

    return (
        <Box sx={{ minWidth: 200, minHeight: 200 }}>
            <div style={{
                boxShadow: '0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)',
                borderRadius: '10px'
        }}><Card elevation={24} >
                <React.Fragment>
                    <CardContent>
                        {changeAvetar()}
                        <Typography variant="h5" component="div">
                            {/* to display the  name of the ward */}
                            Dr. {props.name} 
                        </Typography>
                        <Divider color="primary" />
                        <Box component="div" sx={{ display: 'inline' }}>
                            <Typography fontSize={20} fontWeight = "bold"component="div">From </Typography>
                            <Typography fontSize={18} marginLeft={5} component="div">Date : {props.fromDate}</Typography>
                            <Typography fontSize={18} marginLeft={5} component="div">Shift : {props.fromShiftName}</Typography>
                            <Typography fontSize={18} marginLeft={5} component="div">Time : {props.fromShift}</Typography>

                        </Box>
                        <Box component="div" sx={{ display: 'inline' }}>
                            <Typography fontSize={20} fontWeight = "bold"component="div">To </Typography>
                            <Typography fontSize={18} marginLeft={5} component="div">Date : {props.toDate}</Typography>
                            <Typography fontSize={18} marginLeft={5} component="div">Shift : {props.toShiftName}</Typography>
                            <Typography fontSize={18} marginLeft={5} component="div">Time : {props.toShift}</Typography>
                        </Box>
                        <Divider />
                    </CardContent>
                    <CardActions>
                        <Button disabled = {props.status!=0 || disabled } onClick = {(e)=>handleAccept()} variant="contained" color="error" fullWidth >Accept</Button>
                        <Button disabled = {props.status!=0 || disabled } onClick = {(e)=>handleReject()} variant="contained" color="success" fullWidth>Rejct</Button>
                    </CardActions>
                </React.Fragment>
            </Card></div>
            <Alert 
                alert = {alertAccept} 
                setAlert= {setAlertAccept} 
                handleAgree={handleAcceptAgree} 
                title = {"Are you sure you want to Accept the request?"}
                content = {"you cannot reverse decision you make."}/>
            <Alert 
                alert = {alertReject} 
                setAlert= {setAlertReject} 
                handleAgree={handleRejectAgree} 
                title = {"Are you sure you want to Reject the request?"}
                content = {"you cannot reverse decision you make."}/>
        </Box>
    );
}

//card componet is to have the details of the consultant received requests
function ConsultantRecievedCards(props) {

    const [alertAccept, setAlertAccept] = React.useState(false);
    const [alertReject, setAlertReject] = React.useState(false);
    const [disabled, setDisabled] = React.useState(false);
    const handleAccept =()=>{
        setAlertAccept(true)
    }
    const handleReject =()=>{
        setAlertReject(true)
    }

    const handleAcceptAgree = async ()=>{
        console.log(props.requestId)
        console.log("Agree1")
        const values = {
            requestId: props.requestId,
            Agree: true,
        };
        try {
            const response = await DoctorService.setRequestResponse(values);
            console.log(response.data,"pass1");
            props.refresh();
            setDisabled(true);
            toast.success("Successfully agreed",{toastId: "1"});
        }catch (error) {
            console.log(error)
            toast.error("There is some errors. try again",{toastId: "1"})
        }
    }
    const handleRejectAgree = async ()=>{
        console.log(props.requestId)
        console.log("Agree2")
        const values = {
            requestId: props.requestId,
            Agree: false,
        };
        try {
            const response = await DoctorService.setRequestResponse(values);
            console.log(response.data,"pass1");
            props.refresh();
            setDisabled(true)
            toast.success("Successfully agreed",{toastId: "1"});
        }catch (error) {
            console.log(error)
            toast.error("There is some errors. try again",{toastId: "1"})
        }
    }

    const changeAvetar = ()=>{
        if (props.status == 1) {
            return  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"><MarkAsUnreadIcon sx={{ fontSize: 30 }} /></Avatar>
        }
        else if(props.status == 2) {
            return  <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe"><MarkAsUnreadIcon sx={{ fontSize: 30 }} /></Avatar>
        }else{
            return  <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe"><EmailIcon sx={{ fontSize: 30 }} /></Avatar>
        }
    }

    return (
        <Box sx={{ minWidth: 200, minHeight: 200 }}>
            <div style={{
                boxShadow: '0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)',
                borderRadius: '10px'
        }}><Card elevation={24} >
                <React.Fragment>
                    <CardContent>
                        {changeAvetar()}
                        <Typography variant="h5" component="div">
                            {/* to display the  name of the ward */}
                            Dr. {props.name} 
                        </Typography>
                        <Divider color="primary" />
                        <Box component="div" sx={{ display: 'inline' }}>
                            <Typography fontSize={20} fontWeight = "bold"component="div">From </Typography>
                            <Typography fontSize={18} marginLeft={5} component="div">Date : {props.fromDate}</Typography>
                            <Typography fontSize={18} marginLeft={5} component="div">Shift : {props.fromShiftName}</Typography>
                            <Typography fontSize={18} marginLeft={5} component="div">Time : {props.fromShift}</Typography>

                        </Box>
                        <Box component="div" sx={{ display: 'inline' }}>
                            <Typography fontSize={20} fontWeight = "bold"component="div">To </Typography>
                            <Typography fontSize={18} marginLeft={5} component="div">Date : {props.toDate}</Typography>
                            <Typography fontSize={18} marginLeft={5} component="div">Shift : {props.toShiftName}</Typography>
                            <Typography fontSize={18} marginLeft={5} component="div">Time : {props.toShift}</Typography>
                        </Box>
                        <Divider />
                    </CardContent>
                    <CardActions>
                        <Button disabled = {props.status!=0 || disabled } onClick = {(e)=>handleAccept()} variant="contained" color="error" fullWidth >Accept</Button>
                        <Button disabled = {props.status!=0 || disabled } onClick = {(e)=>handleReject()} variant="contained" color="success" fullWidth>Rejct</Button>
                    </CardActions>
                </React.Fragment>
            </Card></div>
            <Alert 
                alert = {alertAccept} 
                setAlert= {setAlertAccept} 
                handleAgree={handleAcceptAgree} 
                title = {"Are you sure you want to Accept the request?"}
                content = {"you cannot reverse decision you make."}/>
            <Alert 
                alert = {alertReject} 
                setAlert= {setAlertReject} 
                handleAgree={handleRejectAgree} 
                title = {"Are you sure you want to Reject the request?"}
                content = {"you cannot reverse decision you make."}/>
        </Box>
    );
}
export {
    SentCards,
    RecievedCards,
    ConsultantRecievedCards,
}