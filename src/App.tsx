import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'


function App() {
  return (
    <Routes>
      <Route path="/" element={ < Home/> } />
      {/* <Route path="contacto" element={ <Contacto /> } /> */}
  </Routes>
  )    
}

export default App
