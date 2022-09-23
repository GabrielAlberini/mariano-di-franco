import "./Docencia.css";
import marianoProfe from "../../assets/img/docencia/banner-docencia.jpg";

const Docencia = () => {
  return (
    <section className="cont-main-docencia">
      <h2>Docencia</h2>
      <div className="cont-banner-docencia">
        <img src={marianoProfe} alt="" />
      </div>
    </section>
  );
};

export { Docencia };
