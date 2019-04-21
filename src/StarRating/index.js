import React from "react";
import { useTrail, animated } from "react-spring";
import Star from "../Star";

import "./styles.css";

export const StarRating = ({ rating, setRating }) => {
  const AnimatedStar = animated(Star);

  const animatedStars = useTrail(5, {
    config: {
      friction: 22,
      tension: 500
    },
    from: { opacity: 0, transform: "scale(0.8)" },
    opacity: 1,
    transform: "scale(1)"
  });

  return (
    <div className="StarRating">
      {animatedStars.map((props, index) => (
        <AnimatedStar
          active={index + 1 <= rating}
          onClick={e => {
            e.stopPropagation();
            setRating(index + 1);
          }}
          key={index}
          style={{ ...props }}
        />
      ))}
    </div>
  );
};

export default StarRating;
