import React from "react";

const CarouselItem = ({ film }) => {
  return (
    <div className="carousel-item">
      <h1>{film.title}</h1>
      <img src={film.image} alt={film.title} />
    </div>
  )
}

export default CarouselItem;