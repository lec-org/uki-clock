import { BrowserWindow, ipcMain } from 'electron'

ipcMain.handle('reset-window', (event) => {
  const win = BrowserWindow.fromWebContents(event.sender)

  win?.setSize(900, 670)
})
