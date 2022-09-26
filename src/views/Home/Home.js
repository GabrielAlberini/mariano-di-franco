import "./Home.css";
import { Layout } from "../../components/Layout/Layout";
import { ScrollButton } from "../../components/BotonArriba/BotonArriba";
import { Bio } from "../../components/Bio/Bio";
import { Actuacion } from "../../components/Actuacion/Actuacion";
import { Direccion } from "../../components/Direccion/Direccion";
import { Docencia } from "../../components/Docencia/Docencia";
import { Festivales } from "../../components/Festivales/Festivales";
import { Convocatorias } from "../../components/Convocatorias/Convocatorias";

const Home = () => {
  return (
    <Layout>
      <ScrollButton />
      <Bio />
      <Actuacion />
      <Direccion />
      <Docencia />
      <Festivales />
      <Convocatorias />
    </Layout>
  );
};

export { Home };
