import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [frontImg, setFrontImg] = useState(true)

  const { hp, id , name, sprites } = pokemon
  const { front, back } = sprites

  function handleClick() {
    setFrontImg(!frontImg)
  }
  
  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={frontImg ? front : back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
