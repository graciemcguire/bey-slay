import React from "react";

const BeyCard = ({ bey, handleClick }) => {

  return (
    <div className='bey-card' onClick={ () => handleClick(bey.id) }>
      <h3>{ bey.name }</h3>
      <img src={ bey.img } alt={ bey.name }/>
    </div>
  );
};

export default BeyCard;