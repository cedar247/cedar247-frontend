import DeleteIcon from "@mui/icons-material/Delete";
import FolderIcon from "@mui/icons-material/Folder";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";


function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value
        })
    );
}

const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper
}));

const Display = (val) =>{
    alert(val)
}
export default function Peoples(props) {
    const names = props.catogory
    const doctor = props.docs
    const consultant = props.cons
    const catogories = 
    <List>
        {Array.from(names).map((index) => (
            <ListItem
            
            >
                <ListItemAvatar>
                    <Avatar>
                    <DeleteIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={index} />
            </ListItem>

        ))}
    </List>

const Doctornames = 
<List>
    {Array.from(doctor).map((index) => (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                <DeleteIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={index.name} />
        </ListItem>

    ))}
</List>
const NO_one_Added =  <List>

    <ListItem>
        <ListItemAvatar>
            <Avatar>
            <DeleteIcon />
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary="NO ONE ADDED" />
    </ListItem>
</List>
const Consultantnames = 
    <List>
        {Array.from(consultant).map((index) => (
            <ListItem >
                <ListItemAvatar >
                    <Avatar>
                    <DeleteIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={index.name} />
            </ListItem>

        ))}
    </List>
    // const [Doctors, setDoctors] = React.useState([]);
    // const [Cosnsultnats, setCosnsultnats] = React.useState([]);

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Demo>
                    {names!=null ? catogories : <></>}
                    {doctor!=null ? Doctornames : <><p>No Doctors</p></>}
                    {consultant!=null ? Consultantnames : <><p>No Consultants</p></>}
                    </Demo>
                </Grid>
            </Grid>
        </Box>
    );
}
