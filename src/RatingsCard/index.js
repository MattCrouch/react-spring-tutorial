import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./styles.css";

export const RatingsCard = ({ image }) => {
  const [selected, setSelected] = useState(false);

  const props = useSpring({
    opacity: selected ? 1 : 0,
    transform: `rotateY(${selected ? 180 : 0}deg)`
  });

  return (
    <div onClick={() => setSelected(!selected)} className="RatingsCard">
      <animated.div
        className="RatingsCard__front"
        style={{
          backgroundImage: `url(${image})`,
          opacity: props.opacity.interpolate(o => 1 - o),
          transform: props.transform
        }}
      />
      <animated.div
        className="RatingsCard__back"
        style={{
          opacity: props.opacity,
          transform: props.transform.interpolate(t => `${t} rotateY(180deg)`)
        }}
      >
        BACK
      </animated.div>
    </div>
  );
};

export default RatingsCard;
