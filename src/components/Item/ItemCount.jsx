import React, { useState } from 'react'

const ItemCount = ({ quantity }) => {
  const [count, setCount] = useState(0)
  const onAdd = () => {
    setCount((prev) => prev + 1)
  }
  const onDelete = () => {
    setCount((prev) => prev - 1)
  }
  return (
    <div>
      <button className='mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded' disabled={count === quantity} onClick={onAdd}> Agregar al carrito </button>
      <p>{count}</p>
      <button className='mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded' disabled={count <= 0} onClick={onDelete}>
        Eliminar del carrito
      </button>
    </div>
  )
}

export default ItemCount
