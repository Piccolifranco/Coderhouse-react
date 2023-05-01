import React from 'react'
import { CartWidget } from '../components/CartWidget'

export const Navbar = () => {
  return (
    <div className='flex text-black mx-auto px-4 h-24 max-w-7xl justify-between items-center bg-slate-400'>
      <h1 className='text-3xl font-bold text-red-800 w-full'>Valorant store.</h1>
      <ul className='flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Products</li>
        <li className='p-4'>Contact</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Comunity</li>
        <CartWidget />
      </ul>

    </div>
  )
}
