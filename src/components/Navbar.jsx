import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => (
  <header className="nav">
    <ul>
      <li><NavLink to="/">Bookstore CMS</NavLink></li>
      <li><NavLink to="books">Books</NavLink></li>
      <li><NavLink to="categories">Categories</NavLink></li>
    </ul>
  </header>
);

export default Navbar;
