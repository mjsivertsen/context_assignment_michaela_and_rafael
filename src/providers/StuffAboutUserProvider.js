import React, { useState } from "react" 

export const StuffAboutUserContext = React.createContext();

const StuffAboutUserProvider = (props) => {
  const [state, setState] = useState({
    car: "Orange Subaru Crosstrek",
    favoriteFruit: "Sour Blueberries",
    currentlyWatching: "Grey's Anatomy",
    pets: "Tony and Persephone",
    updateStuffAboutUser: (StuffAboutUser) => setState({ ...state, ...StuffAboutUser}),
  });

  return( 
    <StuffAboutUserContext.Provider value={{...state}}>
      {props.children}
    </StuffAboutUserContext.Provider>
  );

};

export default StuffAboutUserProvider