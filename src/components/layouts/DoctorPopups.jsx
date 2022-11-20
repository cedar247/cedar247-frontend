import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DoctorChangePassword from "./DoctorChangePassword";
import Defnerequirements from "./defineRequirements";
import RequestExchangeShifts from "./RequestExchangeShifts";

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
    props.DefaultOption();
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
        <DialogContent height= {10} dividers={scroll === "paper"}>
            {props.Option === 1 ? <Defnerequirements id ={props.id} shifts = {props.shifts} /> : <></>}
            {props.Option === 2 ? <DoctorChangePassword id ={props.id} /> : <></>}
            {props.Option === 3 ? <RequestExchangeShifts id ={props.id} /> : <></>}

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
