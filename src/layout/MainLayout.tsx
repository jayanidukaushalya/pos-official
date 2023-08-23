import { Grid, colors } from "@mui/material";
import Titlebar from "../components/Titlebar";
import Sidebar from "../components/sidebar";

type MainLayoutProp = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProp) => {
  return (
    <Grid container direction={"row"} height={"100vh"}>
      <Titlebar />
      <Grid item xs={12}>
        <Grid container>
          <Sidebar />
          <Grid
            item
            xs={9}
            lg={10}
            px={"10px"}
            py={"10px"}
            bgcolor={colors.grey[200]}
            borderRadius={"10px"}
            flexDirection={"row"}
            display={"flex"}
            alignItems={"start"}
          >
            {children}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainLayout;
