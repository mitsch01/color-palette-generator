import React, { useState, useEffect } from "react"
import ColorPalette from "./components/ColorPalette"
import Instructions from "./components/Instructions"
import "./App.css"

function App() {
  // State to hold the color palette
  const [colors, setColors] = useState(generatePalette())

  // State to control the visibility of the instructions modal
  const [showInstructions, setShowInstructions] = useState(true)

  useEffect(() => {
    // Function to handle the spacebar press event to regenerate the palette
    const handleSpacePress = event => {
      if (event.code === "Space") {
        event.preventDefault() // Prevent default spacebar action (scrolling)
        regeneratePalette() // Regenerate the palette
      }
    }

    // Add event listener for keydown events
    window.addEventListener("keydown", handleSpacePress)

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("keydown", handleSpacePress)
    }
  }, [colors]) // Effect runs when `colors` state changes

  // Function to regenerate the color palette
  const regeneratePalette = () => {
    setColors(prevColors => prevColors.map(color => (color.locked ? color : { hex: generateRandomColor(), locked: false })))
  }

  return (
    <div className='App'>
      {/* Color palette display */}
      <ColorPalette colors={colors} setColors={setColors} />

      {/* Instructions modal */}
      <Instructions show={showInstructions} onClose={() => setShowInstructions(false)} />
    </div>
  )
}

// Function to generate a random hex color code
function generateRandomColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  )
}

// Function to generate an initial color palette of 5 random colors
function generatePalette() {
  return Array.from({ length: 5 }, () => ({ hex: generateRandomColor(), locked: false }))
}

export default App
