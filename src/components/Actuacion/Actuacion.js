import "./Actuacion.css";
import { SliderLaBestia } from "../../components/SliderLaBestia/SliderLaBestia";
import { DataLaBestia } from "../../components/DataLaBestia/DataLaBestia";
import { SliderLorenzo } from "../../components/SliderLorenzo/SliderLorenzo";
import { DataLorenzo } from "../../components/DataLorenzo/DataLorenzo";

const Actuacion = () => {
  return (
    <>
      <div className="cont-title-section">
        <h2>Actuación</h2>
      </div>
      <SliderLaBestia />
      <DataLaBestia />
      <SliderLorenzo />
      <DataLorenzo />
    </>
  );
};

export { Actuacion };
