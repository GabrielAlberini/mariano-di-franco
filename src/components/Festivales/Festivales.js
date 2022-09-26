import "./Festivales.css";
import rayito from "../../assets/resources/tools/rayo.png";
import { FESTIVALES } from "../../services";

const Festivales = () => {
  return (
    <>
      <section id="festivales" className="cont-main-festivales">
        <h2>Festivales donde ha participado</h2>
        <div className="cont-list-festivales">
          <ul>
            {FESTIVALES.map((date) => {
              const { id, festival, lugar } = date;
              return (
                <li key={id}>
                  <div className="cont-rayito">
                    <img src={rayito} alt="" />
                  </div>
                  <p>
                    {festival} - <span>({lugar})</span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export { Festivales };
