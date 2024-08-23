import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../content/ShopContext";
import Title from "../components/Title"; // Ensure this is correctly imported
import binIcon from "../assets/bin_icon.png"; // Correctly import the image
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, removeFromCart, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      if (cartItems[items] > 0) {
        tempData.push({
          _id: items,
          quantity: cartItems[items],
        });
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div key={index} className="py-4">
              <div className="flex items-start gap-6">
                <img src={productData.image[0]} alt={productData.name} />
                <div>
                  <p>{productData.name}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button onClick={() => removeFromCart(item._id)}>
                    <img src={binIcon} alt="Remove" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-end my-20">
        <div>
          <CartTotal />
           <div className="w-full">
              <button onClick={()=>navigate('/place-order')} className="bg-black text-white my-8 px-8 py-3">PROCEED TO CHECKOUT</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
