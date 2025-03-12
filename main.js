const { app, BrowserWindow, Menu, ipcMain, screen } = require("electron");

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 1000,
    x: 0,
    y: 0,
    resizable: true,
    fullscreen: true,
    fullscreenable: true,
    frame: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  Menu.setApplicationMenu(null);
  mainWindow.loadFile("index.html");
});

function criarNovaJanela(x, y) {
  const novaJanela = new BrowserWindow({
    x: x,
    y: y,
    width: 200,
    height: 200,
    resizable: false,
    frame: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  novaJanela.loadFile("index.html");
}

app.on("window-all-closed", () => {
  app.quit();
});

let x = 0;
let y = 0;

setInterval(() => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  if (x >= width) {
    x = 0;
    y += 200;
  } else {
    x += 200;
  }
  criarNovaJanela(x, y);
}, 50);
