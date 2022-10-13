import Grid from '@mui/material/Grid';
import React from 'react';
import OutlinedCard from './Cards';

export default function Details(props) {
  return (
    <div>
      {/* returns a container */}
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
