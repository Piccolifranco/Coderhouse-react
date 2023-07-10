import { React, useContext, useState } from 'react'
import { db } from '../../firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'
import { carritoContext } from '../context/carritoContext'
import { Link } from 'react-router-dom'

export const CheckoutForm = () => {
  const { cart, clearCart, totalPrice } = useContext(carritoContext)
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [emailConfirmation, setEmailConfirmation] = useState('')
  const [phone, setPhone] = useState('')
  const [orderID, setOrderID] = useState('')
  const [error, setError] = useState('')

  const handleForm = (e) => {
    if (!name || !surname || !email || !emailConfirmation || !phone) {
      setError('Por favor, complete los datos correspondientes y continue la compra')
      return
    }

    if (email !== emailConfirmation) {
      setError('Por favor, verificar el email')
      return
    }

    const order = {
      items: cart.map(product => ({
        id: product.id,
        title: product.title,
        quantity: product.quantity
      })),
      total: { totalPrice },
      name,
      surname,
      phone,
      email,
      fecha: new Date()
    }
    e.preventDefault()

    addDoc(collection(db, 'orders'), order)
      .then(docRef => {
        setOrderID(docRef.id)
        clearCart()
      }).catch(error => {
        setError('Se produjo un error en la orden')
      })

    setName('')
    setSurname('')
    setEmail('')
    setEmailConfirmation('')
    setPhone('')
  }

  console.log(cart)

  if (cart.length > 0) {
    return (
      <div className='text-white'>
        <h2 className='text-xl'>Checkout</h2>
        <form onSubmit={handleForm} className='space-y-4'>
          {cart.map(product => (
            <div key={product.id} className=' rounded p-4'>
              <p className='text-lg font-bold'>{product.title}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Unit Price: ${product.price}</p>
            </div>
          ))}
          <div>
            <label htmlFor='name' className='font-semibold'>Name</label>
            <input type='text' value={name} required onChange={(e) => (setName(e.target.value))} className='bg-white text-gray-800 px-2 py-1 rounded-md' />
          </div>
          <div>
            <label htmlFor='surname' className='font-semibold'>Surname</label>
            <input type='text' value={surname} onChange={(e) => (setSurname(e.target.value))} className='bg-white text-gray-800 px-2 py-1 rounded-md' />
          </div>
          <div>
            <label htmlFor='email' className='font-semibold'>E-mail</label>
            <input type='text' value={email} onChange={(e) => (setEmail(e.target.value))} className='bg-white text-gray-800 px-2 py-1 rounded-md' />
          </div>
          <div>
            <label htmlFor='emailConfirmation' className='font-semibold'>Repetir E-mail</label>
            <input type='text' value={emailConfirmation} onChange={(e) => (setEmailConfirmation(e.target.value))} className='bg-white text-gray-800 px-2 py-1 rounded-md' />
          </div>
          <div>
            <label htmlFor='phone' className='font-semibold'>Phone number</label>
            <input type='text' value={phone} onChange={(e) => (setPhone(e.target.value))} className='bg-white text-gray-800 px-2 py-1 rounded-md' />
          </div>
          <div>
            <h2 className='text-white'>Total: ${totalPrice}</h2>
            <button type='submit' className='bg-blue-500 py-2 px-4 rounded text-white'>Enviar</button>
          </div>
        </form>
        {orderID && (
          <p>¡Gracias por tu compra! Vuelve pronto. Tu número de orden es {orderID}</p>
        )}
      </div>
    )
  } else {
    return (
      <div className='text-white'>
        <h3>No existen productos en el carrito, para comprar haga click <Link className=' underline cursor-pointer' to='/'>Aqui</Link></h3>
      </div>
    )
  }
}
