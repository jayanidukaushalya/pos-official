import { Box, IconButton } from "@mui/material";
import { GridColDef, GridRowId } from "@mui/x-data-grid";
import { FaTrashCan, FaPenToSquare } from "react-icons/fa6";

type ProductTableColumnsProps = {
  handleUpdate: (id: GridRowId, name: string) => void;
  handleDelete: (id: GridRowId) => void;
};

const useProductTableColumns = ({
  handleUpdate,
  handleDelete,
}: ProductTableColumnsProps) => {
  const columns: GridColDef[] = [
    { field: "index", headerName: "ID", width: 150 },
    {
      field: "productName",
      headerName: "Product name",
      editable: false,
      width: 300,
    },
    {
      field: "options",
      headerName: "Options",
      editable: false,
      width: 150,
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => {
        const { id, row } = params;
        const name = row["productName"];
        return (
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              width: "100%",
              opacity: 0.8,
            }}
          >
            <IconButton
              onClick={() => {
                handleUpdate(id, name);
              }}
              size="small"
              color="info"
            >
              <FaPenToSquare />
            </IconButton>
            <IconButton
              onClick={() => {
                handleDelete(id);
              }}
              size="small"
              color="error"
            >
              <FaTrashCan />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return { columns };
};

export default useProductTableColumns;
