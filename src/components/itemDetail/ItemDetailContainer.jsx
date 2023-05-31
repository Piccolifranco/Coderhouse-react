import React, { useEffect, useState } from 'react'

import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { getProducts } from '../asyncmock'

export const ItemDetailContainer = () => {
  const { id } = useParams()
  const [itemDetailed, setItemDetailed] = useState()
  useEffect(() => {
    getProducts()
      .then((products) => {
        const foundItem = products.find((item) => item.id === parseInt(id))
        setItemDetailed(foundItem)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [id])
  return (
    <div className='container mx-auto mt-10'>
      {itemDetailed ? <ItemDetail item={itemDetailed} /> : <p>Cargando...</p>}
    </div>
  )
}
