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
      <Grid item xs={12} height={"calc(100vh - 35px)"}>
        <Grid container height={"inherit"}>
          <Sidebar />
          <Grid
            item
            height={"inherit"}
            width={"calc(100vw - 280px)"}
            overflow={"auto"}
            bgcolor={colors.grey[200]}
            borderRadius={"10px"}
          >
            <Grid
              borderRadius={"10px"}
              width={"calc(100vw - 280px)"}
              maxHeight={"calc(100vh - 55px)"}
              overflow={"auto"}
              bgcolor={colors.grey[200]}
              px={"10px"}
              py={"10px"}
            >
              {children}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainLayout;
