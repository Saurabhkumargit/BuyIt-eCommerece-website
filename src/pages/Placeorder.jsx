import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal'; 
import { assets } from '../assets/assets';
import { ShopContext } from '../content/ShopContext';

const Placeorder = () => {

  const [method, setMethod] = useState('cod');

  const {navigate} = useContext(ShopContext);

  return (
    <div>
      <div className='text-xl my-3'>
        <Title text1={'DELIVERY'} text2={'INFORMATION'} />
      </div>
      <div className='flex gap-3'>
        <input className='border border-gray-300' type="text" placeholder='First name' />
        <input className='border border-gray-300' type="text" placeholder='Last name' />
      </div>
      <input className='border border-gray-300' type="text" placeholder='Email' />
      <div className='flex gap-3'>
        <input className='border border-gray-300' type="text" placeholder='Address' />
        <input className='border border-gray-300' type="text" placeholder='State' />
      </div>
      <div>
        <div>
          <CartTotal />  
        </div>

        <div>
          <Title text1={'PAYMENT'} text2={'METHOD'}/>
        </div>

        <div className='flex gap-3 flex-col items-end cursor-pointer'>
          <div onClick={() => setMethod('stripe')}>
            <p className={`${method=== 'stripe' ? 'bg-green-400' : ''}`}></p>
            <img src={assets.stripe_logo} alt="" />
          </div>
          <div onClick={() => setMethod('razorpay')}>
            <p className={`${method=== 'stripe' ? 'bg-green-400' : ''}`}></p>
            <img src={assets.razorpay_logo} alt="" />
          </div>
          <div onClick={() => setMethod('cod')}>
            <p className={`${method=== 'cod' ? 'bg-green-400' : ''}`}></p>
            <p>CASH ON DELIVERY</p>
          </div>
        </div>

        <div className='w-full text-end'>
          <button onClick={()=>navigate('/orders')} className='bg-black text-white px-10 py-5'>PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
};

export default Placeorder;
