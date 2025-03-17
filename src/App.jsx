import { useState } from 'react'
import './App.css'
/* import reactLogo from './assets/react.svg'
 */import SongCatalog from './componentes/SongCatalog'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <SongCatalog />
      </div>

  )
}

export default App
