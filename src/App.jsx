import { useState } from 'react'
import Header from './Components/Header'
import Meme from './Components/Meme'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Meme />
    
    </>
  )
}

export default App
