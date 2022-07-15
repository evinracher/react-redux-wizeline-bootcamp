import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../slices/cartSlice";
import { Main } from "../styles/globalStyles";
import { Container, Data, Table } from "../styles/pages/Orders.styles";

export const Orders = () => {
  const { orders, loading } = useSelector(selectCart);
  const latestOrder = orders[orders.length - 1];
  const orderList = [...orders].reverse();

  const getDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString() + ", " + newDate.toLocaleTimeString();
  };

  const renderContent = () => {
    if (loading) {
      return <p>Loading</p>;
    }

    if (latestOrder) {
      return (
        <Data>
          <div>
            <h4>Your newest order is:</h4>
            <p>
              <b>Order id:</b> {latestOrder.order}
            </p>
            <p>
              <b>Date:</b> {getDate(latestOrder.date)}
            </p>
            <p>
              <b>Total:</b> ${latestOrder.total}
            </p>
          </div>
          <Table>
            <thead>
              <tr>
                <th>Order id</th>
                <th>Date</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((item) => (
                <tr key={item.order}>
                  <td>{item.order}</td>
                  <td>{getDate(item.date)}</td>
                  <td>${item.total}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Data>
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
