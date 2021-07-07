import React, { useState, useEffect } from "react";
import "./App.css";
import BeyContainer from './BeyContainer'
import Favorites from './Favorites'

const App = () => {

  const [beyonces, setBeyonces] = useState([])

  useEffect(()=> {
    fetch(`http://localhost:4000/beys`)
    .then(r => r.json())
    .then(data => setBeyonces(data))
  }, [])

  const handleClick = (beyId) => {
    const updateBey = beyonces.map((bey) => {
      if(bey.id === beyId){
        return { ...bey, favorite: !bey.favorite }
      } else {
        return bey
      }
    })
    setBeyonces(updateBey)
  }

  const favBey = () => beyonces.filter(beyonce => beyonce.favorite)

  return (
    <div className="main-container">
      <BeyContainer 
        beys={ beyonces } 
        handleClick={ handleClick }
      />
      <Favorites
        beys={ favBey() } 
        handleClick={ handleClick }
      />
    </div>
  );
};

export default App;
