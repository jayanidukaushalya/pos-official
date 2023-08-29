import { Box, IconButton, Tooltip, Zoom } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { FaTrashCan, FaPenToSquare } from "react-icons/fa6";
import { TableColumnsProps } from "./types";

const useProductTableColumns = ({
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
      field: "productName",
      headerName: "Product name",
      flex: 1,
    },
    {
      field: "options",
      headerName: "Options",
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
            <Tooltip
              title="Update Stock"
              TransitionComponent={Zoom}
              TransitionProps={{ timeout: 200 }}
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
            </Tooltip>
            <Tooltip
              title="Delete Stock"
              TransitionComponent={Zoom}
              TransitionProps={{ timeout: 200 }}
            >
              <IconButton
                onClick={() => {
                  handleDelete(id);
                }}
                size="small"
                color="error"
              >
                <FaTrashCan />
              </IconButton>
            </Tooltip>
          </Box>
        );
      },
    },
  ];

  return { columns };
};

export default useProductTableColumns;
