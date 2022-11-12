import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Divider from '@mui/material/Divider';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useNavigate} from 'react-router-dom';

export default function ChanpasswordHeader() {
    const navigate = useNavigate();
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
                        Change Password
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
                            fontSize:15,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Change Password
                    </Typography>
                    <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'row-reverse'
                            }}
                        >
                            <Button color="inherit" onClick={() => navigate('/ConsultantDashboard')}>   <Divider orientation="vertical" flexItem>
                            <Typography variant="h6" component="div" >
                                Home
                            </Typography>
                                </Divider><ArrowBackIosIcon /></Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}