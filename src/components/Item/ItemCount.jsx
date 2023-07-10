import React, { useState } from 'react'

const ItemCount = ({ inicial, stock, addItem }) => {
  const [count, setCount] = useState(1)
  const onAdd = () => {
    if (count < stock) {
      setCount((prev) => prev + 1)
    }
  }
  const onDelete = () => {
    if (count > inicial) {
      setCount((prev) => prev - 1)
    }
  }
  return (
    <div>
      <button className='mt-4 w-30 h-10 text-sm bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded' disabled={count === stock} onClick={onAdd}> + </button>
      <p>{count}</p>
      <button className='mt-4 w-30 h-10 text-sm bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded' disabled={count <= 0} onClick={onDelete}>  - </button>
      <button onClick={() => addItem(count)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
