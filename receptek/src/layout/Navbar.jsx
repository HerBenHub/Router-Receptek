import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Főoldal</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/receptek">Listaoldal</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/admin">Admin</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Bejelentkezés</NavLink>
                </li>
            </ul>
        </nav>
    );
}