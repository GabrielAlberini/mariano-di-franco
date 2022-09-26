import "./Contacto.css";
import { Modal } from "react-bootstrap";
import {
  IconClose,
  IconInstagram,
  IconMail,
  IconTelefono,
} from "../Links/Links";
import logoContact from "../../assets/resources/logos/logo-contact.png";

function Contacto(props) {
  return (
    <Modal
      {...props}
      size="lg"
      centered
      dialogClassName="container-menu-hamburguesa"
    >
      <article className="cont-main-contact">
        <button
          type="button"
          class="btn-close btn-close-contacto"
          aria-label="Close"
          onClick={() => {
            props.setContacto(false);
          }}
        ></button>
        <div className="cont-img-contacto">
          <img src={logoContact} alt="" />
        </div>
        <div className="cont-txt-contact">
          <p>
            <IconTelefono />
            +54 9 3415 97-3486
          </p>
          <p>
            <IconInstagram /> @marianodifrancoartista
          </p>
          <p>
            <IconMail />
            clownmarianodifranco@gmail.com
          </p>
        </div>
      </article>
    </Modal>
  );
}

export { Contacto };
