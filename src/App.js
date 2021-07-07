import React, { useState, useEffect } from "react";
import "./App.css";
import BeyContainer from "./BeyContainer";
import Favorites from "./Favorites";

const App = () => {
  const [beys, setBeys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/beys`)
      .then((respect) => respect.json())
      .then((data) => setBeys(data));
  }, [] );
  
  const handleClick = (beyId) => {
    console.log( 'is it working?!?!?!?!', beyId );

    const updateBeys = beys.map( ( bey ) => {
      if ( bey.id === beyId ){
        return {
          ...bey,
          favorite: !bey.favorite
        } 
      } else {
        return bey
      }
    } )
    setBeys(updateBeys)
  }

  const filterBeys = () => beys.filter(bey => bey.favorite === true)

  return (
    <div className="main-container">
      <BeyContainer beys={ beys } handleClick={ handleClick } />
      <Favorites filterBeys = { filterBeys() } handleClick = { handleClick }/>
    </div>
  );
};

export default App;
