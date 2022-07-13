import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Products } from "../pages/Products";
import { Cart } from "../pages/Cart";
import { Home } from "../pages/Home";
import { Header } from "../components/Header";
import { Login } from "../pages/Login";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";

export const AppRouter = () => {
  const { username } = useSelector(selectUser);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          {username ? <Products /> : <Redirect to="/login" />}
        </Route>
        <Route path="/cart">
          {username ? <Cart /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          {username ? <Redirect to="/products" /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
};
