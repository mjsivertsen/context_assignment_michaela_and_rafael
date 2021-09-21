import React, { useState } from "react" 

export const StuffAboutUserContext = React.createContext();

const StuffAboutUserProvider = () => {
  const [car, favoriteFruit, currentlyWatching, pets] = useState({
    car: {makeModel: "Subaru Crosstrek", color: "orange"},
    favoriteFruit: "sour blueberries",
    currentlyWatching: "Grey's Anatomy",
    pets: [{species: "cat", name: "Tony"}, {species: "cat", name: "Persephone"}],
    updateStuffAboutUser: (StuffAboutUser) => setState({ ...state, ...StuffAboutUser}),
  });

  return( 
    <StuffAboutUserContext value={{...state}}>
      {props.children}
    </StuffAboutUserContext>
  );

};

export default StuffAboutUserProvider