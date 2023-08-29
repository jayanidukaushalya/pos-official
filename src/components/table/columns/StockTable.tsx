import { Box, IconButton, Tooltip, Zoom } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { FaTrashCan, FaPenToSquare, FaEye } from "react-icons/fa6";
import { TableColumnsProps } from "./types";

const useStockTableColumns = ({
  handleViewBarcode,
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
      field: "barcode",
      headerName: "Barcode",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "register",
      headerName: "Register Date",
      type: "date",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        const date = new Date(params.value);
        const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
          .toString()
          .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

        return formattedDate;
      },
    },
    {
      field: "warranty",
      headerName: "Warranty",
      type: "date",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        const date = new Date(params.value);
        const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
          .toString()
          .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

        return formattedDate;
      },
    },
    {
      field: "buyingPrice",
      headerName: "Buying Price (Rs)",
      type: "number",
      flex: 1,
      minWidth: 150,
      renderCell(params) {
        return parseFloat(params.value).toLocaleString("en-LK", {
          minimumFractionDigits: 2,
          // style: "currency",
          // currency: "LKR",
          // currencyDisplay: "code",
        });
      },
    },
    {
      field: "sellingPrice",
      headerName: "Selling Price (Rs)",
      type: "number",
      flex: 1,
      minWidth: 150,
      renderCell(params) {
        return parseFloat(params.value).toLocaleString("en-LK", {
          minimumFractionDigits: 2,
          // style: "currency",
          // currency: "LKR",
          // currencyDisplay: "narrowSymbol",
        });
      },
    },
    {
      field: "qty",
      headerName: "Quantity",
      type: "number",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "options",
      headerName: "Options",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",

      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => {
        const { id, row } = params;
        const name = row["productName"];
        const barcode = row["barcode"];
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
              title="View Barcode"
              TransitionComponent={Zoom}
              TransitionProps={{ timeout: 200 }}
            >
              <IconButton
                onClick={() => {
                  handleViewBarcode(id, barcode);
                }}
                size="small"
                color="default"
              >
                <FaEye />
              </IconButton>
            </Tooltip>
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

export default useStockTableColumns;
