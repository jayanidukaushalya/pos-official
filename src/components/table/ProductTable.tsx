import { useEffect, useState, useContext } from "react";
import { DataGrid, GridRowId } from "@mui/x-data-grid";
import request from "../../config/axios";
import { Box } from "@mui/material";
import { ProductUpdateContext } from "../../context/ProductUpdateContext";
import useProductTableColumns from "./columns/ProductTable";
import DeleteProduct from "../Dialog/product/DeleteProduct";
import UpdateProduct from "../Dialog/product/UpdateProduct";

type FetchData = { name: string; id: number };

const ProductTable = () => {
  const [rows, setRows] = useState([]);
  const [id, setId] = useState<GridRowId | null>(null);
  const [name, setName] = useState("");
  const [openDelete, setOpenDelete] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);

  const { notify } = useContext(ProductUpdateContext);

  useEffect(() => {
    const fetch = async () => {
      try {
        const {
          data: { data },
        } = await request.get("product/search");

        const update = data.map((product: FetchData, index: number) => ({
          index: index + 1,
          internalId: product.id,
          productName: product.name,
        }));

        setRows(update);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, [notify]);

  const handleDelete = (id: GridRowId) => {
    setId(id);
    setOpenDelete(true);
  };

  const handleUpdate = async (id: GridRowId, name: string) => {
    setId(id);
    setName(name);
    setOpenUpdate(true);
  };

  const { columns } = useProductTableColumns({ handleUpdate, handleDelete });

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

export default ProductTable;
