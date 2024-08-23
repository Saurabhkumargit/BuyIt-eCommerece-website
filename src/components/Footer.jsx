import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-14 my-10 mt-40 text-sm'>

        <div>
            <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi eos similique esse quos tenetur voluptatum consequuntur quo quisquam fugit illo quia quaerat, perspiciatis amet sit laudantium nemo est alias voluptas?</p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-0 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className='py-5 text-sm text-center'>Copyright 2024@ BuyIt - All Rights Reserved</p>
        </div>

    </div>
  )
}

export default Footer