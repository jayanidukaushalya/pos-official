import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import MyLoadingButton from "../../button/MyLoadingButton";
import SnackBarAlert from "../../alert/SnackBarAlert";
import { Transition } from "../Dialog.styles";
import { ProductProps } from "../../../types";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { CurrencyFormat, QuantityFormat } from "../../input/NumberFormat";
import {
  validateQty,
  validateSellingPrice,
  validateWarrantyDate,
} from "./validations";
import useStockInsert from "../../../hook/stock/stockInsert";

export type Stock = {
  warranty: Date;
  buyingPrice: string;
  sellingPrice: string;
  qty: string;
  barcode: number;
};

const AddNewStock = ({ open, setOpen }: ProductProps) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    reset,
  } = useForm<Stock>({
    mode: "onSubmit",
  });

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const {
    isLoading,
    isError,
    isSuccess,
    errorMessage,
    setIsError,
    setIsSuccess,
    onSubmit,
  } = useStockInsert({ handleClose, reset });

  const tomorrow = dayjs().add(1, "day");

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        TransitionComponent={Transition}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>New Stock</DialogTitle>
          <DialogContent>
            <Grid container sx={{ p: "20px" }} columnSpacing={1} rowSpacing={2}>
              <Grid item xs={6}>
                <TextField
                  error={!!errors.buyingPrice}
                  color="warning"
                  fullWidth
                  label="Buying Price"
                  InputProps={{
                    inputComponent: CurrencyFormat as any,
                  }}
                  variant="outlined"
                  helperText={errors.buyingPrice?.message}
                  {...register("buyingPrice", {
                    required: {
                      value: true,
                      message: "Buying Price is required !",
                    },
                  })}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  error={!!errors.sellingPrice}
                  color="warning"
                  fullWidth
                  label="Selling Price"
                  InputProps={{
                    inputComponent: CurrencyFormat as any,
                  }}
                  variant="outlined"
                  helperText={errors.sellingPrice?.message}
                  {...register("sellingPrice", {
                    required: {
                      value: true,
                      message: "Selling Price is required !",
                    },
                    validate: (value) =>
                      validateSellingPrice(value, {
                        buyingPrice: watch("buyingPrice"),
                      }),
                  })}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  error={!!errors.qty}
                  color="warning"
                  fullWidth
                  label="Quantity"
                  InputProps={{
                    inputComponent: QuantityFormat as any,
                  }}
                  variant="outlined"
                  helperText={errors.qty?.message}
                  {...register("qty", {
                    required: {
                      value: true,
                      message: "Stock Quantity is required !",
                    },
                    validate: (value) => validateQty(value),
                  })}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="warranty"
                  control={control}
                  rules={{
                    validate: (warrantyDate) =>
                      validateWarrantyDate(warrantyDate),
                  }}
                  render={({ field, fieldState: { error } }) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        format="YYYY-MM-DD"
                        sx={{ width: "100%" }}
                        label="Warranty"
                        minDate={tomorrow}
                        slotProps={{
                          textField: {
                            helperText: !!error && error.message,
                            color: "warning",
                          },
                        }}
                        {...field}
                      />
                    </LocalizationProvider>
                  )}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <MyLoadingButton
              buttonLabel="Add Stock"
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

export default AddNewStock;
