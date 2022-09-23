import "./Bio.css";
import logoBio from "../../assets/resources/logos/logo-bio.png";
import manoAzul1 from "../../assets/resources/tools/mano-azul-1.png";
import manoAzul2 from "../../assets/resources/tools/mano-azul-2.png";
import pinchesTop from "../../assets/resources/tools/pinches-arriba.png";
import pinchesBottom from "../../assets/resources/tools/pinches-abajo.png";

const Bio = () => {
  return (
    <section className="cont-main-bio">
      <div className="cont-pinches-top">
        <img src={pinchesTop} alt="" />
      </div>
      <div className="cont-pinches-bottom">
        <img src={pinchesBottom} alt="" />
      </div>
      <div className="cont-logo-hands">
        <div className="cont-hands-bio">
          <img className="blue-hand1" src={manoAzul1} alt="" />
          <img className="blue-hand2" src={manoAzul2} alt="" />
        </div>
        <div className="cont-logo-bio">
          <img src={logoBio} alt="" />
        </div>
      </div>
      <div className="cont-txt-bio">
        <p>
          <h1>MARIANO DI FRANCO</h1>Es profesor egresado de la Escuela
          Provincial de Teatro y Títeres de la ciudad de Rosario.
        </p>{" "}
        <p>
          Se especializa en el clown y en el teatro con máscaras con maestras y
          maestros de renombre nacional e internacional como Gabriel Chame
          Buendía, Marina Barbera, Antón Valen, Adrian Giampani, Marcelo
          Savignone entre otres.
        </p>{" "}
        <p>
          Formó parte de compañías de teatro, circo, música y clown (Argentina,
          España y Bolivia). Viene desempeñándose como director en clown, magia,
          circo y teatro de calle. Recibió premios como actor, mago y director
          en Europa y Argentina.
        </p>{" "}
        <p>
          Ha dictado clases en la Escuela Municipal de Artes Urbanas y Escuela
          de Clown, ambas de Rosario. A su vez en convenciones de circo,
          escuelas de magia, centros culturales autogestivos, teatros y clases
          independientes.
        </p>{" "}
        <p>
          Fue seleccionado como un referente del circo de la provincia de Santa
          Fe para realizar la producción y montaje de la carpa de circo dentro
          del Festival Internacional de teatro de la ciudad de Rafaela
          (Argentina).
        </p>
        <p>
          Sus creaciones son “Lorenzo el Vampiro” y “El duende de la magia.”
        </p>
        <a
          className="link-yt"
          href="https://youtu.be/ZQldGpzoiYc"
          target="_blank"
          rel="noreferrer"
        >
          Las palabras de Mariano
        </a>
      </div>
    </section>
  );
};

export { Bio };
