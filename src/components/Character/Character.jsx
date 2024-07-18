import React, { useState } from "react";
import "./character.css";

const Character = ({ character }) => {
  const [rotate, setRotate] = useState(false);

  return (
    <div className="carts-div">
      <img
        className={rotate ? "rotate" : "image"}
        src={character.image}
        alt={character.name}
        onClick={() => setRotate(!rotate)}
      />
    </div>
  );
};

export default Character;
