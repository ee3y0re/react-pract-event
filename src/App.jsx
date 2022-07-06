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
import React from "react";
import Carousel from "./Carousel/Carousel";

function App() {
  return (
    <div className="App">
      <aside>We are now in business</aside>
      <Carousel/>
    </div>
  );
}

export default App;