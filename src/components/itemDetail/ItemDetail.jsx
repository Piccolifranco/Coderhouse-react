import React from 'react'
import ItemCount from './../Item/ItemCount'

const ItemDetail = ({ item }) => {
  return (
    <div className=' w-[600px] h-[800px] flex flex-col justify-between mx-auto shadow-lg rounded-lg overflow-hidden bg-slate-200'>
      <img src={item.image} alt={item.title} className='w-full h-96 object-cover' />
      <div className='p-4'>
        <h2 className='text-3xl font-bold'>{item.title}</h2>
        <p className='text-gray-500 text-md'>{item.description}</p>
        <p className='text-gray-500'>${item.price}</p>
        <p className='text-gray-500'>Cantidad: {item.quantity}</p>
        <ItemCount quantity={item.quantity} />
      </div>
    </div>
  )
}

export default ItemDetail
