import { Box, IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { FaTrashCan, FaPenToSquare } from "react-icons/fa6";
import { TableColumnsProps } from "./types";

const useStockTableColumns = ({
  handleUpdate,
  handleDelete,
}: TableColumnsProps) => {
  const columns: GridColDef[] = [
    {
      field: "index",
      headerName: "Index",
      maxWidth: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "register",
      headerName: "Register Date",
      type: "date",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "warranty",
      headerName: "Warranty",
      type: "date",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "buyingPrice",
      headerName: "Buying Price (Rs)",
      type: "number",
      flex: 1,
    },
    {
      field: "sellingPrice",
      headerName: "Selling Price (Rs)",
      type: "number",
      flex: 1,
    },
    {
      field: "qty",
      headerName: "Quantity",
      type: "number",
      flex: 1,
    },
    {
      field: "options",
      headerName: "Options",
      flex: 1,
      headerAlign: "center",

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
              justifyContent: "center",
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

export default useStockTableColumns;
