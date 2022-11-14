import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import WardDetailList from './Listdetails';

export default function ViewCard(props) {


  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.ward.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
          
        </CardContent>
        <WardDetailList ward = {props.ward} _id = {props.ward._id}/>
      </CardActionArea>
      
    </Card>
  );
}
