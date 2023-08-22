import { app, BrowserWindow, ipcMain } from "electron";
import path from "node:path";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { startExpress } from "../express/index";

process.env.DIST = path.join(__dirname, "../dist");
process.env.PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, "../public");

let win: BrowserWindow | null;
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.PUBLIC, "/logo.svg"),
    frame: false,
    height: 500,
    width: 500,
    minHeight: 500,
    minWidth: 500,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Test active push message to Renderer-process.
  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString());
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, "index.html"));
  }

  // re sizeable

  ipcMain.on("resize-false", () => {
    win?.setResizable(false);
    win?.setMinimumSize(500, 500);
  });

  ipcMain.on("resize-true", () => {
    win?.setResizable(true);
    win?.setMinimumSize(1000, 600);
  });

  // window size

  ipcMain.on("change-window-size-1000-600", () => {
    win?.setSize(1000, 600);
    win?.center();
  });

  ipcMain.on("change-window-size-500-500", () => {
    win?.setSize(500, 500);
    win?.center();
  });

  // navbar options

  ipcMain.on("minimize-window", () => {
    win?.minimize();
  });

  ipcMain.on("close-window", () => {
    app.quit();
  });

  ipcMain.on("maximize-window", () => {
    win?.maximize();
  });

  ipcMain.on("unmaximize-window", () => {
    win?.unmaximize();
  });

  ipcMain.on("toggle-window", () => {
    if (win?.isMaximized()) {
      win?.unmaximize();
    } else {
      win?.maximize();
    }
  });

  ipcMain.handle("get-window-maximized-state", () => {
    return win?.isMaximized();
  });
}

app.on("window-all-closed", () => {
  win = null;
});

app.whenReady().then(async () => {
  await startExpress();
  createWindow();
});
