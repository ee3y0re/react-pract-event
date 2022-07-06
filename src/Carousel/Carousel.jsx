import React, { useState } from "react";
import CarouselItem from "./CarouselItem";
import "./Carousel.css";

const Carousel = ({ allFilms }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const updateIdx = (newIdx) => {
    if (newIdx < 0) {
      // prevents carousel from going for values far beyond left bounds
      newIdx = 0;
      // relying on length of data prevents carousel from going far beyond right bounds
    } else if (newIdx >= allFilms.length) {
      newIdx = allFilms.length - 1;
    }

    setActiveIdx(newIdx);
  }

  return (
    <div className="carousel">
      {/* <div className="inner"> */}
      <div className="carousel-control">
        <button
          onClick={() => updateIdx(activeIdx - 1)}
        >Left</button>
        <button
          onClick={() => updateIdx(activeIdx + 1)}
        >Right</button>
      </div>
      <div 
        className="inner" 
        // not best practice
        //"translateX(-200%)"
        style={{ transform: `translateX(-${activeIdx * 100}%)` }}
      >
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