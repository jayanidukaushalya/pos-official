import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Button,
} from "@mui/material";
import SnackBarAlert from "../../alert/SnackBarAlert";
import MyLoadingButton from "../../button/MyLoadingButton";
import { Transition } from "../Dialog.styles";
import { useStockDelete } from "../../../hook/stock/stockDelete";
import { GridRowId } from "@mui/x-data-grid";

type StockProps = {
  open: boolean;
  id: GridRowId | null;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DeleteStock = ({ open, setOpen, id }: StockProps) => {
  const handleClose = () => {
    setOpen(false);
  };

  const {
    isLoading,
    isError,
    isSuccess,
    errorMessage,
    setIsError,
    setIsSuccess,
    onSubmit,
  } = useStockDelete({ handleClose, id });

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        TransitionComponent={Transition}
      >
        <form onSubmit={onSubmit}>
          <DialogTitle>{"Waning !"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure, Do you really want to delete this stock from the
              system ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {isLoading || (
              <Button
                sx={{ opacity: 0.8 }}
                color="warning"
                onClick={handleClose}
              >
                Cancel
              </Button>
            )}
            <MyLoadingButton
              buttonLabel="Delete"
              isFullWidth={false}
              isLoading={isLoading}
              loadingIndicator="Deleting..."
              type="submit"
              variant="text"
            />
          </DialogActions>
        </form>
      </Dialog>
      <SnackBarAlert
        isError={isError}
        setterFunction={setIsError}
        message={errorMessage}
        severity={"error"}
        variant={"filled"}
      />
      <SnackBarAlert
        isError={isSuccess}
        setterFunction={setIsSuccess}
        message="Stock deleted successfully !"
        severity={"success"}
        variant={"filled"}
      />
    </>
  );
};

export default DeleteStock;
