import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Transition } from "../Dialog.styles";
import Barcode from "../../Barcode";
import { FaEye } from "react-icons/fa6";

type ViewBarcodeProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  barcode: string;
};

const ViewBarcode = ({ open, setOpen, barcode }: ViewBarcodeProps) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        TransitionComponent={Transition}
      >
        <DialogTitle>Barcode View</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              p: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              textAlign: "center",
            }}
          >
            <Barcode barcode={barcode} />
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ViewBarcode;
