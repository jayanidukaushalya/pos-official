import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  colors,
  Box,
  List,
  Divider,
  Grid,
  Typography,
  ListItem,
  Avatar,
  Chip,
} from "@mui/material";
import logo from "../../assets/img/logo.svg";
import dashboard from "../../assets/img/dashboard.svg";
import stock from "../../assets/img/stock.svg";
import reports from "../../assets/img/reports.svg";
import billing from "../../assets/img/billing.svg";
import gear from "../../assets/img/gear.svg";
import logout from "../../assets/img/logout.svg";
import warning from "../../assets/img/warning.svg";
import user from "../../assets/img/user.png";
import { RiRadioButtonLine } from "react-icons/ri";
import Item from "./Item";
import {
  CASHIER,
  DASHBOARD,
  LOGIN,
  OPTION,
  REPORT,
  STOCK,
} from "../../routes/path";
import Dialog from "../Dialog";

const Sidebar = () => {
  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleLogout = () => {
    window.localStorage.removeItem("userId");
    window.localStorage.removeItem("username");

    navigate(LOGIN);
  };

  return (
    <Grid item width={"260px"} height={"inherit"} bgcolor={"white"}>
      <Grid container height={"inherit"} direction={"column"}>
        <Dialog
          open={open}
          setOpen={setOpen}
          title={"Are you sure, do you want to logout from the system ?"}
          img={warning}
          handleEvent={handleLogout}
        />
        <Grid container flexDirection={"column"} flexGrow={1}>
          <Grid item>
            <List sx={{ p: 0 }}>
              <ListItem
                disablePadding
                sx={{
                  gap: "10px",
                  py: "20px",
                  paddingLeft: "30px",
                }}
              >
                <Avatar src={user} />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ color: colors.grey[800] }}>
                    {window.localStorage.getItem("username")}
                  </Typography>
                  <Chip
                    label="online"
                    variant="outlined"
                    color="warning"
                    size="small"
                    icon={<RiRadioButtonLine />}
                  />
                </Box>
              </ListItem>
            </List>
            <Divider />
            <List sx={{ p: 0 }}>
              <Link style={{ textDecoration: "none" }} to={DASHBOARD}>
                <Item
                  img={dashboard}
                  label={"Dashboard"}
                  pathname={pathname.includes(DASHBOARD)}
                />
              </Link>
            </List>
            <List sx={{ p: 0 }}>
              <Link style={{ textDecoration: "none" }} to={STOCK}>
                <Item
                  img={stock}
                  label={"Stock Management"}
                  pathname={pathname.includes(STOCK)}
                />
              </Link>
              <Link style={{ textDecoration: "none" }} to={REPORT}>
                <Item
                  img={reports}
                  label={"Reports"}
                  pathname={pathname.includes(REPORT)}
                />
              </Link>
            </List>
            <List sx={{ p: 0 }}>
              <Link style={{ textDecoration: "none" }} to={CASHIER}>
                <Item
                  img={billing}
                  label={"Cashier"}
                  pathname={pathname.includes(CASHIER)}
                />
              </Link>
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
                flexDirection: "row-reverse",
              }}
            >
              <img src={logo} height={"48px"} />
              <Typography
                sx={{
                  color: colors.grey[800],
                  fontWeight: "bold",
                  textAlign: "end",
                }}
              >
                Tesla
                <br /> Electronics
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Divider />
            <List sx={{ p: 0 }}>
              <Link style={{ textDecoration: "none" }} to={OPTION}>
                <Item
                  img={gear}
                  label={"Options"}
                  pathname={pathname.includes(OPTION)}
                />
              </Link>
              <Item handleEvent={handleOpen} img={logout} label={"Logout"} />
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Sidebar;
