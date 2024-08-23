import React, { useContext } from 'react'
import { ShopContext } from '../content/ShopContext'
import Title from '../components/Title';

const Orders = () => {

  const { products, currency} = useContext(ShopContext);

  return (
    <div>

        <div>
          <Title text1={'MY'} text2={'ORDERS'}/>
        </div>

        <div>
          {
           products.map((item,index) => (
            <diV key={index}>
              <div>
                <img src={item.image[0]} alt="" />
                <div>
                  <p>{item.name}</p>
                </div>
              </div>
            </diV>
           ))
          }
        </div>

    </div>
  )
}

export default Orders