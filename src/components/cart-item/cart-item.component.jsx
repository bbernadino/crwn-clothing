import React from 'react';

import {
  CartItemContainer,
  CartItemImg,
  ItemDetailsContainer,
  NameSpan
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImg src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <NameSpan>{name}</NameSpan>
      <span>{quantity} x ${price}</span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;