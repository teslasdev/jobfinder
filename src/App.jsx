import { useState } from 'react'
import './index.css'
import Header from './Header'
import Layout from './Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen'>
      <Header/>
      <Layout />
    </div>
  )
}

export default App
