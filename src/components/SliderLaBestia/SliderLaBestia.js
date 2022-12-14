import "./SliderLaBestia.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { SLIDER_BESTIA } from "../../services";

const SliderLaBestia = () => {
  return (
    <>
      <section className="cont-main-slider">
        <OwlCarousel
          className="owl-theme"
          loop
          margin={20}
          autoplay
          dots={false}
          nav={false}
          responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 3,
            },
            1000: {
              items: 3,
            },
          }}
        >
          {SLIDER_BESTIA.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.img} alt={item.alt} />
            </div>
          ))}
        </OwlCarousel>
      </section>
    </>
  );
};

export { SliderLaBestia };
