import React from 'react'
import { Link } from 'react-router-dom'
import { BsCartPlus } from 'react-icons/bs'

export const Item = ({ item }) => {
  return (
    <div className='grid text-white bg-gray-600 rounded-md'>
      <div className='h-60 w-full flex justify-center items-center bg-white rounded-t-md'>
        <img className='h-60 rounded-md' src={item.image} alt='Imagen del producto' />
      </div>
      <div className='flex flex-col gap-6'>
        <h2 className=' text-m font-bold pl-4'>{item.title}</h2>
        <p className=' text-sm font-bold p-4'>Price: ${item.price}</p>
        <p className='text-sm p-4'> Quantity: {item.quantity}</p>
      </div>
      <div className='flex justify-center'>
        <button className='flex justify-center py-3 w-12 h-10 text-lg rounded-lg  bg-green-600'><BsCartPlus /></button>
      </div>
      <Link to={`/item/${item.id}`} className='text-blue-500 font-semibold'>Ver detalles</Link>
    </div>
  )
}
