import { GridRowId } from "@mui/x-data-grid";

type TableColumnsProps = {
  handleUpdate: (id: GridRowId, name: string) => void;
  handleDelete: (id: GridRowId) => void;
};

export type { TableColumnsProps };
