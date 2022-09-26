import "./Docencia.css";
import marianoProfe from "../../assets/img/docencia/banner-docencia.jpg";
import { Talleres } from "../Talleres/Talleres";

const Docencia = () => {
  return (
    <section id="docencia" className="cont-main-docencia">
      <h2>Docencia</h2>
      <div className="cont-banner-docencia">
        <img src={marianoProfe} alt="" />
      </div>
      <Talleres />
    </section>
  );
};

export { Docencia };
