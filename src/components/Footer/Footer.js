import "./Footer.css";
import logoRojo from "../../assets/resources/logos/ICONO-LOGO-06.png";
import manoRojaIzq from "../../assets/resources/tools/mano-izquierda-1.png";
import manoRojaDer from "../../assets/resources/tools/mano-izquierda-2.png";

const Footer = () => {
  return (
    <footer>
      <div className="cont-main-footer">
        <div className="manoIzq">
          <img src={manoRojaIzq} alt="" />
        </div>
        <div className="logo-footer">
          <img src={logoRojo} alt="" />
        </div>
        <div className="manoDer">
          <img src={manoRojaDer} alt="" />
        </div>
      </div>
      <h5>
        ©Copyright 2022 / Sitio desarrollado por{" "}
        <a
          href="https://gabrielalberini.com.ar"
          target="_blank"
          rel="noreferrer"
        >
          Gabriel Alberini
        </a>{" "}
        y{" "}
        <a href="https://natifessia.com.ar" target="_blank" rel="noreferrer">
          Nati Fessia.
        </a>
      </h5>
    </footer>
  );
};

export { Footer };
