import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
  return ReactDOM.createPortal (
      <h1>Portal Demoo</h1>,
      document.getElementById('portal-root')  //"portal-root" is created in index.html file
  )
}

export default PortalDemo