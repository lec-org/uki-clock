import { BrowserWindow, ipcMain } from 'electron'

ipcMain.handle('set-login-window', (event) => {
  console.log('set-login-win')
  const win = BrowserWindow.fromWebContents(event.sender)
  console.log(win)
  win?.setSize(300, 400)
})
