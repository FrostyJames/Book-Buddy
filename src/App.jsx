
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Submit from './pages/Library';
import './App.css'; 


function App() {
  
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/Library" element={<Submit />} />
      </Routes>

    </>
  )
}

export default App;

