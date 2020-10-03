
import React from "react"
import "./style.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "./helpers/AnimationRevealPage"
import Hero from "./components/hero/TwoColumnWithInput"
import ThreeColWithSideImage  from "./components/features/ThreeColWithSideImage" 




function App() {
  return (
    <AnimationRevealPage disabled>
      <Hero />
      <ThreeColWithSideImage />
    </AnimationRevealPage>
  )
}

export default App

