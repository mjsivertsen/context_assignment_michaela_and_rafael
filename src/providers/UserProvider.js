import React, { useState } from "react"

export const UserContext = React.createContext();

const UserProvider = (props) => {
  const [state, setState] = useState({
    email: "mjsivertsen@msn.com",
    firstName: "Michaela",
    lastName: "Sivertsen",
    phone: "801-865-1119",
    avatar: <img class="ui mini circular image" src="https://m.media-amazon.com/images/I/41RORFSdPrL._AC_SS450_.jpg" />,
    updateUser: (user) => setState({ ...state, ...user}),
  });

  return (
    <UserContext.Provider value={{ ...state}}>
      {props.children}
    </UserContext.Provider>
  );

};

export default UserProvider;