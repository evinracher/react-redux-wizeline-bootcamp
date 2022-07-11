import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../slices/userSlice";
import { Button, Main } from "../styles/globalStyles";
import { Error, Form, Input } from "../styles/pages/Login.styles";

export const Login = () => {
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const result = useSelector(selectUser);

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
        <Input
          id="username"
          name="username"
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <Input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
        />
        <Button type="submit">Login</Button>
        <Error>{result.error}</Error>
      </Form>
    </Main>
  );
};
