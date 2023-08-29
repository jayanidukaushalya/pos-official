import { GridRowId } from "@mui/x-data-grid";

type TableColumnsProps = {
  handleViewBarcode: (id: GridRowId, barcode: string) => void;
  handleUpdate: (id: GridRowId, name: string) => void;
  handleDelete: (id: GridRowId) => void;
};

export type { TableColumnsProps };
