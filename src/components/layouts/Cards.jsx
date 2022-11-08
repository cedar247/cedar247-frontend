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
import PopUp from './Popup';
import AdminService from '../../services/API/AdminService';
import { toast } from "react-toastify";
import ConfirmDialog from './ConfirmDialog';

//to style the page with bullet
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

//card componet is to have the details of the wards
export default function OutlinedCard(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
        
    }
    const handleClose = () => {
        setOpen(false);
      };
    const timeFunction = ()=> {
        toast.success("Deleted", {
            toastId: "1"
        })
        setTimeout(function(){ window.location.reload(false); }, 1500);
       }
    const [values, setwardID] = React.useState({
        wardID: props.ward._id
    });
    
    const [openPop, setPopOpen] = React.useState(false);
    const [Option, setOption] = React.useState(0);
    const handleCloseAddWard = () => {
        setPopOpen(false);
    }
    const SetDefaultOption = () => {
        setOption(0);
    };
    const handleView = () => {
        setPopOpen(true);
        setOption(4);
    }
    const DeleteWard = async () => {
        setwardID({
            wardID:props.ward._id
        })
        handleClose();
            try {
              //fetches the data of wards 
              const response = await AdminService.DeleteWard(values);
              if(response.statusText=='OK'){
                timeFunction()
              };
            //   console.log(response.data);
              //sets the ward names with id in the wards array
            } catch (error) {
              console.log(error)
            }
        
          };
    
    return (
        <>
        
        <PopUp opener={openPop} closer={handleCloseAddWard} DefaultOption={SetDefaultOption} Option={Option} ward = {props.ward} />
       
        <Box sx={{ minWidth: 200, minHeight: 200 }}>
            <div style={{
                boxShadow: '0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)',
                borderRadius: '10px'
            }}><Card variant="outlined" elevation={24} >
                    <React.Fragment>
                        <CardContent>
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                <OtherHousesIcon sx={{ fontSize: 30 }} />
                            </Avatar>
                            <Typography variant="h5" component="div">
                                {/* to display the  name of the ward */}
                                {props.name} 
                            </Typography>
                            <Divider color="primary" />
                            <Box component="div" sx={{ display: 'inline' }}><PersonIcon sx={{ fontSize: 35 }} /></Box>
                            <Box component="div" sx={{ display: 'inline' }}> 
                             {/* to display the  count of the doctors in ward */}           <Typography fontSize={18} component="div">
                                {props.num} Doctors
                            </Typography></Box>
                            <Divider />
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" fullWidth onClick={handleView}>View</Button>
                            <Button color="error" variant="outlined" onClick={handleOpen} fullWidth> Delete </Button>
                        </CardActions>
                    </React.Fragment>
                </Card>
                <ConfirmDialog open = {open} handleDelete = {DeleteWard} handleClose={handleClose}/>
                </div>

        </Box> </>
    );
}
