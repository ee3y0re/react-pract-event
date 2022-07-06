/*
carousel
  understand structure
    show only one item at a time - overflow hidden
    list of items - ul and li elements
    way of moving items around - event handler on arrows and translate property
  components
    carousel parent for controlling which item to display using state and idx
    carousel item for individual images to display, iterate through
  add styling

Countdown
  decrement time as date approaches
  maybe adaptive to timezones

Guest lineup
  rending horizontal list of pictures and descriptions

Video trailer

Vertical ist of links on how to get involved

Horizontal list of district links

Section for advertising

Section for trip planning

FAQs link

Footer

*/
import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "./Carousel/Carousel";

const filmApi = "https://ghibliapi.herokuapp.com/films"

function App() {
  const [ allFilms, setAllFilms ] = useState([])

  useEffect(() => {
    axios.get(filmApi)
      .then((films) => setAllFilms(films.data));
  }, [])


  return (
    <div className="App">
      <h1>Crunchyroll EXPO 2022</h1>
      <ul>
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
      </ul>
      <Carousel/>
    </div>
  );
}

export default App;
