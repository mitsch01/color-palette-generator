import React from "react"
import "../App.css"

function Instructions({ show, onClose }) {
  if (!show) return null // Don't render the modal if `show` is false

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <button className='close-button' onClick={onClose}>
          ✕
        </button>
        <p>
          Press <strong>SPACE</strong> to generate new colors
        </p>
        <p>Click on a lock icon to lock/unlock a color</p>
      </div>
    </div>
  )
}

export default Instructions
