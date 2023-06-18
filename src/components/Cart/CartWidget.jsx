import React, { useContext, useState } from 'react'
import { GrCart } from 'react-icons/gr'
import { CartDetail } from './CartDetail'
import { carritoContext } from '../../context/carritoContext'

export const CartWidget = () => {
  const { totalQuantity } = useContext(carritoContext)
  const [showCartDetail, setShowCartDetail] = useState(false)

  const handleCartClick = () => {
    setShowCartDetail(true)
  }
  return (
    <>
      <label onClick={handleCartClick} className='flex h-12 w-12 mx-4 px-1 items-center cursor-pointer bg-white rounded-full hover:scale-110 transition-transform'>
        <GrCart />
        <p className='px-2'>{totalQuantity}</p>
      </label>
      {showCartDetail && <CartDetail setShowCartDetail={setShowCartDetail} />}
    </>
  )
}
