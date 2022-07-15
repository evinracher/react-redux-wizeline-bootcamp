import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { changeQuantity, order, removeFromCart } from "../slices/cartSlice";
import { Button, Item } from "../styles/globalStyles";
import {
  CartContainer,
  CartListContainer,
  ProductDetails,
  ProductImage,
  ProductQuantity,
  RemoveBtn,
  Summary,
  Table,
} from "../styles/components/CartList.styles";

export const CartList = ({ items }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const total = useMemo(
    () => items.reduce((acum, curr) => acum + curr.price * curr.quantity, 0),
    [items]
  );

  const handleQuantityChange =
    (id) =>
    ({ target: { value } }) => {
      dispatch(changeQuantity({ id, value }));
    };

  const handleRemove = (id) => () => {
    dispatch(removeFromCart(id));
  };

  const handleOrder = () => {
    dispatch(order({ items, total }));
    history.push("/orders");
  };

  return (
    <CartContainer>
      <div>
        <h3>Shopping cart</h3>
        <hr />
        <CartListContainer>
          {items.length ? (
            <Table>
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
                          onChange={handleQuantityChange(item.id)}
                        ></input>
                        <RemoveBtn onClick={handleRemove(item.id)}>X</RemoveBtn>
                      </ProductQuantity>
                    </td>
                    <td>{item.price}</td>
                    <td>{item.price * item.quantity}</td>
                  </Item>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>You haven't added any item to the cart.</p>
          )}
        </CartListContainer>
      </div>
      {!!items.length && (
        <Summary>
          <h3>Summary</h3>
          <hr />
          <p>Items: {items.length}</p>
          <p>Total cost: ${total}</p>
          <Button onClick={handleOrder}>Checkout</Button>
        </Summary>
      )}
    </CartContainer>
  );
};
