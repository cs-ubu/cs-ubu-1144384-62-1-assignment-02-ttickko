import { app, BrowserWindow } from 'electron'

let win: any = null

function createWindow() {
  win = new BrowserWindow({width: 500, height: 400})
  win.setTitle('CSUBU Lecturers')
  win.loadFile('index.html')
  win.on('closed', () => { win = null })
}

app.on('ready', () => {
    console.log('app นะ ready แล้วนะ');
    createWindow();
})

// สำหรับ macOS 
app.on('window-all-closed', function () {
  // ถ้าหน้าต่างทุกอันปิด
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// ถ้ากด icon ของ app ใหม่
app.on('activate', function () {
    console.log('เปิด activate แล้วนะ');
  if (win == null) {
    createWindow()
  }
})