import "./Home.css";
import { Layout } from "../../components/Layout/Layout";
import { Bio } from "../../components/Bio/Bio";
import { SliderLaBestia } from "../../components/SliderLaBestia/SliderLaBestia";

const Home = () => {
  return (
    <Layout>
      <Bio />
      <SliderLaBestia />
    </Layout>
  );
};

export { Home };
