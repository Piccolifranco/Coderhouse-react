import React, { useEffect, useState } from 'react'

import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../../firebaseConfig'

export const ItemDetailContainer = () => {
  const { id } = useParams()
  const [itemDetailed, setItemDetailed] = useState()
  useEffect(() => {
    const foundedItem = doc(db, 'products', id)
    getDoc(foundedItem)
      .then(res => {
        const data = res.data()
        const newProduct = { id: res.id, ...data }
        setItemDetailed(newProduct)
      })

      .catch((error) => {
        console.error(error)
      })
  }, [id])
  return (
    <div className='max-w-7xl container mx-auto mt-10'>
      <h3 className='text-white text-2xl font-bold'>Detalle del producto</h3>
      {itemDetailed ? <ItemDetail item={itemDetailed} /> : <p>Cargando...</p>}
    </div>
  )
}
