import { useState } from 'react'
import './App.css'
import data from '../data.json'
import Header from './Header'

function App() {

  const [jsonData, setData] = useState(data)
  console.log(JSON.parse(jsonData), jsonData)

  return (
      <div className='h-full w-full bg-slate-700'>
        <Header />
        <h1>HELLO WORLD</h1>
      </div>
  )
}

export default App
