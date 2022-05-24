import { useState } from 'react'
import anime from 'animejs'
import './App.css'

function App() {

  const [loadToggle, setLoadToggle] = useState(false)

  let loadingBar = () => {
    if (loadToggle){
      anime({
        targets:'.basicDiv',
        width:'0%',
        // easing: 'easeInOutQuad',
        easing:'steps(8)'

      })
      setLoadToggle(false)
    } else {
      anime({
        targets:'.basicDiv',
        width:'100%',
        easing: 'easeInOutQuad',
      })
      setLoadToggle(true)
    } 
  }
  

  return (
    <div>
      
      <div className="basicDiv">

      </div>

      <button onClick={loadingBar}>click for animation</button>
    </div>
  )
}

export default App
