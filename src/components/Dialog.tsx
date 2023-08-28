import React from "react";
import Button from "@mui/material/Button";
import MuiDialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type DialogProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  img: string;
  handleEvent: () => void;
};

const Dialog = ({ open, setOpen, title, img, handleEvent }: DialogProps) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <MuiDialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText textAlign={"center"}>
            <img src={img} height={"128px"} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={handleClose}>
            Disagree
          </Button>
          <Button color="warning" onClick={handleEvent}>
            Agree
          </Button>
        </DialogActions>
      </MuiDialog>
    </div>
  );
};

export default Dialog;
