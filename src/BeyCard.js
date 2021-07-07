import React from "react";

const BeyCard = ( { bey, handleClick } ) => {
  
  const beyClick = () => {
    handleClick(bey.id)
  }

  return (
    <div className="bey-card" onClick={beyClick}>
      <h3>{bey.name}</h3>
      <img src={bey.img} alt={bey.name}/>
    </div>
  );
};

export default BeyCard;
