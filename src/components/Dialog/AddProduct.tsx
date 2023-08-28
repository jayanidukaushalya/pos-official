import {
  Box,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useForm } from "react-hook-form";
import MyLoadingButton from "../button/MyLoadingButton";
import SnackBarAlert from "../alert/SnackBarAlert";
import useProductInsert from "../../hook/productInsert";
import { ProductProps } from "./productTypes";
import { Transition } from "./Dialog.styles";

const AddProductDialog = ({ open, setOpen }: ProductProps) => {
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
    isLoading,
    isError,
    isSuccess,
    errorMessage,
    setIsError,
    setIsSuccess,
    onSubmit,
  } = useProductInsert({ handleClose, reset });

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        TransitionComponent={Transition}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Add new product</DialogTitle>
          <DialogContent>
            <Box sx={{ p: "20px" }}>
              <TextField
                error={!!errors.name}
                fullWidth
                label="Product Name"
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
              buttonLabel="Add Product"
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
        message="Product added successfully !"
        severity={"success"}
        variant={"filled"}
      />
    </>
  );
};

export default AddProductDialog;
