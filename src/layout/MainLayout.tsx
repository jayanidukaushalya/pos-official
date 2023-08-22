import { Grid } from "@mui/material";
import Titlebar from "../components/Titlebar";
import Sidebar from "../components/sidebar";

type MainLayoutProp = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProp) => {
  return (
    <Grid container direction={"column"} height={"100vh"}>
      <Titlebar />
      <Grid item>
        <Grid container>
          <Sidebar />
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainLayout;
