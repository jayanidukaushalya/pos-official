import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Button,
} from "@mui/material";
import SnackBarAlert from "../alert/SnackBarAlert";
import MyLoadingButton from "../button/MyLoadingButton";
import { useProductDelete } from "../../hook/productDelete";
import { ProductProps } from "./productTypes";
import { Transition } from "./Dialog.styles";

const DeleteProduct = ({ open, setOpen, id }: ProductProps) => {
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
  } = useProductDelete({ handleClose, id });

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
              Are you sure, Do you really want to delete this product from the
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
        message="Product updated successfully !"
        severity={"success"}
        variant={"filled"}
      />
    </>
  );
};

export default DeleteProduct;
