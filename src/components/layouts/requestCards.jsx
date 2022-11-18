import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { red, green, blue, orange } from "@mui/material/colors";
import { Divider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import Alert from './Alert'
import DoctorService from "../../services/API/DoctorService";
import ConsultantService from "../../services/API/ConsultantService";
import { toast } from "react-toastify";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';

//to style the page with bullet

//card componet is to have the details of the doctor sent requests
function SentCards(props) {

    const changeAvetar = ()=>{
        if (props.status === 3) {
            return  <List>
                        <div>
                            <ListItem sx={{ mr: 2 }}>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"><MarkAsUnreadIcon sx={{ fontSize: 30 }} /></Avatar>
                                </ListItemAvatar>
                            <div>
                                <Typography fontSize={18} sx={{ color: red[500] }} marginLeft={5} component="div">rejected.</Typography>
                            </div>
                            </ListItem>
                        </div>
                    </List>
        }
        else if(props.status === 1) {
            return  <List>
                        <div>
                            <ListItem sx={{ mr: 2 }}>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"><MarkAsUnreadIcon sx={{ fontSize: 30 }} /></Avatar>
                                </ListItemAvatar>
                            <div>
                                <Typography fontSize={18} sx={{ color: red[500] }} marginLeft={5} component="div">Doctor rejected.</Typography>
                            </div>
                            </ListItem>
                        </div>
                    </List>
        }else if(props.status === 2) {
            return  <List>
                        <div>
                            <ListItem sx={{ mr: 2 }}>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe"><MarkAsUnreadIcon sx={{ fontSize: 30 }} /></Avatar>
                                </ListItemAvatar>
                            <div>
                                <Typography fontSize={18} sx={{ color: orange[500] }} marginLeft={5} component="div">Doctor Accepted.</Typography>
                            </div>
                            </ListItem>
                        </div>
                    </List>
        }else if(props.status === 4) {
            return  <List>
                        <div>
                            <ListItem sx={{ mr: 2 }}>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe"><MarkAsUnreadIcon sx={{ fontSize: 30 }} /></Avatar>
                                </ListItemAvatar>
                            <div>
                                <Typography fontSize={18} sx={{ color: green[500] }} marginLeft={5} component="div">Accepted.</Typography>
                            </div>
                            </ListItem>
                        </div>
                    </List>            
        }else{
            return  <List>
                        <div>
                            <ListItem sx={{ mr: 2 }}>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe"><EmailIcon sx={{ fontSize: 30 }} /></Avatar>
                                </ListItemAvatar>
                            <div>
                                <Typography fontSize={18} sx={{ color: blue[500] }} component="div">no response.</Typography>
                            </div>
                            </ListItem>
                        </div>
                    </List>
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
                            <Typography data-testid="fromdate" fontSize={18} marginLeft={5} component="div">Date : {props.fromDate}</Typography>
                            <Typography data-testid="fromShiftName" fontSize={18} marginLeft={5} component="div">Shift : {props.fromShiftName}</Typography>
                            <Typography data-testid="fromShift" fontSize={18} marginLeft={5} component="div">Time : {props.fromShift}</Typography>
                        </Box>
                        <Box component="div" sx={{ display: 'inline' }}>
                            <Typography fontSize={20} fontWeight = "bold"component="div">To </Typography>
                            <Typography data-testid="todate" fontSize={18} marginLeft={5} component="div">Date : {props.toDate}</Typography>
                            <Typography data-testid="toShiftName" fontSize={18} marginLeft={5} component="div">Shift : {props.toShiftName}</Typography>
                            <Typography data-testid="toShift" fontSize={18} marginLeft={5} component="div">Time : {props.toShift}</Typography>
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
            toast.success("Successfully rejecetd",{toastId: "1"});
        }catch (error) {
            console.log(error)
            toast.error("There is some errors. try again",{toastId: "1"})
        }
    }

    const changeAvetar = ()=>{
        if (props.status === 3) {
            return  <List>
                        <div>
                            <ListItem sx={{ mr: 2 }}>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"><MarkAsUnreadIcon sx={{ fontSize: 30 }} /></Avatar>
                                </ListItemAvatar>
                            <div>
                                <Typography fontSize={18} sx={{ color: red[500] }} component="div">rejected</Typography>
                            </div>
                            </ListItem>
                        </div>
                    </List>
        }
        else if(props.status === 1) {
            return  <List>
                        <div>
                            <ListItem sx={{ mr: 2 }}>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"><MarkAsUnreadIcon sx={{ fontSize: 30 }} /></Avatar>
                                </ListItemAvatar>
                            <div>
                                <Typography fontSize={18} sx={{ color: red[500] }} component="div">Doctor rejected.</Typography>
                            </div>
                            </ListItem>
                        </div>
                    </List>
        }else if(props.status === 2) {
            return  <List>
                        <div>
                            <ListItem sx={{ mr: 2 }}>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe"><MarkAsUnreadIcon sx={{ fontSize: 30 }} /></Avatar>
                                </ListItemAvatar>
                            <div>
                                <Typography fontSize={18} sx={{ color: orange[500] }} component="div">Doctor Accepted.</Typography>
                            </div>
                            </ListItem>
                        </div>
                    </List>
        }else if(props.status === 4) {
            return  <List>
                        <div>
                            <ListItem sx={{ mr: 2 }}>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe"><MarkAsUnreadIcon sx={{ fontSize: 30 }} /></Avatar>
                                </ListItemAvatar>
                            <div>
                                <Typography fontSize={18} sx={{ color: green[500] }} component="div">Accepted.</Typography>
                            </div>
                            </ListItem>
                        </div>
                    </List>            
        }else{
            return  <List>
                        <div>
                            <ListItem sx={{ mr: 2 }}>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe"><EmailIcon sx={{ fontSize: 30 }} /></Avatar>
                                </ListItemAvatar>
                            <div>
                                <Typography fontSize={18} sx={{ color: blue[500] }} component="div">no response.</Typography>
                            </div>
                            </ListItem>
                        </div>
                    </List>
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
                            <Typography data-testid="fromdate" fontSize={18} marginLeft={5} component="div">Date : {props.fromDate}</Typography>
                            <Typography data-testid="fromShiftName" fontSize={18} marginLeft={5} component="div">Shift : {props.fromShiftName}</Typography>
                            <Typography data-testid="fromShift" fontSize={18} marginLeft={5} component="div">Time : {props.fromShift}</Typography>

                        </Box>
                        <Box component="div" sx={{ display: 'inline' }}>
                            <Typography fontSize={20} fontWeight = "bold"component="div">To </Typography>
                            <Typography data-testid="todate" fontSize={18} marginLeft={5} component="div">Date : {props.toDate}</Typography>
                            <Typography data-testid="toShiftName" fontSize={18} marginLeft={5} component="div">Shift : {props.toShiftName}</Typography>
                            <Typography data-testid="toShift" fontSize={18} marginLeft={5} component="div">Time : {props.toShift}</Typography>
                        </Box>
                        <Divider />
                    </CardContent>
                    <CardActions>
                        <Button aria-label = "accept" disabled = {props.status!=0 || disabled } onClick = {(e)=>handleAccept()} variant="contained" color="success" fullWidth >Accept</Button>
                        <Button aria-label = "reject" disabled = {props.status!=0 || disabled } onClick = {(e)=>handleReject()} variant="contained" color="error" fullWidth>Rejct</Button>
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

//card componet is to have the details of the consultant accepted and rejected requests
function ConsultantResponededCards(props) {

    const changeAvetar = ()=>{
        if (props.status === 3) {
            return  <List>
                        <div>
                            <ListItem sx={{ mr: 2 }}>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"><MarkAsUnreadIcon sx={{ fontSize: 30 }} /></Avatar>
                                </ListItemAvatar>
                            <div>
                                <Typography fontSize={18} sx={{ color: red[500] }}  component="div">rejected.</Typography>
                            </div>
                            </ListItem>
                        </div>
                    </List>
        }
        else{
            return  <List>
                        <div>
                            <ListItem sx={{ mr: 2 }}>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe"><MarkAsUnreadIcon sx={{ fontSize: 30 }} /></Avatar>
                                </ListItemAvatar>
                            <div>
                                <Typography fontSize={18} sx={{ color: green[500] }}  component="div">Accepted.</Typography>
                            </div>
                            </ListItem>
                        </div>
                    </List>        }
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
                            <Typography fontSize={20} fontWeight = "bold"component="div">Dr. {props.fromName} </Typography>
                            <Typography fontSize={20} fontWeight = "bold"component="div">From </Typography>
                            <Typography fontSize={18} marginLeft={5} component="div">Date : {props.fromDate}</Typography>
                            <Typography fontSize={18} marginLeft={5} component="div">Shift : {props.fromShiftName}</Typography>
                            <Typography fontSize={18} marginLeft={5} component="div">Time : {props.fromShift}</Typography>
                        </Box>
                        <Box component="div" sx={{ display: 'inline' }}>
                            <Typography fontSize={20} fontWeight = "bold"component="div">Dr. {props.toName} </Typography>
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
            const response = await ConsultantService.setRequestResponse(values);
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
            const response = await ConsultantService.setRequestResponse(values);
            console.log(response.data,"pass1");
            props.refresh();
            setDisabled(true)
            toast.success("Successfully Rejected",{toastId: "1"});
        }catch (error) {
            console.log(error)
            toast.error("There is some errors. try again",{toastId: "1"})
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
                        <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe"><EmailIcon sx={{ fontSize: 30 }} /></Avatar>
                        <Typography variant="h5" component="div">
                            {/* to display the  name of the ward */}
                            Dr. {props.name} 
                        </Typography>
                        <Divider color="primary" />
                        <Box component="div" sx={{ display: 'inline' }}>
                            <Typography fontSize={20} fontWeight = "bold"component="div">Dr. {props.fromName} </Typography>
                            <Typography fontSize={20} fontWeight = "bold"component="div">From </Typography>
                            <Typography fontSize={18} marginLeft={5} component="div">Date : {props.fromDate}</Typography>
                            <Typography fontSize={18} marginLeft={5} component="div">Shift : {props.fromShiftName}</Typography>
                            <Typography fontSize={18} marginLeft={5} component="div">Time : {props.fromShift}</Typography>
                        </Box>
                        <Box component="div" sx={{ display: 'inline' }}>
                            <Typography fontSize={20} fontWeight = "bold"component="div">Dr. {props.toName} </Typography>
                            <Typography fontSize={20} fontWeight = "bold"component="div">To </Typography>
                            <Typography fontSize={18} marginLeft={5} component="div">Date : {props.toDate}</Typography>
                            <Typography fontSize={18} marginLeft={5} component="div">Shift : {props.toShiftName}</Typography>
                            <Typography fontSize={18} marginLeft={5} component="div">Time : {props.toShift}</Typography>
                        </Box>
                        <Divider />
                    </CardContent>
                    <CardActions>
                        <Button disabled = { disabled } onClick = {(e)=>handleAccept()} variant="contained" color="success" fullWidth >Accept</Button>
                        <Button disabled = { disabled } onClick = {(e)=>handleReject()} variant="contained" color="error" fullWidth>Rejct</Button>
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
    ConsultantResponededCards,
    ConsultantRecievedCards,
}