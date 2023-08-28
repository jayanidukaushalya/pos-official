import { Alert, Snackbar } from "@mui/material";

type SuccessAlertProps = {
  isError: boolean;
  message: string;
  setterFunction: React.Dispatch<React.SetStateAction<boolean>>;
  severity: "success" | "warning" | "info" | "error";
  variant: "filled" | "outlined" | "standard";
};

const SnackBarAlert = ({
  isError,
  setterFunction,
  message,
  severity,
  variant,
}: SuccessAlertProps) => {
  return (
    <Snackbar
      open={isError}
      autoHideDuration={2000}
      onClose={() => setterFunction(false)}
    >
      <Alert
        onClose={() => setterFunction(false)}
        variant={variant}
        severity={severity}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBarAlert;
