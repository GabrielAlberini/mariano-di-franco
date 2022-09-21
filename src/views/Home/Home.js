import "./Home.css";
import { Layout } from "../../components/Layout/Layout";
import { Bio } from "../../components/Bio/Bio";
import { SliderLaBestia } from "../../components/SliderLaBestia/SliderLaBestia";
import { DataLaBestia } from "../../components/DataLaBestia/DataLaBestia";
import { SliderLorenzo } from "../../components/SliderLorenzo/SliderLorenzo";
import { DataLorenzo } from "../../components/DataLorenzo/DataLorenzo";

const Home = () => {
  return (
    <Layout>
      <Bio />
      <SliderLaBestia />
      <DataLaBestia />
      <SliderLorenzo />
      <DataLorenzo />
    </Layout>
  );
};

export { Home };
