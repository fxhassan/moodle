
import React from "react"
import "./style.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "./helpers/AnimationRevealPage"
import Hero from "./components/hero/TwoColumnWithInput"
import Features from "./components/features/ThreeColWithSideImage.js"



function App() {
  return (
    <AnimationRevealPage disabled>
      <Hero />
      <Features  />
    </AnimationRevealPage>
  )
}

export default App

