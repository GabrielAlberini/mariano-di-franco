import "./Convocatorias.css";
import { CONVOCATORIAS } from "../../services";

const Convocatorias = () => {
  return (
    <>
      <section className="cont-main-conv">
        <h2>Convocatorias donde ha sido seleccionado</h2>
        <div className="cont-list-festivales custom-fest">
          <ul>
            {CONVOCATORIAS.map((date) => {
              const { id, festival } = date;
              return (
                <li key={id} className="li-festival">
                  <div className="cont-circulito"></div>
                  <p>{festival}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export { Convocatorias };
