import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Browse from './pages/Browse'; 
import library from './pages/Library';
import Library from './pages/Library';


function App() {
  
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/library" element={<Library/>} />
      </Routes>

    </>
  )
}

export default App
