import { Grid, Box, Button, Typography, colors } from "@mui/material";
import MainLayout from "../layout/MainLayout";
import { FaPlus } from "react-icons/fa";
import Table from "../components/table/Table";

const Stock = () => {
  return (
    <MainLayout>
      <Grid
        container
        maxHeight={"calc(100vh - 60px)"}
        overflow={"auto"}
        p={"20px"}
        gap={"20px"}
      >
        <Grid
          item
          justifyContent={"space-between"}
          display={"flex"}
          alignItems={"center"}
          xs={12}
          px={"5px"}
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
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid>
        <Grid
          item
          justifyContent={"space-between"}
          display={"flex"}
          alignItems={"center"}
          xs={12}
          px={"5px"}
          mt={"20px"}
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
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Stock;
