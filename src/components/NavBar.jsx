import { Link } from 'react-router-dom';
import './NavBar.css'; 

function NavBar() {
  return (
    <nav className="navbar">
      <h1>📚 BookBuddy</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        
      </div>
    </nav>
  );
}


export default NavBar;