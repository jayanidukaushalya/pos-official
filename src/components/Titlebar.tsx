import { useState, useEffect } from "react";
import { ipcRenderer } from "electron";
import { Grid, Typography, IconButton } from "@mui/material";
import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeClose,
  VscChromeRestore,
} from "react-icons/vsc";

const Titlebar = () => {
  const [isMaximize, setMaximize] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      ipcRenderer.send("maximize-window");
    }, 0);
    setTimeout(() => {
      ipcRenderer.send("resize-true");
    }, 5);
    setTimeout(() => {
      ipcRenderer.send("change-window-size-1000-600");
    }, 10);
  }, []);

  const handleClose = () => {
    ipcRenderer.send("close-window");
  };

  const handleMinimize = () => {
    ipcRenderer.send("minimize-window");
  };

  const handleMaximize = () => {
    ipcRenderer.send("toggle-window");
    ipcRenderer.invoke("get-window-maximized-state").then((maximizedState) => {
      setMaximize(maximizedState);
    });
  };

  return (
    <Grid item height={"35px"} width={"100vw"} bgcolor={"white"}>
      <Grid
        container
        height={"inherit"}
        justifyContent={"space-between"}
        className="movable-true"
        px={"10px"}
        alignItems={"center"}
      >
        <Grid item className="movable-false">
          <Typography fontSize={"12px"}>POS System</Typography>
        </Grid>
        <Grid
          item
          className="movable-false"
          width={"120px"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <IconButton size="small" onClick={handleMinimize} color="warning">
            <VscChromeMinimize />
          </IconButton>
          <IconButton size="small" onClick={handleMaximize} color="warning">
            {isMaximize ? <VscChromeRestore /> : <VscChromeMaximize />}
          </IconButton>
          <IconButton size="small" onClick={handleClose} color="warning">
            <VscChromeClose />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Titlebar;
