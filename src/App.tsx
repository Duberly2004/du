import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'

interface Props {}

function App(props: Props) {
  const {} = props

  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="home" element={<ProtectedRoute children={<Home/>}/>} />
      {/* <Route path="contacto" element={ <Contacto /> } /> */}
  </Routes>
  )    
}

export default App
