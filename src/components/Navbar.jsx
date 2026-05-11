import { NavLink } from "react-router-dom";


function Navbar(){
    return (
        <nav className="navbar">
            <NavLink className="navbar__link" to="/" end>
                Inicio
            </NavLink>

            <NavLink className="navbar__link" to="/education">
                Estudios
            </NavLink>

            <NavLink className="navbar__link" to="/experience">
                Experiencia
            </NavLink>

            <NavLink className="navbar__link" to="/skills">
                Habilidades
            </NavLink>

            <NavLink className="navbar__link" to="/contact">
                Contacto
            </NavLink>
      
        </nav>
    )       
}

export default Navbar