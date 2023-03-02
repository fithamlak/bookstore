import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => (
  <header className="nav">
    <ul>
      <li><NavLink to="/" className="link">Bookstore CMS</NavLink></li>
      <li><NavLink to="books" className="link">Books</NavLink></li>
      <li><NavLink to="categories" className="link">Categories</NavLink></li>
    </ul>
  </header>
);

export default Navbar;
