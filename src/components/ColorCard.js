import React from "react"
import { FontAwesomeIcon } from "@fontawesome/react-fontawesome"
import { faLock, faLockOpen } from "@fontawesome/free-solid-svg-icons"
import "../App.css"

function ColorCard({ color, toggleLock }) {
  return (
    <div className='color-card' style={{ backgroundColor: color.hex }}>
      <div className='color-info'>
        <p className='color-hex'>{color.hex.toUpperCase()}</p>
        <button onClick={toggleLock} className='lock-button'>
          <FontAwesomeIcon icon={color.locked ? faLock : faLockOpen} />
        </button>
      </div>
    </div>
  )
}

export default React.memo(ColorCard) // React.memo to prevent unnecessary re-renders
