import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../content/ShopContext';

const Product = () => {
    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(null);
    const [selectedImage, setSelectedImage] = useState('');

    const fetchProductData = () => {
        console.log('Fetching product data...');
        const product = products.find(item => item._id === productId);
        console.log('Product found:', product);
        setProductData(product || null);
        if (product && product.image && product.image.length > 0) {
            setSelectedImage(product.image[0]);
        } else {
            console.error('No images available or productData.image is undefined');
        }
    };

    useEffect(() => {
        fetchProductData();
    }, [productId, products]);

    return productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500'>
            {/* Product Data */}
            <div className='flex gap-12'>
                {/* Product Images */}
                <div className='flex-1 flex flex-col-reverse gap-3'>
                    <div className='flex overflow-x-auto justify-between'>
                        {productData.image && productData.image.length > 0 ? (
                            productData.image.map((item, index) => (
                                <img
                                    src={item}
                                    key={index}
                                    className='w-[24%] flex-shrink-0 cursor-pointer'
                                    alt={productData.name}
                                    onClick={() => setSelectedImage(item)}
                                />
                            ))
                        ) : (
                            <div>No images available</div>
                        )}
                    </div>
                    <div className='w-full'>
                        {selectedImage ? (
                            <img className='w-full h-auto' src={selectedImage} alt={productData.name} />
                        ) : (
                            <div>No image selected</div>
                        )}
                    </div>
                </div>

                {/* Product Info */}
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                    <p className='mt-5 text-3xl font-medium'>
                        {currency}{productData.price.toFixed(2)}
                    </p>
                    <p className='mt-3'>{productData.description}</p>
                    <button onClick={()=>addToCart(productData._id)} className='bg-black text-white px-8 py-3 text-sm mt-5 active:bg-gray-700'>
                        ADD TO CART
                    </button>
                </div>
            </div>

            {/* Reviews Section */}
            <div className='mt-20'>
                <div className='flex'>
                    <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
                </div>
                <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odio illo, ex repudiandae nihil in vitae est corporis deleniti quibusdam adipisci incidunt quam architecto sit fugiat commodi accusamus excepturi modi. Corporis </p>
                </div>
            </div>
        </div>
    ) : (
        <div className='opacity-0'></div>
    );
};

export default Product;
