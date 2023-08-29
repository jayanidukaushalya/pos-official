import { GridRowId } from "@mui/x-data-grid";

type ProductProps = {
  open: boolean;
  id?: GridRowId | null;
  name?: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type AxiosResponse = {
  message: string;
};

export type { ProductProps, AxiosResponse };
