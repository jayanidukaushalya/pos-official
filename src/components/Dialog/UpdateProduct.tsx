import {
  Box,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import MyLoadingButton from "../button/MyLoadingButton";
import SnackBarAlert from "../alert/SnackBarAlert";
import useProductUpdate from "../../hook/productUpdate";
import { ProductProps } from "./productTypes";
import { Transition } from "./Dialog.styles";

const UpdateProduct = ({ open, setOpen, id, name }: ProductProps) => {
  const handleClose = () => {
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
    },
    mode: "onSubmit",
  });

  const {
    isError,
    isLoading,
    isSuccess,
    errorMessage,
    setIsError,
    setIsSuccess,
    onSubmit,
  } = useProductUpdate({ reset, handleClose, id });

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        TransitionComponent={Transition}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Update product details</DialogTitle>
          <DialogContent>
            <Box
              sx={{
                p: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography>Current product name: {name}</Typography>
              <TextField
                error={!!errors.name}
                fullWidth
                label="New Product Name"
                variant="outlined"
                size="small"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Please enter the product name",
                  },
                  maxLength: {
                    value: 45,
                    message: "Product name must not exceed 45 characters !",
                  },
                })}
                helperText={errors.name?.message}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <MyLoadingButton
              buttonLabel="Update Product"
              isFullWidth={false}
              isLoading={isLoading}
              loadingIndicator="Loading..."
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

export default UpdateProduct;
