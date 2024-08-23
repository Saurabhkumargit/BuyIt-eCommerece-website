import React, { useContext } from 'react'
import { ShopContext } from '../content/ShopContext'
import ProductItem from '../components/ProductItem';


const Store = () => {

  const {products, search, showSearch} = useContext(ShopContext)

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 pt-4">
        {filteredProducts.map((product) => (
          <ProductItem
            key={product._id}
            id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  )
}

export default Store