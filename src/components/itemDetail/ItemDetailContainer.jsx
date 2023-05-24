import React, { useEffect, useState } from 'react'
import { getProducts } from '../itemList/ItemList'
import ItemDetail from './ItemDetail'

export const ItemDetailContainer = () => {
  const [itemDetailed, setItemDetailed] = useState()
  useEffect(() => {
    getProducts()
      .then((products) => {
        setItemDetailed(products[2])
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])
  return (
    <div className='container mx-auto mt-10'>
      {itemDetailed ? <ItemDetail item={itemDetailed} /> : <p>Cargando...</p>}
    </div>
  )
}
