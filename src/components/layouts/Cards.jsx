import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { red } from "@mui/material/colors";
import CardHeader from '@mui/material/CardHeader';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import { Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const card = (
    <React.Fragment>

        <CardContent>
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                <OtherHousesIcon sx={{ fontSize: 30 }} />
            </Avatar>
            <Typography variant="h5" component="div">
                Dental & Oral
            </Typography>
            <Divider color="primary" />
            <Box component="div" sx={{ display: 'inline' }}><PersonIcon sx={{ fontSize: 35 }}/></Box>
            <Box component="div" sx={{ display: 'inline' }}>            <Typography fontSize={18} component="div">
               5 Doctors
            </Typography></Box> 
            <Divider   />
            <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
            </Typography>
            <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        <CardActions>

            <Button variant="contained" fullWidth >View</Button>
            <Button variant="outlined" fullWidth>Edit</Button>
        </CardActions>
    </React.Fragment>
);

export default function OutlinedCard() {
    return (
        <Box sx={{ minWidth: 200, minHeight: 200 }}>
            <div style={{
                boxShadow: '0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)',
                borderRadius: '10px'
            }}><Card variant="outlined" elevation={24} > {card}</Card></div>

        </Box>
    );
}
