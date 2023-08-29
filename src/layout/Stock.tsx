import { Grid, Box, Button, Typography, colors } from "@mui/material";
import MainLayout from "../layout/MainLayout";
import { FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { STOCK } from "../routes/path";
import { FaArrowLeft } from "react-icons/fa6";
import AddNewStock from "../components/Dialog/stock/AddNewStock";
import { useState } from "react";

type Stock = {
  children: React.ReactNode;
};

const StockLayout = ({ children }: Stock) => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <MainLayout>
      <Grid container p={"10px"} gap={"20px"}>
        <Grid item xs={12} px={"5px"}>
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
              {id && (
                <Link to={STOCK}>
                  <Button
                    startIcon={<FaArrowLeft />}
                    sx={{
                      opacity: "0.8",
                      boxShadow: "none",
                      "&:hover": { boxShadow: "none" },
                    }}
                    variant="contained"
                    color="warning"
                  >
                    Go Back
                  </Button>
                </Link>
              )}
              {id && (
                <Button
                  startIcon={<FaPlus />}
                  sx={{
                    opacity: "0.8",
                    boxShadow: "none",
                    "&:hover": { boxShadow: "none" },
                  }}
                  variant="contained"
                  color="warning"
                  onClick={handleOpen}
                >
                  Add new stock
                </Button>
              )}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
      <AddNewStock open={open} setOpen={setOpen} />
    </MainLayout>
  );
};

export default StockLayout;
