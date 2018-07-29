const {app, BrowserWindow} = require('electron')

  
function createWindow () {
  win = new BrowserWindow({titleBarStyle: 'hidden'})
  win.maximize()

  // and load the index.html of the app.
  win.loadFile('public/index.html')

  // Dereference the window object
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})
