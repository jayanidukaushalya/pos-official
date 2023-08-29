import { useEffect, useState } from "react";
import { DataGrid, GridRowId } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import useStockTableColumns from "./columns/StockTable";
import DeleteStock from "../Dialog/stock/DeleteStock";
import ViewBarcode from "../Dialog/stock/ViewBarcode";

type Stock = {
  id: number;
  barcode: string;
  product_id: number;
  bprice: number;
  sprice: number;
  qty: number;
  warranty: Date;
  register_date: Date;
  status: number;
};

type StockTableColumns = {
  index: number;
  barcode: string;
  internalId: number;
  register: Date;
  warranty: Date;
  buyingPrice: number;
  sellingPrice: number;
  qty: number;
};

type StockTable = {
  stock: Stock[];
};

const StockTable = ({ stock }: StockTable) => {
  const [rows, setRows] = useState<Array<StockTableColumns>>([]);
  const [id, setId] = useState<GridRowId | null>(null);
  const [barcode, setBarcode] = useState("");
  const [openBarocde, setOpenBarcode] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);

  useEffect(() => {
    const update = stock.map((item: Stock, index: number) => ({
      index: index + 1,
      internalId: item.id,
      barcode: item.barcode,
      register: item.register_date,
      warranty: item.warranty,
      buyingPrice: item.bprice,
      sellingPrice: item.sprice,
      qty: item.qty,
    }));

    setRows(update);
  }, [stock]);

  const handleViewBarcode = (id: GridRowId, barcode: string) => {
    setId(id);
    setBarcode(barcode);
    setOpenBarcode(true);
  };

  const handleDelete = (id: GridRowId) => {
    setId(id);
    setOpenDelete(true);
  };

  const handleUpdate = async (id: GridRowId, name: string) => {
    setId(id);
    setOpenUpdate(true);
  };

  const { columns } = useStockTableColumns({
    handleUpdate,
    handleDelete,
    handleViewBarcode,
  });

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        display: "flex",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        getRowId={(row) => row.internalId}
        pageSizeOptions={[10]}
        disableRowSelectionOnClick
        autoHeight
      />
      <ViewBarcode
        open={openBarocde}
        setOpen={setOpenBarcode}
        barcode={barcode}
      />
      <DeleteStock open={openDelete} setOpen={setOpenDelete} id={id} />
    </Box>
  );
};

export default StockTable;
