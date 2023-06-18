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
    <div className='container mx-auto mt-10'>
      {itemDetailed ? <ItemDetail item={itemDetailed} /> : <p>Cargando...</p>}
    </div>
  )
}
