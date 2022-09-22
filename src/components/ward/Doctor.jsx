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
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function Doctor(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Grid item md={4} s={6}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {props.name}
                    </Typography>

                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {props.category}
                    </Typography>

                    

                    <Typography className={classes.pos} color="textSecondary">
                        Ward Number: {props.wardNumber}
                    </Typography>

                    <Typography variant="body2" component="p">
                        {props.wardName} Ward
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small">View Schedule</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}