import React from "react";
import BeyCard from './BeyCard'

const BeyContainer = ({ beys, handleClick }) => {

  const renderBeys = () => {
    return beys.map(bey => <BeyCard key={ bey.id } bey={ bey } handleClick={ handleClick }/>)
  }

  return (
    <div className="bey-container">
      <h1>BEYDEX</h1>
      { renderBeys() }
    </div>
  );

}

export default BeyContainer;