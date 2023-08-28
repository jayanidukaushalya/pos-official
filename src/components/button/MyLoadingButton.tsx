import LoadingButton from "@mui/lab/LoadingButton";
import { Box } from "@mui/material";

type MyLoadingButtonProps = {
  buttonLabel: string;
  type: "button" | "submit";
  loadingIndicator: string;
  isLoading: boolean;
  isFullWidth: boolean;
  variant: "contained" | "outlined" | "text";
};

function MyLoadingButton({
  buttonLabel,
  type,
  loadingIndicator,
  isLoading,
  isFullWidth,
  variant,
}: MyLoadingButtonProps) {
  return (
    <Box>
      <LoadingButton
        sx={{ opacity: 0.8 }}
        color="warning"
        size="small"
        loading={isLoading}
        loadingIndicator={loadingIndicator}
        variant={variant}
        type={type}
        fullWidth={isFullWidth}
      >
        <span>{buttonLabel}</span>
      </LoadingButton>
    </Box>
  );
}

export default MyLoadingButton;
