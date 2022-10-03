import { Avatar, Box } from '@mui/material'
import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { padding, textAlign } from '@mui/system';
import Grid from '@mui/material/Grid';
import OutlinedCard from './Cards';

export default function Details(props) {
  return (
    <div>
      <Grid container spacing={5}   >
        {Array.from(props.wards).map((index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <OutlinedCard name={index.name} 
            num={index.doctors.length} 
            id = {index._id}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
