// import { useEffect, useState } from "react";
// import { ipcRenderer } from "electron";
import { colors, Grid, Typography } from "@mui/material";
import Titlebar from "../components/Titlebar";
import Sidebar from "../components/sidebar";

const Dashboard = () => {
  return (
    <Grid container direction={"column"} height={"100vh"}>
      <Titlebar />
      <Grid item>
        <Grid container>
          <Sidebar />
          <Grid item flexGrow={1} bgcolor={colors.grey[200]}>
            <Grid container direction={"column"}>
              <Typography>Container</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
