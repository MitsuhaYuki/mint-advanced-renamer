import { useState } from 'react'
import { version } from 'antd'
import { VERSION } from 'lodash'

function Versions(): JSX.Element {
  const [versions] = useState(window.electron.process.versions)

  return (
    <ul className="versions">
      <li className="electron-version">Electron v{versions.electron}</li>
      <li className="chrome-version">Chromium v{versions.chrome}</li>
      <li className="node-version">Node v{versions.node}</li>
      <li className="antd-version">AntD v{version}</li>
      <li className="lodash-version">lodash v{VERSION}</li>
    </ul>
  )
}

export default Versions
