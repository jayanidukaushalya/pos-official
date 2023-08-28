import { useEffect, useState, useContext } from "react";
import { DataGrid, GridRowId } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { ProductUpdateContext } from "../../context/ProductUpdateContext";
import DeleteProduct from "../Dialog/DeleteProduct";
import UpdateProduct from "../Dialog/UpdateProduct";
import useStockTableColumns from "./columns/StockTable";

type Stock = {
  id: number;
  product_id: number;
  bprice: number;
  sprice: number;
  qty: number;
  warranty: Date;
  register_date: Date;
  status: number;
};

type StockTable = {
  stock: Stock[];
};

const StockTable = ({ stock }: StockTable) => {
  const [rows, setRows] = useState([]);
  const [id, setId] = useState<GridRowId | null>(null);
  const [name, setName] = useState("");
  const [openDelete, setOpenDelete] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);

  useEffect(() => {
    const update = stock.map((item: Stock, index: number) => ({
      index: index + 1,
      internalId: item.id,
      register: item.register_date,
      warranty: item.warranty,
      buyingPrice: item.bprice,
      sellingPrice: item.sprice,
      qty: item.qty,
    }));

    setRows(update);
  }, [stock]);

  const { notify } = useContext(ProductUpdateContext);
  const handleDelete = (id: GridRowId) => {
    setId(id);
    setOpenDelete(true);
  };

  const handleUpdate = async (id: GridRowId, name: string) => {
    setId(id);
    setName(name);
    setOpenUpdate(true);
  };

  const { columns } = useStockTableColumns({ handleUpdate, handleDelete });

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
      <DeleteProduct open={openDelete} setOpen={setOpenDelete} id={id} />
      <UpdateProduct
        open={openUpdate}
        setOpen={setOpenUpdate}
        id={id}
        name={name}
      />
    </Box>
  );
};

export default StockTable;
