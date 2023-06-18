import { useContext, React } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { carritoContext } from '../../context/carritoContext'
import { Link } from 'react-router-dom'

export const CartDetail = ({ setShowCartDetail }) => {
  const { cart, removeProduct, clearCart, totalPrice } = useContext(carritoContext)
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
        {cart.map((product, index) => {
          return (
            <li key={product.id} className='flex items-center'>
              <img src='/path/to/product-image.jpg' alt='Product' className='w-12 h-12 mr-2' />
              <div>
                <p className='font-bold'>{index + 1}</p>
                <p className='text-sm text-gray-500'>Producto: {product.title}</p>
                <p className='text-sm text-gray-500'>Price: ${product.price}</p>
                <p className='text-sm text-gray-500'>Quantity: {product.quantity}</p>
              </div>
              <button
                onClick={() => removeProduct(product.id)}
                className='ml-auto text-red-500 hover:text-red-700'
              >
                <RxCross2 className='w-4 h-4' />
              </button>
            </li>
          )
        })}

      </ul>

      <div className='mt-4'>
        {
          cart.length > 0
            ? <>
              <div>
                <p>Total: ${totalPrice.toFixed(2)}</p>
              </div>
              <div>
                <Link to='/checkout'>
                  <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>Buy</button>
                </Link>
                <button onClick={clearCart} className='bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded ml-2'>
                  Clear cart
                </button>
              </div>
            </>
            : <p>The cart is empty</p>
        }

      </div>
    </aside>
  )
}
