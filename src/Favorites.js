import React from "react";
import BeyCard from './BeyCard'

const Favorites = ({ beys, handleClick }) =>  {

  const renderBeys = () => {
    return beys.map(bey => <BeyCard key={ bey.id } bey={ bey } handleClick={ handleClick }/>)
  }

  return (
    <div className="favorites">
      <h1>BEYVORITES</h1>
      { renderBeys() }
    </div>
  );
  
}

export default Favorites;