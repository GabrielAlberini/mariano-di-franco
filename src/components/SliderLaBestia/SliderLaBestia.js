import "./SliderLaBestia.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import logoBestia from "../../assets/resources/logos/logo-bestia.png";
import bestia1 from "../../assets/img/la-bestia/01.jpg";
import bestia2 from "../../assets/img/la-bestia/02.jpg";
import bestia3 from "../../assets/img/la-bestia/03.jpg";
import bestia4 from "../../assets/img/la-bestia/04.jpg";
import bestia5 from "../../assets/img/la-bestia/05.jpg";
import bestia6 from "../../assets/img/la-bestia/06.jpg";
import bestia7 from "../../assets/img/la-bestia/07.jpg";
import bestia8 from "../../assets/img/la-bestia/08.jpg";
import bestia9 from "../../assets/img/la-bestia/09.jpg";
import bestia10 from "../../assets/img/la-bestia/10.jpg";

const SliderLaBestia = () => {
  return (
    <section className="cont-main-sliderLaBestia">
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
        <div class="item">
          <img src={bestia1} alt="" />
        </div>
        <div class="item item-logo-bestia">
          <img src={logoBestia} alt="" />
        </div>
        <div class="item">
          <img src={bestia2} alt="" />
        </div>
        <div class="item">
          <img src={bestia3} alt="" />
        </div>
        <div class="item">
          <img src={bestia4} alt="" />
        </div>
        <div class="item">
          <img src={bestia5} alt="" />
        </div>
        <div class="item">
          <img src={bestia6} alt="" />
        </div>
        <div class="item">
          <img src={bestia7} alt="" />
        </div>
        <div class="item">
          <img src={bestia8} alt="" />
        </div>
        <div class="item">
          <img src={bestia9} alt="" />
        </div>
        <div class="item">
          <img src={bestia10} alt="" />
        </div>
      </OwlCarousel>
    </section>
  );
};

export { SliderLaBestia };
