import React, { useMemo } from "react";
import {
  CartContainer,
  CartListContainer,
  Item,
  ProductDetails,
  ProductImage,
  ProductQuantity,
  RemoveBtn,
  Summary,
} from "../styles/components/CartList.styles";
import { Button } from "../styles/globalStyles";

export const CartList = ({ items }) => {
  const total = useMemo(
    () => items.reduce((acum, curr) => acum + curr.price * curr.quantity, 0),
    [items]
  );
  return (
    <CartContainer>
      <CartListContainer>
        <h3>Shopping cart</h3>
        <hr />
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
            {items.map((item) => (
              <Item key={item.id}>
                <ProductDetails>
                  <ProductImage
                    src={item.images[0]}
                    alt={item.name}
                  ></ProductImage>
                  <div>
                    <p>{item.name}</p>
                    <p>Product code: {item.id}</p>
                  </div>
                </ProductDetails>
                <td>
                  <ProductQuantity>
                    <input
                      type="number"
                      value={item.quantity}
                      label="quantity"
                      readOnly
                    ></input>
                    <RemoveBtn>X</RemoveBtn>
                  </ProductQuantity>
                </td>
                <td>{item.price}</td>
                <td>{item.price * item.quantity}</td>
              </Item>
            ))}
          </tbody>
        </table>
      </CartListContainer>
      <Summary>
        <h3>Summary</h3>
        <hr />
        <p>Items: {items.length}</p>
        <p>Total cost: ${total}</p>
        <Button>Checkout</Button>
      </Summary>
    </CartContainer>
  );
};
