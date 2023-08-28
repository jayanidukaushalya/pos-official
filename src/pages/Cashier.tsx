import MainLayout from "../layout/MainLayout";
import {
  Grid,
  Box,
  Button,
  Typography,
  List,
  ListItem,
  Divider,
} from "@mui/material";

const Cashier = () => {
  return (
    <MainLayout>
      <Grid container height={"calc(100vh - 60px)"} p={"20px"}>
        <Grid
          item
          justifyContent={"space-between"}
          display={"flex"}
          flexGrow={1}
          px={"5px"}
        >
          <Typography>Container</Typography>
        </Grid>
        <Grid item display={"flex"} px={"5px"}>
          <Grid container flexDirection={"column"} gap={"10px"}>
            <Grid
              item
              borderRadius={"10px"}
              bgcolor={"white"}
              overflow={"auto"}
              width={"300px"}
              height="350px"
            >
              <List
                sx={{
                  width: "100%",
                  borderRadius: "10px",
                }}
              >
                <ListItem>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      py: "10px",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography>Sub Total</Typography>
                    <Typography>Rs. 5,699.00</Typography>
                  </Box>
                </ListItem>

                <ListItem>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      py: "10px",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography>Discount</Typography>
                    <Typography>Rs. 1,000.00</Typography>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      py: "10px",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography>Discount</Typography>
                    <Typography>Rs. 1,000.00</Typography>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      py: "10px",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography>Discount</Typography>
                    <Typography>Rs. 1,000.00</Typography>
                  </Box>
                </ListItem>
              </List>
            </Grid>
            <Grid item>
              <List
                sx={{
                  bgcolor: "white",
                  width: "100%",
                  borderRadius: "10px",
                }}
              >
                <ListItem>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      py: "10px",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography>Sub Total</Typography>
                    <Typography>Rs. 5,699.00</Typography>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      py: "10px",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography>Discount</Typography>
                    <Typography>Rs. 1,000.00</Typography>
                  </Box>
                </ListItem>
                <Divider variant="middle" />
                <ListItem>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      py: "10px",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography>Net Total</Typography>
                    <Typography>Rs. 4,699.00</Typography>
                  </Box>
                </ListItem>
                <ListItem>
                  <Button
                    fullWidth
                    variant="contained"
                    color="warning"
                    sx={{
                      opacity: 0.8,
                      boxShadow: "none",
                      "&:hover": { boxShadow: "none" },
                    }}
                  >
                    Checkout
                  </Button>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Cashier;
