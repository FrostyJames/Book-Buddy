import { Link } from 'react-router-dom';
import './NavBar.css'; 

function NavBar() {
  return (
    <nav className="navbar">
      <h1>📚 BookBuddy</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/browse">Browse</Link>
        <Link to="/library">library</Link>
      </div>
    </nav>
  );
}

export default NavBar;