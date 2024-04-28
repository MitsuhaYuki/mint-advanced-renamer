import Versions from './components/versions'
import electronLogo from './assets/electron.svg'
import { Button } from 'antd'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div>
      <div className="text">
        Build an Electron app with <span className="react">React</span>
        &nbsp;and <span className="ts">TypeScript</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="actions">
        <div className="action">
          <Button type="primary" onClick={()=>window.open("https://electron-vite.org/")}>Documentation</Button>
        </div>
        <div className="action">
          <Button onClick={ipcHandle}>Send IPC</Button>
        </div>
      </div>
      <Versions></Versions>
    </>
  )
}

export default App
