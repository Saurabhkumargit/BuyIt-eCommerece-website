import React, { useContext } from 'react';
import { ShopContext } from '../content/ShopContext';
import Title from '../components/Title'; // Ensure this import path is correct

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className='mx-10'>
      <div>
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>

      <div>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency} {getCartAmount()}</p>
        </div>
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>{currency} {delivery_fee}.00</p>
        </div>
        <div className='flex justify-between'>
          <b>Total</b>
          <b>{currency} {getCartAmount() + delivery_fee}.00</b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
