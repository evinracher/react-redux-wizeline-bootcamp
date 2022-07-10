import React, { useMemo } from "react";
import {
  CartContainer,
  CartListContainer,
  Item,
  ProductDetails,
  ProductImage,
  ProductQuantity,
} from "../styles/components/CartList.styles";

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
                <ProductQuantity>
                  <input
                    type="number"
                    value={item.quantity}
                    label="quantity"
                    readOnly
                  ></input>
                  <button>X</button>
                </ProductQuantity>
                <td>{item.price}</td>
                <td>{item.price * item.quantity}</td>
              </Item>
            ))}
          </tbody>
        </table>
      </CartListContainer>
      <div>
        <h3>Summary</h3>
        <hr />
        <p>Items: {items.length}</p>
        <p>Total cost: ${total}</p>
        <button>Checkout</button>
      </div>
    </CartContainer>
  );
};
