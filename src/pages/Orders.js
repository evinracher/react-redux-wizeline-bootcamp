import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../slices/cartSlice";

export const Orders = () => {
  const { orders } = useSelector(selectCart);
  const latestOrder = orders.pop();

  return (
    <div>
      <h3>Order history</h3>
      <hr />
      {latestOrder ? (
        <>
          <h4>Latest order</h4>
          <p>Order id: {latestOrder.order}</p>
          <p>Date: {latestOrder.date}</p>
          <p>Total: {latestOrder.total}</p>
          <table>
            <thead>
              <tr>
                <th>Product details</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item) => (
                <tr key={item.id}>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p>You haven't done any order yet.</p>
      )}
    </div>
  );
};
