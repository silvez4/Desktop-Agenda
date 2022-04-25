const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

let win

function createWindow() {
  win = new BrowserWindow({
    width: 600,
    height: 600
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'views', 'app.html'),
    protocol: 'file',
    slashes: true
  }))

  win.webContents.openDevTools()
}

app.on('ready', createWindow)