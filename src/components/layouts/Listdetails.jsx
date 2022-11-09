import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Peoples from "./Persons";
import AdminService from '../../services/API/AdminService';
import { useEffect, useState } from "react";
export default function WardDetailList(props) {
    const empty = []
    const [values, setValues] = React.useState({
        _id: ''
    });
    console.log(props._id)
    // setValues({
    //     _id : props._id
    // })
    useEffect(() => {
        setValues({
            _id: props._id
        })
        getAllCons();
        getAllDocs();

    }, []);
    const [Docs, setDocs] = React.useState([]);
    const [Cons, setCons] = React.useState([]);

    const getAllDocs = async () => {
        console.log("All doc");
        setValues({
            _id: props._id
        })
        console.log(values._id)
        try {
            const response = await AdminService.getAllDocs(values);

            console.log(response);
            console.log(response.data);
            //stores the details of the ward
            setDocs(response.data);
        } catch (error) {
            console.log(error)
        }

    };
    const getAllCons = async () => {
        console.log("All doc");
        setValues({
            _id: props._id
        })
        console.log(values._id)
        try {
            const response = await AdminService.getAllCons(values);

            console.log(response);
            console.log(response.data);
            //stores the details of the ward
            setCons(response.data);
        } catch (error) {
            console.log(error)
        }

    };

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    const [open2, setOpen2] = React.useState(false);

    const handleClick2 = () => {
        if (Docs.length == 0) {
            getAllDocs()
        }
        // getAllDocs()
        setOpen2(!open2);
    };
    const [open3, setOpen3] = React.useState(false);

    const handleClick3 = () => {
        if (Cons.length == 0) {
            getAllCons()
        }
        // getAllCons()
        setOpen3(!open3);
    };

    return (
        <>
            <List
                sx={{ bgcolor: "background.paper" }}
            >
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        {/* <InboxIcon /> */}
                    </ListItemIcon>
                    <ListItemText primary="Doctor Categories" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <Peoples catogory={props.ward.doctorCategories} cons={empty} docs={empty} />
                    </List>
                </Collapse>
            </List>
            <List
                sx={{ bgcolor: "background.paper" }}
            >
                <ListItemButton onClick={handleClick2}>
                    <ListItemIcon>
                        {/* <InboxIcon /> */}
                    </ListItemIcon>
                    <ListItemText primary="Doctors" />
                    {open2 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open2} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <Peoples catogory={empty} docs={Docs} cons={empty} />

                    </List>
                </Collapse>
            </List>
            <List
                sx={{ bgcolor: "background.paper" }}
            >
                <ListItemButton onClick={handleClick3}>
                    <ListItemIcon>
                        {/* <InboxIcon /> */}
                    </ListItemIcon>
                    <ListItemText primary="Consultants" />
                    {open3 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open3} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <Peoples catogory={empty} cons={Cons} docs={empty} />

                    </List>
                </Collapse>
            </List>
        </>

    );
}
