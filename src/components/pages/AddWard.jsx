import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../common/admin/Header';
import SideBar from '../common/admin/SideBar';
import { styled } from '@mui/material/styles';
import WardDetails from '../ward/WardDetails';
import { Button, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";
import adminService from "../../services/API/AdminService";
import { useNavigate } from 'react-router-dom' 
import { toast } from "react-toastify";  
import jwtDecode from 'jwt-decode' 
import AccessDenied from './AccessDenied';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function AddWard() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    // const [ numShifts, setNumShifts ] = useState(0);
    const [wardDetails, setWardDetails] = React.useState({
        name: "",
        number: ""
    });
    const [user, setUser] = React.useState("");
    const [allShifts, setAllShifts] = useState([]);
    const [shiftDetails, setShiftDetails] = useState({});
    const [maxLeaves, setMaxLeaves] = useState('');
    const [numConsecutiveGroupShifts, setNumConsecutiveGroupShifts] = useState('');

    useEffect(() => {
        const token  = localStorage.getItem('token');
        if(token){
            const user = jwtDecode(token)
            if(!user){
                localStorage.removeItem('token')
                window.location.href = "/"
            }
            else if(user){
                if(user.type ==='Admin'){
                    setUser("Admin")
                }else{
                    setUser("NONE")
                }
                
            }
        }else{
            setUser("")
        }

        getAllShifts()
    }, [])

    const getAllShifts = async () => {
        try {
            const all_shifts = await adminService.getAllShifts();
            const data = all_shifts.data.shifts
            
            const obj = {}
            for(let i = 0; i < data.length; i++) {
                obj[data[i]["_id"]] = {
                    "name": data[i]["name"],
                    "startTime": data[i]["startTime"],
                    "endTime": data[i]["endTime"]
                }
            }
            // console.log(obj)
            setShiftDetails(obj)
            setAllShifts(all_shifts.data.shifts)
        } catch(error) {
            console.log(error)
        }
    }

    const [shifts, setShifts] = useState([]);
    const [addShift, setAddShift] = useState([])
    const [doctorCategories, setDoctorCategories] = useState({
        "Senior Registrar": true,
        "Registrar": true,
        "Senior Home Officer": true,
        "Home Officer": true,
        "Medical Officer": true
    })

    const handleShiftChange = (e, index, name) => {
        if(name === "shiftId") { // if user choose a existing shift
            const { options } = e.target;
            const value = []
            for (let i = 0, l = options.length; i < l; i += 1) {
                if (options[i].selected) {
                value.push(options[i].value);
                }
            }

            if(value[0] !== "other") {

                let cpShifts = [...shifts];
                let shift = {...cpShifts[index]}
                shift[name] = value[0];
                shift["name"] = shiftDetails[value[0]]["name"]
                shift["startTime"] = shiftDetails[value[0]]["startTime"]
                shift["endTime"] = shiftDetails[value[0]]["endTime"]
                cpShifts[index] = shift;
                setShifts(cpShifts)

                let cpAddShift = [...addShift];
                cpAddShift[index] = false;
                setAddShift(cpAddShift)
            } else {
                let cpShifts = [...shifts];
                let shift = {...cpShifts[index]}
                shift = {}
                cpShifts[index] = shift;
                setShifts(cpShifts)

                let cpAddShift = [...addShift];
                cpAddShift[index] = true;
                setAddShift(cpAddShift)
            }
        } else {
            let cpShifts = [...shifts];
            let shift = {...cpShifts[index]}
            shift[name] = e.target.value;
            cpShifts[index] = shift;
            setShifts(cpShifts)
        }
        
            
    }

    const handleDoctorCategories = (event) => {
        setDoctorCategories({ ...doctorCategories, [event.target.name]: event.target.checked });
    }


    const handleChange = (prop) => (event) => {
        setWardDetails({ ...wardDetails, [prop]: event.target.value });
      };

    

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(maxLeaves === "" || numConsecutiveGroupShifts === "" || wardDetails.name === "" || wardDetails.number === "" || shifts === "" || wardDetails.number <= 0 ) {
            toast.warning("Fill All Fields", {
                toastId: "1"
            })
        } else {

            try {
                const token = localStorage.getItem('token');
                const response = await adminService.addWard(
                    {
                        ...wardDetails, 
                        doctorCategories,
                        shifts,
                        maxLeaves,
                        numConsecutiveGroupShifts
                    }, token);
                if(response.status === 201) {
                    const new_token = response.data.token; // get the new token
                    localStorage.setItem('token', new_token) // add new token to local storage
                    toast.success("ward has been successfully added", {
                        toastId: "1"
                    })
                    navigate('/set-constraints')
                }
                //Todo: implement for other status codes
                if(response.status === 200) {
                    const error = response.data.error;

                    if(error !== undefined){
                        toast.error(error, {
                            toastId: "1"
                        })
                    }
                }
            } catch(error) {
                console.log(error)
            }
        }
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const AddWardPage =
        <div
            style={{
                minHeight: "100vh",
                // background: '#d2e6f9'
            }}
        >
            <Box 
                sx={{ display: 'flex' }}
                className="container"

                >
                <CssBaseline/>
                <Header handleDrawerOpen={handleDrawerOpen} open={open}/>
                <SideBar handleDrawerClose={handleDrawerClose} open={open}/>
                <Main open={open}>
                    <DrawerHeader />
                    <Typography 
                        variant='h4' 
                        component="h1"
                        align='center'
                        gutterBottom
                        color='secondary'
                    >
                        Add Ward
                    </Typography>

                    {/* content of the main is here */}
                    <form action="">
                        <WardDetails 
                            shifts={shifts}
                            addShift={addShift} 
                            allShifts={allShifts} 
                            wardDetails={wardDetails} 
                            handleChange={handleChange} 
                            handleShiftChange={handleShiftChange} 
                            handleDoctorCategories={handleDoctorCategories} 
                            doctorCategories={doctorCategories}/>
                        {/* <Constraints/> */}

                        <Grid container spacing={3} mt={3} mb={3}>
                            <Grid item md={6} sm={12} xs={12}>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Maximum number of leaves per month:" 
                                    variant="filled" 
                                    color='secondary' 
                                    type="number"
                                    onChange={(e) => setMaxLeaves(e.target.value)}
                                    fullWidth={true}
                                    value={maxLeaves}
                                    InputProps={{ inputProps: { min: 0 } }}
                                />
                            </Grid>

                            <Grid item md={6} sm={12} xs={12}>
                                <TextField 
                                    id="outlined-basic" 
                                    label="How many consecutive groups of shifts:" 
                                    variant="filled" 
                                    color='secondary' 
                                    type="number"
                                    onChange={(e)=> setNumConsecutiveGroupShifts(e.target.value)}
                                    fullWidth={true}
                                    InputProps={{ inputProps: { min: 0, max: 5 } }}
                                    value={numConsecutiveGroupShifts}
                                />
                            </Grid>
                        </Grid>

                        <Box textAlign='center' style={{"marginTop": "20px"}}>
                            <Link to="/set-constraints" style={{textDecoration: 'none'}}>
                                <Button variant="contained" color="primary" type='submit' onClick={handleSubmit}>
                                Next
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Main>
            </Box>
        </div>

    return(
        <>
        {user !== "" && user === "Admin" ? AddWardPage :<> <AccessDenied></AccessDenied> </> }
        </>
    )
}