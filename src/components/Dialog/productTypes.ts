import { GridRowId } from "@mui/x-data-grid";

type ProductProps = {
  open: boolean;
  id: GridRowId | null;
  name?: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type UseProductProps = {
  reset: () => void;
  handleClose: () => void;
  id: GridRowId | null;
};

type AxiosResponse = {
  message: string;
};

export type { ProductProps, UseProductProps, AxiosResponse };
