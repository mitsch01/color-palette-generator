import React from "react"
import ColorCard from "./ColorCard"
import "../App.css"

function ColorPalette({ colors, setColors }) {
  // Function to toggle lock state of a color
  const toggleLock = index => {
    setColors(colors.map((color, i) => (i === index ? { ...color, locked: !color.locked } : color)))
  }

  return (
    <div className='color-palette'>
      {colors.map((color, index) => (
        <ColorCard key={index} color={color} toggleLock={() => toggleLock(index)} />
      ))}
    </div>
  )
}

export default ColorPalette
