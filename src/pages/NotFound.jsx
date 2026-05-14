import { useEffect } from "react";
import { Link } from "react-router-dom";

function NotFound() {
  useEffect(() => {
    // Añade una clase al body cuando se monta el componente
    document.body.classList.add("page-404");
    // Limpia la clase al desmontar
    return () => {
      document.body.classList.remove("page-404");
    };
  }, []);

  return (
    <div className="not-found-container">
      <div className="postit-404" style={{ "--rotate": "-2deg" }}>
        <span className="error-code">404</span>
        <p className="error-message">
          ¡Ups! Esta página no es de mi currículum.
        </p>
        <p>{" "}</p>
        <Link to="/" className="back-home">
          ← Volver al inicio
        </Link>
        <div className="tape-decoration"></div>
      </div>
    </div>
  );
}

export default NotFound;
