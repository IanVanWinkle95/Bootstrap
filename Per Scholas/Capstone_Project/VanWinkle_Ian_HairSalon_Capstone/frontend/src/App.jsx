import "./App.css"
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from './pages/About';
import { Contact } from './pages/contact';
import { Services } from './pages/Services';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </>
  )
}

export default App