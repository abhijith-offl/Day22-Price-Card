import React from "react"
import Card from "./components/card"
import './App.css'
import Card2 from "./components/card2"
import Card3 from "./components/card3"

const App = () => {
  return(
   <div className="card-content">
    <Card />
   <Card2 />
   <Card3 />
   </div>
  )
}

export default App