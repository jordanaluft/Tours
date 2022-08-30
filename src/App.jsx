import Tours from "./components/Tours"
import { useState, useEffect } from "react"
import './App.css'

const URL = "https://course-api.com/react-tours-project"

function App() {
  const [tours, setTours] = useState([])

  const fetchData = async () => {
    const response = await fetch(URL)
    const tours = await response.json()
    setTours(tours)
    return console.log(tours)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <span className="title">Our Tours</span>
      <div className='underline'></div>
      <Tours tours={tours}/>
    </div>
  )
}

export default App
