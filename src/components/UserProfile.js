import React from "react";
import UserProvider from "../providers/UserProvider";
import User from "./User";
import UserForm from "./UserForm";

const UserProfile = () => {
  return(
<>
  <User />
  <UserForm />
</>
  )
}

export default UserProfile