import { useState, useEffect } from 'react'
import * as d3 from 'd3'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Charts from './Charts/Charts'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect( () => {
    const dataURL = "/api/hosted-data/apis/front_end_frameworks.json"
    d3.json(dataURL).then(data => {
      setData(data);
      setLoading(false);
    })
  }, []);

  return (
    <>
    {loading && <div className="loading">Loading...</div>}
    {!loading && <Charts />}
    </>
  )
}

export default App
