import React, { useState } from "react";
import RatingsCard from "./RatingsCard";
import "./App.css";
import image from "./image.jpg";

const createImage = image => ({
  image,
  rating: Math.ceil(Math.random() * 5)
});

export const App = () => {
  const [cards] = useState([
    createImage(image),
    createImage(image),
    createImage(image)
  ]);

  return (
    <div className="App">
      {cards.map((card, index) => (
        <RatingsCard key={index} {...card} />
      ))}
    </div>
  );
};

export default App;
