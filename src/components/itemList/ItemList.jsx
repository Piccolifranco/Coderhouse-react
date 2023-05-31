import React, { useEffect, useState } from 'react'
import { Item } from '../Item/Item'
import { getProducts, getProductsByCategory } from '../asyncmock'
import { useParams } from 'react-router-dom'

export const ItemList = () => {
  const [productList, setProductList] = useState([])
  const { idCategory } = useParams()

  useEffect(() => {
    const filtrarProductos = idCategory ? getProductsByCategory : getProducts

    filtrarProductos(idCategory)
      .then(res => setProductList(res))
      .catch((error) => {
        console.error(error)
      })
  }, [idCategory])
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto mt-3 gap-9 mb-10'>
      {productList.map(item => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  )
}
