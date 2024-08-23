import React, { useContext } from 'react';
import { ShopContext } from '../content/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const TOP = 'BEST';
const BUYS = 'SELLERS';

const Collection = () => {
    const { products } = useContext(ShopContext);

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={TOP} text2={BUYS} />
            </div>
            <div className='grid grid-cols-2'>
                {products.map((item) => (
                    <ProductItem
                        key={item._id}
                        id={item._id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default Collection;
