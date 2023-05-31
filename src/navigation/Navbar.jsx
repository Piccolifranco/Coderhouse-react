import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CartWidget } from '../components/Cart/CartWidget'

export const Navbar = () => {
  return (
    <div className='flex text-black mx-auto px-4 h-24 max-w-7xl justify-between items-center bg-slate-400'>
      <Link to='/'>
        <h1 className='text-3xl font-bold text-red-800 w-full'>Luxury store.</h1>
      </Link>
      <ul className='flex'>
        <li className='p-4'>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className='p-4'>
          <NavLink to='/category/masculino'>For men</NavLink>
        </li>
        <li className='p-4'>
          <NavLink to='/category/unisex'>Unisex</NavLink>
        </li>
        <li className='p-4'>
          <NavLink to='/'>About us</NavLink>
        </li>
        <li className='p-4'>
          <NavLink to='/'>Contact</NavLink>
        </li>
        <CartWidget />
      </ul>

    </div>
  )
}
