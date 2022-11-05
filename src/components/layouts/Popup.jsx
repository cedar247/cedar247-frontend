import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import * as React from "react";
// import DialogContentText from "@mui/material/DialogContentText";
import AddConsultant from "./AddConsultant";
import AddDoctor from "./AddDoctor";
import AddWard from "./AddWards";

export default function PopUp(props) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
    props.closer();
    props.SetDefaultOption();
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Dialog
        open={props.opener}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogContent dividers={scroll === "paper"}>
            {props.Option == 1 ? <AddConsultant title = "Add Consultant"/> : <></>}
            {props.Option == 2 ? <AddDoctor title = "Add Doctor"/> : <></>}
            {props.Option == 3 ? <AddWard/> : <></>}
            {/* {props.Option == 3 ? <AddDoctor title = "Add Doctor"/> : <></>} */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
