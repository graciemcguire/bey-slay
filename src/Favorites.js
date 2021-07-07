import React from "react";
import BeyCard from "./BeyCard";

const Favorites = ({ filterBeys, handleClick }) => {
  console.log(filterBeys)
    return (
      <div className="favorites">
        <h1>BEYVORITES</h1>
        { filterBeys.map((favBey) => (
          <BeyCard favBey={favBey} key={favBey.id} handleClick={handleClick} />
        ))
        }
      </div>
    );

}

export default Favorites;
