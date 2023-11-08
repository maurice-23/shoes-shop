import React, { Component } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./shoes.css";
import { sliderSettings } from "../common";
import data from "../slider.json";
class Shoes extends Component {
  render() {
    return (
      <section className="r-container">
        <div className="head">
          <span className="top">Best choises</span>
          <br />
          <span className="btm">Popular brands</span>
        </div>
        <div className="rcontainer">
          <Swiper {...sliderSettings}>
            <SliderButtons />
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="rcont">
                  <div className="r-card">
                    <img src={card.image} alt="Home" height={100} />
                    <span className="r-price">
                      <span className="price">{card.price}</span>
                      <span> RWF</span>
                    </span>
                    <span className="r-name">{card.name}</span>
                    <span className="descr">{card.detail}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  }
}

export default Shoes;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
