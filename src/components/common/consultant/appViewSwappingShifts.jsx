import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Divider from '@mui/material/Divider';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';


const pages = ["Sent", "received"];

export default function AppViewSwappingShifts(props) {
    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOption = (event) => {
        console.log(event)
        if(event == 0){
            props.setOption(event)
            console.log("sent")
        }else{
            props.setOption(event)
            console.log("recieved")
        }
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            width: '100%',
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Exchange shifts
                    </Typography>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        
                        sx={{
                            width: '100%',
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontSize: 15,
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Exchange shifts
                    </Typography>

                    <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'row-reverse'
                            }}
                        >
                            <Button color="inherit" onClick={() => navigate('/DoctorDashboard')}>   <Divider orientation="vertical" flexItem>
                            <Typography variant="h6" component="div" >
                                BACK
                            </Typography>
                                </Divider><ArrowBackIosIcon /></Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}