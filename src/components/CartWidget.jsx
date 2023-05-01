import React from 'react'
import { GrCart } from 'react-icons/gr'

export const CartWidget = () => {
  return (

    <div className='flex py-4 px-8'>
      <GrCart />
      <p className='px-2'>4</p>
    </div>

  )
}
