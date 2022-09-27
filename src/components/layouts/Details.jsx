import { Avatar, Box } from '@mui/material'
import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { padding, textAlign } from '@mui/system';
import Grid from '@mui/material/Grid';
import OutlinedCard from './Cards';

export default function Details() {
  return (
    <div>
        <Grid container spacing = {5}   >
        {Array.from(Array(6)).map((index) => (
          <Grid item xs= {12} sm = {6} md = {3} key={index}>
            <OutlinedCard/>
          </Grid>
        ))}
        </Grid>
    </div>
  )
}
