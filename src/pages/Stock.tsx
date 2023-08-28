import { useState } from "react";
import { Grid, Box, Button, Typography, colors } from "@mui/material";
import MainLayout from "../layout/MainLayout";
import { FaPlus } from "react-icons/fa";
import Table from "../components/table/Table";
import AddProduct from "../components/Dialog/AddProduct";
import { ProductUpdateContext } from "../context/ProductUpdateContext";
import AntDesignGrid from "../components/table/Table.style";

const Stock = () => {
  const [notify, setNotify] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleNotify = () => {
    setNotify((prev) => !prev);
  };

  return (
    <ProductUpdateContext.Provider value={{ notify, handleNotify }}>
      <MainLayout>
        <Grid container p={"10px"} gap={"20px"}>
          <Grid item xl={12} px={"5px"}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="h6"
                  lineHeight={1.5}
                  fontWeight={"bold"}
                  component={"h1"}
                >
                  Stock List
                </Typography>
                <Typography color={colors.grey[800]} variant="subtitle2">
                  Manage your Stock
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Button
                  startIcon={<FaPlus />}
                  sx={{
                    opacity: "0.8",
                    boxShadow: "none",
                    "&:hover": { boxShadow: "none" },
                  }}
                  variant="contained"
                  color="warning"
                >
                  Add new stock
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ backgroundColor: "white" }}>
              <AntDesignGrid />
            </Box>
          </Grid>
          <Grid item xs={12} px={"5px"} mt={"20px"}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="h6"
                  lineHeight={1.5}
                  fontWeight={"bold"}
                  component={"h1"}
                >
                  Product List
                </Typography>
                <Typography color={colors.grey[800]} variant="subtitle2">
                  Manage your Products
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Button
                  onClick={handleOpen}
                  startIcon={<FaPlus />}
                  sx={{
                    opacity: "0.8",
                    boxShadow: "none",
                    "&:hover": { boxShadow: "none" },
                  }}
                  variant="contained"
                  color="warning"
                >
                  Add new product
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ backgroundColor: "white" }}>
              <Table />
            </Box>
          </Grid>
        </Grid>
        <AddProduct open={open} setOpen={setOpen} />
      </MainLayout>
    </ProductUpdateContext.Provider>
  );
};

export default Stock;
