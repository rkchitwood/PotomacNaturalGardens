import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Gallery from './Gallery'


function App() {

  return (
    <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
  )
}

export default App
