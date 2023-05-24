import React from 'react'
import { RxCross2 } from 'react-icons/rx'

export const CartDetail = ({ setShowCartDetail }) => {
  const handleCloseCart = () => {
    setShowCartDetail(false)
  }
  return (
    <aside className='fixed top-0 right-0 h-full w-80 bg-white p-4 animate-fade-left'>
      <div className='flex justify-between'>
        <h2 className='text-lg font-bold mb-4'>Carrito de compras</h2>
        <RxCross2 onClick={handleCloseCart} />
      </div>
      <ul className='space-y-2'>
        <li className='flex items-center'>
          <img src='/path/to/product-image.jpg' alt='Product' className='w-12 h-12 mr-2' />
          <div>
            <p className='font-bold'>Producto 1</p>
            <p className='text-sm text-gray-500'>Precio: $10.99</p>
            <p className='text-sm text-gray-500'>Cantidad: 5</p>
          </div>
        </li>
        {/* Agrega más elementos de la lista aquí */}
      </ul>

      <div className='mt-4'>
        <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>Comprar</button>
        <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded ml-2'>
          Vaciar carrito
        </button>
      </div>
    </aside>
  )
}
