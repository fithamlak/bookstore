import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import '../css/Navbar.css';

const Navbar = () => (
  <header className="nav">
    <ul>
      <li><NavLink to="/" className="app_logo">Bookstore CMS</NavLink></li>
      <li><NavLink to="books" className="link">Books</NavLink></li>
      <li><NavLink to="categories" className="link">Categories</NavLink></li>
    </ul>
    <div className="avator"><FaUser /></div>
  </header>
);

export default Navbar;
