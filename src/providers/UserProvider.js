import React, { useState } from "react"

export const UserContext = React.createContext();

const UserProvider = (props) => {
  const [state, setState] = useState({
    email: "mjsivertsen@msn.com",
    firstName: "Michaela",
    lastName: "Sivertsen",
    // avatar: <img class="ui avatar image" src="/images/wireframe/square-image.png" />
    updateUser: (user) => setState({ ...state, ...user}),
  });


  return (
    <UserContext.Provider value={{ ...state}}>
      {props.children}
    </UserContext.Provider>
  );

};

export default UserProvider;