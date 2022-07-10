import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../slices/userSlice";
import { Main } from "../styles/globalStyles";
import { Form } from "../styles/pages/Login.styles";

export const Login = () => {
  const [user, setUser] = useState();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(user));
  };

  return (
    <Main>
      <Form action="submit" onSubmit={handleSubmit}>
        <h2>Welcome to the WizeStore!</h2>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </Form>
    </Main>
  );
};
