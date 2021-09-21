import React, { useState, useContext } from "react";
import { Form } from "semantic-ui-react";
import { UserContext } from "../providers/UserProvider";

const UserForm = () => {
  const { email, firstName, lastName, avatar, phone, updateUser } = useContext(UserContext);
  const [userData, setUserData] = useState({
    email: email,
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    avatar: avatar,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    updateUser(userData)
  }

  const changeHandler = (e, { name, value }) => {
    setUserData({...userData, [name]: value})
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Input
        label="New Email"
        type="text"
        name="email"
        value={userData.email}
        onChange={changeHandler}
        />

      <Form.Input
        label="New First Name"
        type="text"
        name="firstName"
        value={userData.firstName}
        onChange={changeHandler}
        />

      <Form.Input
        label="New Last Name"
        type="text"
        name="lastName"
        value={userData.lastName}
        onChange={changeHandler}
        />

      <Form.Input
        label="New Phone"
        type="text"
        name="phone"
        value={userData.phone}
        onChange={changeHandler}
        />

        <Form.Button color="black">Save</Form.Button>
        </Form>
  )
}

export default UserForm