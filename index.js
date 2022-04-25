const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

let win

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 800,

    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'views', 'app.html'),
    protocol: 'file',
    slashes: true
  }))

  win.webContents.openDevTools()
}

app.on('ready', createWindow)