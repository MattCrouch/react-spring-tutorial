import React, { useState } from "react";
import RatingsCard from "./RatingsCard";
import "./App.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";

// Generate random ratings for images
const createImage = image => ({
  image,
  rating: Math.ceil(Math.random() * 5)
});

export const App = () => {
  // Hold images
  const [cards] = useState([
    createImage(image1),
    createImage(image2),
    createImage(image3)
  ]);

  return (
    <div className="App">
      {/* Loop over images and display a card for each */}
      {cards.map((card, index) => (
        <RatingsCard key={index} {...card} />
      ))}
    </div>
  );
};

export default App;
