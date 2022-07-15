import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../slices/cartSlice";
import { Item, Main } from "../styles/globalStyles";
import { Container } from "../styles/pages/Orders.styles";

export const Orders = () => {
  const { orders, loading } = useSelector(selectCart);
  const orderList = [...orders];
  const latestOrder = orderList.pop();

  const renderContent = () => {
    if (loading) {
      return <p>Loading</p>;
    }

    if (latestOrder) {
      return (
        <>
          <h4>Your newest order is:</h4>
          <p>Order id: {latestOrder.order}</p>
          <p>Date: {latestOrder.date}</p>
          <p>Total: ${latestOrder.total}</p>
          <h4>Old orders:</h4>
          {!!orderList.length && (
            <table>
              <thead>
                <tr>
                  <th>Order id</th>
                  <th>Date</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {orderList.map((item) => (
                  <Item key={item.order}>
                    <td>{item.order}</td>
                    <td>{item.date}</td>
                    <td>${item.total}</td>
                  </Item>
                ))}
              </tbody>
            </table>
          )}
        </>
      );
    } else {
      return <p>You haven't done any order yet.</p>;
    }
  };

  return (
    <Main>
      <Container>
        <h3>Order history</h3>
        <hr />
        {renderContent()}
      </Container>
    </Main>
  );
};
