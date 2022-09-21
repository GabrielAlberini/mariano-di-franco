import "./Home.css";
import { Layout } from "../../components/Layout/Layout";
import { Bio } from "../../components/Bio/Bio";
import { Actuacion } from "../../components/Actuacion/Actuacion";

const Home = () => {
  return (
    <Layout>
      <Bio />
      <Actuacion />
    </Layout>
  );
};

export { Home };
