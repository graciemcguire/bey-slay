import React from "react";
import BeyCard from "./BeyCard";

const BeyContainer = ({beys, handleClick}) =>  {

    return (
      <div className="bey-container">
        <h1>BEYDEX</h1>
        {beys.map( bey => (
          <BeyCard bey={bey} key={bey.id} handleClick={handleClick}/>
        ))}
      </div>
    );
  
}

export default BeyContainer;