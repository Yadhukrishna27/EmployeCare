import './App.css'
import './bootstrap.min.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'


function App() {

  return (
    <>
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/home" element={<Home/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
