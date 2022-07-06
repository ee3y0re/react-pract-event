import React from "react";
import CarouselItem from "./CarouselItem";
import "./Carousel.css";

const Carousel = ({ allFilms }) => {
  return (
    <div className="carousel">
      <div className="inner">
      {/* <div className="inner" style={{ transform: "translateX(-0%)" }}>*/}
        {
          allFilms?.map((film) => {
            return (
              <CarouselItem 
                key={film.title}
                film={film}
              />
            )
          })
        }

        {/* static list, now need to turn into carousel */}
        {/* <ul>
          {
            allFilms?.map((film) => {
              return (
                <li
                  key={film.id}
                  className="film-info"
                >
                  <h1>{film.title}</h1>
                  <img src={film.image} alt={film.title} />
                </li>
              )
            })
          }
        </ul> */}
        {/* <ul className="carousel-item-list">
          {
            allFilms?.map((film) => {
              return (
                <CarouselItem
                  key={film.id}
                  film={film}
                />
              )
            })
          }
        </ul> */}
      </div>
    </div>
  )
}

export default Carousel;