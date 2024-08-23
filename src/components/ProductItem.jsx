import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../content/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image = [], name, price }) => {
    const { currency } = useContext(ShopContext);

    useEffect(() => {
        console.log('ProductItem Image:', image);
    }, [image]);

    if (!image || !Array.isArray(image) || image.length === 0) {
        return (
            <div className='text-gray-700'>
                <p>Image not available</p>
            </div>
        );
    }

    return (
        <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
            <div className='overflow-hidden'>
                <img className='hover:scale-110' src={image[0]} alt={name} />
            </div>
            <p>{name}</p>
            <p>{currency}{price}</p>
        </Link>
    );
};

export default ProductItem;
