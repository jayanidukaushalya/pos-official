import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { colors, Box, List, Divider, Grid, Typography } from "@mui/material";
import logo from "../../assets/img/logo.svg";
import dashboard from "../../assets/img/dashboard.svg";
import stock from "../../assets/img/stock.svg";
import reports from "../../assets/img/reports.svg";
import billing from "../../assets/img/billing.svg";
import gear from "../../assets/img/gear.svg";
import logout from "../../assets/img/logout.svg";
import warning from "../../assets/img/warning.svg";
import Item from "./Item";
import { LOGIN } from "../../routes/path";
import Dialog from "../Dialog";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleNavigate = () => {
    console.log("navigate");
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleLogout = () => {
    window.localStorage.removeItem("userId");
    window.localStorage.removeItem("username");

    navigate(LOGIN);
  };

  return (
    <Grid width={"250px"}>
      <Grid container height={"calc(100vh - 35px)"} direction={"column"}>
        <Dialog
          open={open}
          setOpen={setOpen}
          title={"Are you sure, do you want to logout from the system ?"}
          img={warning}
          handleEvent={handleLogout}
        />
        <Grid container flexDirection={"column"} bgcolor={"white"} flexGrow={1}>
          <Grid item>
            <List sx={{ p: 0 }}>
              <Item
                handleEvent={handleNavigate}
                img={dashboard}
                label={"Dashboard"}
              />
            </List>
            <Divider />
            <List sx={{ p: 0 }}>
              <Item
                handleEvent={handleNavigate}
                img={stock}
                label={"Stock Management"}
              />
              <Item
                handleEvent={handleNavigate}
                img={reports}
                label={"Reports"}
              />
            </List>
            <Divider />
            <List sx={{ p: 0 }}>
              <Item
                handleEvent={handleNavigate}
                img={billing}
                label={"Cashier"}
              />
            </List>
            <Divider />
          </Grid>
          <Grid
            flexGrow={1}
            display={"flex"}
            sx={{ backgroundColor: colors.grey[200] }}
            alignItems={"center"}
            justifyContent={"center"}
            item
          >
            <Box
              sx={{
                display: "flex",
                gap: "20px",
              }}
            >
              <img src={logo} height={"48px"} />
              <Typography sx={{ color: colors.grey[800], fontWeight: "bold" }}>
                Tesla
                <br /> Electronics
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Divider />
            <List sx={{ p: 0 }}>
              <Item handleEvent={handleNavigate} img={gear} label={"Options"} />
              <Item handleEvent={handleOpen} img={logout} label={"Logout"} />
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Sidebar;
