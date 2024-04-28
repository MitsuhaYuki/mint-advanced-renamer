import { useState } from 'react'
import { version } from 'antd'
import { VERSION } from 'lodash'
import './index.scss'

function Versions(): JSX.Element {
  const [versions] = useState(window.electron.process.versions)

  return (
    <ul className="versions">
      <li className="versions-item">Electron v{versions.electron}</li>
      <li className="versions-item">Chromium v{versions.chrome}</li>
      <li className="versions-item">Node v{versions.node}</li>
      <li className="versions-item">AntD v{version}</li>
      <li className="versions-item">lodash v{VERSION}</li>
    </ul>
  )
}

export default Versions
