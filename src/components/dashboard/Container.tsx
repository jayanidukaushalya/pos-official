import { colors, Grid, Paper } from "@mui/material";
import Card from "../../components/Card";
import Bars from "../../components/charts/Bars";
import Pie from "../../components/charts/Pie";
import Table from "../../components/table/Table";

const Container = () => {
  return (
    <Grid
      item
      width={"calc(100vw - 250px)"}
      px={"10px"}
      py={"10px"}
      bgcolor={colors.grey[200]}
      borderRadius={"10px"}
      flexDirection={"row"}
      display={"flex"}
      alignItems={"start"}
    >
      <Grid
        container
        maxHeight={"calc(100vh - 60px)"}
        overflow={"auto"}
        direction={"row"}
        borderRadius={"10px"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Grid item xs={12} lg={5.9}>
          <Grid container direction={"row"}>
            <Grid item xs={6}>
              <Card
                title={"Total Sales"}
                description={
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, distinctio."
                }
              />
            </Grid>
            <Grid item xs={6}>
              <Card
                title={"Total Sales"}
                description={
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, distinctio."
                }
              />
            </Grid>
            <Grid item xs={6}>
              <Card
                title={"Total Sales"}
                description={
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, distinctio."
                }
              />
            </Grid>
            <Grid item xs={6}>
              <Card
                title={"Total Sales"}
                description={
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, distinctio."
                }
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} marginTop={{ xs: 1, lg: 0 }} lg={6}>
          <Paper variant="outlined">
            <Bars />
          </Paper>
        </Grid>
        <Grid item xs={12} marginTop={{ xs: 1, lg: 1 }} lg={5}>
          <Paper
            sx={{
              height: "380px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            variant="outlined"
          >
            <Pie />
          </Paper>
        </Grid>
        <Grid item xs={12} marginTop={{ xs: 1, lg: 1 }} lg={6.9}>
          <Table />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Container;
