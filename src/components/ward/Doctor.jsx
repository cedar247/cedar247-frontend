import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor: '#F5F6FA'
    },
    title: {
      fontSize: 14,
      color: '#F4A965'
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function Doctor(props) {
    const classes = useStyles();

    return (
        <Grid item md={4} s={6}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {props.name}
                    </Typography>

                    <Typography className={classes.title} color="textSecondary">
                        {props.category}
                    </Typography>

                    <Typography  color="primary" gutterBottom>
                        Contact: <span>{props.contactNumber}</span>
                    </Typography>

                    <Typography className={classes.pos} color="textSecondary">
                        Ward Number: <span>{props.wardNumber}</span>
                    </Typography>

                    <Typography variant="body2" component="p">
                        {props.wardName}
                    </Typography>
                </CardContent>

                {/* <CardActions>
                    <Button 
                        size="small" 
                        color='secondary' 
                        variant="outlined"
                    >
                        View Schedule
                    </Button>
                </CardActions> */}
            </Card>
        </Grid>
    )
}