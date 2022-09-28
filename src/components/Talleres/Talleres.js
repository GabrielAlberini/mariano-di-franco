import "./Talleres.css";
import logoRojo from "../../assets/resources/logos/cia-mariano.png";
import taller1 from "../../assets/img/talleres/1.jpg";
import taller2 from "../../assets/img/talleres/2.jpg";
import taller3 from "../../assets/img/talleres/3.jpg";
import taller4 from "../../assets/img/talleres/4.jpg";
import taller5 from "../../assets/img/talleres/5.jpg";
import taller6 from "../../assets/img/talleres/6.jpg";

const Talleres = () => {
  return (
    <>
      <section className="cont-main-talleres">
        <article>
          <div className="cont-imgs-talleres">
            <div>
              <img src={taller1} alt="" />
            </div>
            <div>
              <img src={taller2} alt="" />
            </div>
          </div>
          <div>
            <h3>Taller de clown</h3>
            <p>
              <span className="taller1-span1">
                Un trabajo sobre el ridículo y la propia estupidez
              </span>
              …”Un clown es alguien que quiere hacer creer que es muy
              importante. Pero básicamente es ridículo. Y está contento de
              serlo. No le da vergüenza. Es maravillosamente ridículo. Como Don
              Quijote”… <span className="cita">(Phillip Gaulier)</span>
            </p>
            <div className="txt-black-taller1">
              <p>
                A través de distintas “experiencias” se introducirá a quienes
                participen de este taller a descubrir las particularidades de
                este antiguo lenguaje, para poder así diferenciarlos de otros
                lenguajes escénicos.
              </p>
              <p>
                Una propuesta que está dirigida a quienes tengan la intención de
                conocer o potenciar su parte más cómica. Ese lugar que es muy
                parecido a nosotres mismes.
              </p>
              <h4>Objetivos: </h4>
              <ul>
                <li>
                  / Buscar lo ridículo y estúpido en nosotres para hacer reír a
                  los demás.
                </li>
                <li>
                  / Explorar el movimiento del cuerpo desde un lugar de placer y
                  respeto de las propias posibilidades.
                </li>
                <li>
                  / Propiciar un espacio de encuentro entre las personas donde
                  el jugar sea lo que las vincule.
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article className="cont-invertida-talleres taller-creacion">
          <div className="cont-imgs-talleres">
            <div>
              <img src={taller3} alt="" />
            </div>
            <div>
              <img src={taller4} alt="" />
            </div>
          </div>
          <div>
            <h3>Taller de creación</h3>
            <p>El impulso creador</p>
            <p className="cita-creacion">
              …”en una gota de agua se esconde todo el universo”…
              <span className="cita">(Jacques Lecoq)</span>
            </p>
            <p>
              Todo acto de creación artística nace de un impulso consciente o
              inconsciente de alguien que ha querido manifestarse de alguna
              manera.
            </p>
            <p>
              Comprender la complejidad del entramado que lo artesanal requiere
              ya es un arte en sí mismo.
            </p>
            <p>
              En este taller transitaremos en forma grupal distintos puntos de
              vista sobre la creación relacionada al trabajo escénico.
            </p>
            <div className="txt-black-taller1">
              <h4>Abordaremos: </h4>
              <ul>
                <li>Ejercicios de estimulación creativa.</li>
                <li>Ejercicios de composición.</li>
                <li>Ejercicios de diseño espacial.</li>
                <li>
                  Nuestras ideas con la intención de materializarlas o
                  profundizarlas.
                </li>
              </ul>
              <p>
                Un trabajo donde el dar y el recibir cobran un valor fundamental
                en el proceso de aprendizaje.
              </p>
            </div>
          </div>
        </article>
        <article>
          <div className="cont-imgs-talleres">
            <div>
              <img src={taller5} alt="" />
            </div>
            <div>
              <img src={taller6} alt="" />
            </div>
          </div>
          <div className="cont-txt-mascaras">
            <h3>Taller Intensivo máscaras </h3>
            <p className="cita-mascaras">“El juego Invisible”</p>
            <p className="cita-mascaras">
              …”Transitaremos por los desniveles de nuestra fragilidad para
              descubrirnos a nosotrxs mismxs y hacer de esto algo bello para
              compartir en la escena”...
              <span className="cita">(Phillip Gaulier)</span>
            </p>
            <p>
              Las máscaras serán utilizadas como herramientas pedagógicas para
              potenciar la conciencia de lo que se está haciendo en la escena y
              porque. Mediante la realización de consignas simples que generen
              acción.
            </p>
            <p>
              Abordaremos algunas de estas pautas en el juego individual y de
              dúo mediante improvisaciones y ejercicios técnicos.
            </p>
            <h4>Se utilizarán máscaras:</h4>
            <ul>
              <li>/ Neutras</li>
              <li>/ Primitivas</li>
              <li>/ De la comedia</li>
              <li>/ Expresivas</li>
            </ul>
            <div className="txt-black-taller1">
              <h4>Objetivos:</h4>
              <ul>
                <li>
                  / Que les participantes puedan vivenciar la experiencia de las
                  máscaras ampliando la conciencia de las posibilidades técnicas
                  que tienen en la escena.
                </li>
                <li>
                  / Transitar la experiencia del abordaje de la técnica para
                  posteriormente poder ponerlo en práctica en los ejercicios de
                  improvisación.
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>
      <div className="cont-logo-rojo">
        <img src={logoRojo} alt="" />
      </div>
    </>
  );
};

export { Talleres };
