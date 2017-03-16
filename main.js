const electron = require('electron');
const {app, BrowserWindow} = electron;
const path = require('path');
const url = require('url');
//Server
require('./server');

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  // mainWindow.maximize();
  mainWindow.setMenu(null);
  // mainWindow.loadURL(url.format({
  //   pathname: path.join(__dirname, 'views', 'index.hbs'),
  //   protocol: 'file:',
  //   slashes: true
  // }));
    mainWindow.loadURL('http://localhost:8080');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    mainWindow = null
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
});
