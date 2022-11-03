import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BlockIcon from '@mui/icons-material/Block';
import Button from "@mui/material/Button";
function AccessDenied() {
    const handleChange  = async (e) => {
        window.location.href = "/"
    };
  return (
    <div>
    <Container>
        
    <Box sx={{ bgcolor: '#B2BEB5', height: '100vh' ,width:'100%', textAlign : 'center'}} >

    <br />
    <br />
    <BlockIcon sx={{ fontSize: 200 }}/>
    <br />
    <h1>Access to this page is Restricted</h1>
  <p>Please login as a valid user to get Access.</p>
  <Button
                    type="submit"
                    // fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleChange}
                >
                    Log In
                </Button>
    </Box>
  </Container></div>
  )
}

export default AccessDenied