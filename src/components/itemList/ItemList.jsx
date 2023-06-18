import React, { useEffect, useState } from 'react'
import { Item } from '../Item/Item'
import { useParams } from 'react-router-dom'
import { collection, getDocs, where, query } from 'firebase/firestore'
import { db } from '../../../firebaseConfig'

export const ItemList = () => {
  const [productList, setProductList] = useState([])
  const { idCategory } = useParams()

  useEffect(() => {
    const filteredProducts = idCategory ? query(collection(db, 'products'), where('category', '==', idCategory)) : collection(db, 'products')
    getDocs(filteredProducts).then((snapshot) => {
      setProductList(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    }).catch((error) => ((error)))
  }, [idCategory])

  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto mt-3 gap-9 mb-10'>
      {productList.map(item => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  )
}
