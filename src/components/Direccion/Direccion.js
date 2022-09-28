import "./Direccion.css";
import pinchesTop from "../../assets/resources/tools/pinches-abajo.png";
import rayito from "../../assets/resources/tools/rayo.png";
import logoAzul from "../../assets/resources/logos/ICONO-LOGO-07.png";
import grid1 from "../../assets/img/direccion/1.jpg";
import grid2 from "../../assets/img/direccion/2.jpg";
import grid3 from "../../assets/img/direccion/3.jpg";
import grid4 from "../../assets/img/direccion/4.jpg";
import grid5 from "../../assets/img/direccion/5.jpg";
import grid6 from "../../assets/img/direccion/6.jpg";
import grid7 from "../../assets/img/direccion/7.jpg";
import grid8 from "../../assets/img/direccion/8.jpg";
import grid9 from "../../assets/img/direccion/9.jpg";
import grid10 from "../../assets/img/direccion/10.jpg";

const Direccion = () => {
  return (
    <section id="direccion" className="cont-main-direction">
      <div className="cont-pinches-top-direccion">
        <img src={pinchesTop} alt="" />
      </div>
      <h2>Dirección</h2>
      <div className="cont-main-txt-direccion">
        <div>
          <p>
            <span>Mariano Di Franco</span> viene realizando el trabajo de
            dirección, asistencia técnica y creación de espectáculos de circo,
            teatro callejero, clown, magia y teatro cómico en Argentina, España
            y Bolivia.
          </p>
          <p>
            Algunos de estos trabajos han recibido nominaciones y premios en
            Europa y Argentina.
          </p>
          <p>
            El objetivo de esta propuesta es acompañar los procesos creativos
            respetando y potencializando el material que cada artista o compañía
            trae para compartir.
          </p>
        </div>
        <div className="rayito">
          <img src={rayito} alt="" />
        </div>
        <h3>Direcciones realizadas:</h3>
        <ul>
          <li>Cía. Intrépidos (Argentina/Europa)</li>
          <li>Ivan “Martillo” Boasso, (Argentina)</li>
          <li>Cía. Circortito, (España/Argentina)</li>
          <li>Liana Barrale, (Argentina)</li>
          <li>Alejandra Ibañez (México)</li>
          <li>Compañía Cartoncito (Argentina)</li>
          <li>Compañía Gato Blanco Gato Negro (Argentina)</li>
          <li>Cía. Circo Dueto (Argentina/Uruguay)</li>
          <li>Países Mágicos (Argentina)</li>
          <li>Cía. Pato Mojado (Argentina)</li>
          <li>Mago Ulises (Argentina)</li>
          <li>Andre Galeto (Argentina)</li>
          <li>Rulo Pisani (Argentina)</li>
          <li>Cia. Zapatos Rotos (Argentina)</li>
          <li>Mago Goio (País Vasco/España)</li>
          <li>Cia. La Tripulación Cósmica (Argentina)</li>
          <li>Pionono clown (Argentina)</li>
        </ul>
        <div className="rayito">
          <img src={rayito} alt="" />
        </div>
        <h3>Supervisiones técnica realizadas:</h3>
        <ul>
          <li>Cía. Mano a Mano (Argentina)</li>
          <li>Cía. Circortito (País Vasco/Argentina)</li>
          <li>Cía. Tutuka (Bolivia)</li>
          <li>Opera Clap (Argentina)</li>
          <li>Mago Taita (Argentina)</li>
          <li>Natalia Faundez (Chile)</li>
          <li>Cía. Altibajo (Argentina)</li>
          <li>Sandra Varela (Argentina)</li>
          <li>Payaso Nicolino (Argentina)</li>
          <li>Cirka Impulses (Argentina)</li>
          <li>Matildo clown (Argentina)</li>
        </ul>
      </div>
      <div class="cont-main-grid">
        <div
          class="grid-item item1"
          style={{
            backgroundImage: `url(${grid7})`,
          }}
        ></div>
        <div
          class="grid-item item2"
          style={{
            backgroundImage: `url(${grid9})`,
          }}
        ></div>
        <div
          class="grid-item item3"
          style={{
            backgroundImage: `url(${grid3})`,
          }}
        ></div>

        <div
          class="grid-item"
          style={{
            backgroundImage: `url(${grid2})`,
          }}
        ></div>
        <div
          class="grid-item"
          style={{
            backgroundImage: `url(${grid1})`,
          }}
        ></div>
        <div
          class="grid-item"
          style={{
            backgroundImage: `url(${grid4})`,
          }}
        ></div>
        <div
          class="grid-item gridU"
          style={{
            backgroundImage: `url(${grid10})`,
          }}
        ></div>
        <div
          class="grid-item"
          style={{
            backgroundImage: `url(${grid8})`,
          }}
        ></div>
        <div
          class="grid-item"
          style={{
            backgroundImage: `url(${grid5})`,
          }}
        ></div>
        <div
          class="grid-item"
          style={{
            backgroundImage: `url(${grid6})`,
          }}
        ></div>
      </div>
      <div className="logo-azul">
        <img src={logoAzul} alt="" />
      </div>
    </section>
  );
};

export { Direccion };
