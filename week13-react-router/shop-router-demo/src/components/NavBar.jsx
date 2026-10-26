import { NavLink } from 'react-router-dom';

export default function NavBar() {
    const linkClass = ({ isActive }) => (isActive ? 'active' : '');

    return (
        <nav className="nav-bar">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/products" className={linkClass}>Products</NavLink>
            <NavLink to="/cart" className={linkClass}>Cart</NavLink>
        </nav>
    );
}
