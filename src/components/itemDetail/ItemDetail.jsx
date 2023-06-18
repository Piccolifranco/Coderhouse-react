import { React, useContext, useState } from 'react'
import ItemCount from './../Item/ItemCount'
import { carritoContext } from '../../context/carritoContext'

const ItemDetail = ({ item }) => {
  const [cartItemQuantity, setCartItemQuantity] = useState(0)
  const { addProduct } = useContext(carritoContext)

  const handleQuantity = (quantity) => {
    setCartItemQuantity(quantity)

    const newItem = { ...item, quantity }
    addProduct(newItem, quantity)
  }
  return (
    <div className=' w-[600px] h-[800px] flex flex-col justify-between mx-auto shadow-lg rounded-lg overflow-hidden bg-slate-200'>
      <img src={item.image} alt={item.title} className='w-full h-96 object-cover' />
      <div className='p-4'>
        <h2 className='text-3xl font-bold'>{item.title}</h2>
        <p className='text-gray-500 text-md'>{item.description}</p>
        <p className='text-gray-500'>${item.price}</p>
        <p className='text-gray-500'>Stock: {item.stock}</p>
        <ItemCount inicial={1} stock={item.stock} addItem={handleQuantity} />
      </div>

    </div>
  )
}

export default ItemDetail
