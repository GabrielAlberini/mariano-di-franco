import "./Home.css";
import { Layout } from "../../components/Layout/Layout";
import { Bio } from "../../components/Bio/Bio";
import { Actuacion } from "../../components/Actuacion/Actuacion";
import { Direccion } from "../../components/Direccion/Direccion";
import { Docencia } from "../../components/Docencia/Docencia";

const Home = () => {
  return (
    <Layout>
      <Bio />
      <Actuacion />
      <Direccion />
      <Docencia />
    </Layout>
  );
};

export { Home };
