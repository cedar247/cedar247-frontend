// ConfirmDialog.jsx
// material ui
import * as React from 'react';
import Button from '@mui/material/Button';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Box,
    IconButton,
    Typography,
  } from '@material-ui/core';
//   import { Close } from '@material-ui/icons';
  
  const ConfirmDialog = (props) => {
    const [open, setOpen] = React.useState(props.open);
    const handleClose = () => {
        setOpen(false);
      };
    return (
      <Dialog open={props.open} maxWidth="sm" fullWidth>
        <DialogTitle>Do You Want To Delete This Ward</DialogTitle>
        <Box position="absolute" top={0} right={0}>
          <IconButton>
            {/* <Close /> */}
          </IconButton>
        </Box>
        <DialogContent>
          <Typography>By Confirmng You Will Delete This Ward</Typography>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" variant="contained" onClick={props.handleClose}>
            Cancel
          </Button>
          <Button color="error" variant="contained" onClick={props.handleDelete} >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default ConfirmDialog;