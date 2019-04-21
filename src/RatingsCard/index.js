import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import StarRating from "../StarRating";

import "./styles.css";

// Calculate the tilt based on the cursor position on screen rather than the card
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];

// Apply values to transform property
const trans = (x, y, s) =>
  `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

// Flipping interpolation
const inverseOpacity = o => 1 - o;
const inverseTransform = t => `${t} rotateY(180deg)`;

export const RatingsCard = ({ image }) => {
  const [selected, setSelected] = useState(false);

  // Card shimmy
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1]
  }));

  // Flipping
  const { opacity, transform } = useSpring({
    config: {
      friction: 22,
      tension: 500
    },
    opacity: selected ? 1 : 0,
    transform: `rotateY(${selected ? 180 : 0}deg)`
  });

  return (
    <animated.div
      onClick={() => setSelected(!selected)}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      className="RatingsCard"
      style={{ transform: !selected && props.xys.interpolate(trans) }}
    >
      <animated.div
        className="RatingsCard__front"
        style={{
          backgroundImage: `url(${image})`,
          opacity: opacity.interpolate(inverseOpacity),
          transform
        }}
      />
      <animated.div
        className="RatingsCard__back"
        style={{
          opacity,
          transform: transform.interpolate(inverseTransform)
        }}
      >
        {selected && <StarRating />}
      </animated.div>
    </animated.div>
  );
};

export default RatingsCard;
