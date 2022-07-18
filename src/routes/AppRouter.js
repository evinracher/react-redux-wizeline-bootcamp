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
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../slices/userSlice";
import { Orders } from "../pages/Orders";
import { useEffect } from "react";
import { setOrders } from "../slices/cartSlice";

export const AppRouter = () => {
  const { username } = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const user = localStorage.getItem("user");
    const orders = localStorage.getItem("orders");
    if (user) {
      dispatch(setUser(JSON.parse(user)));
    }
    if (orders) {
      dispatch(setOrders(JSON.parse(orders)));
    }
  }, [dispatch]);

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
        <Route path="/orders">
          {username ? <Orders /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          {username ? <Redirect to="/products" /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
};
