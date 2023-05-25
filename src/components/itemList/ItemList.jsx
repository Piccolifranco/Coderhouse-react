import React, { useEffect, useState } from 'react'
import { Item } from '../Item/Item'

const products = [
  {
    id: 1,
    title: 'Remera',
    image: 'https://dinobutelli.com.ar/wp-content/uploads/2021/10/50_56.jpg',
    price: 10.99,
    description: 'La remera perfecta para lucir un estilo casual y cómodo. Está confeccionada con algodón suave de alta calidad que proporciona una sensación agradable al contacto con la piel. Su diseño clásico de cuello redondo y manga corta la convierte en una prenda versátil y fácil de combinar. Es ideal para usar en el día a día, ya sea para ir al trabajo, salir con amigos o disfrutar de un paseo por la ciudad. Disponible en una amplia variedad de colores y tallas para adaptarse a tus preferencias y necesidades.',
    quantity: 5
  },
  {
    id: 2,
    title: 'Buzo',
    image: 'https://remerasya.com/media/catalog/product/cache/839e5c25c645eac744603bf9726fb4fd/b/u/buzo_hombre_negro_1.jpg',
    price: 19.99,
    description: 'Un buzo moderno y abrigado que te mantendrá cómodo en los días fríos. Está fabricado con materiales de alta calidad que brindan calidez y durabilidad. Su diseño elegante cuenta con capucha ajustable y bolsillos frontales, lo que lo convierte en una prenda funcional y práctica. Puedes combinarlo fácilmente con pantalones casuales o deportivos para crear diferentes looks. Ya sea para realizar actividades al aire libre, hacer ejercicio o relajarte en casa, este buzo es la elección perfecta. Disponible en diversas tallas y colores para satisfacer tus preferencias de estilo.',
    quantity: 8
  },
  {
    id: 3,
    title: 'Campera',
    image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/252/220/products/087e45a8-80c3-4ed4-b3e1-8d0786007ccb-49dbd3bb13eea0235c16845450518807-1024-1024.webp',
    price: 7.5,
    description: 'Una campera ligera y resistente al agua diseñada para mantenerte protegido durante tus actividades al aire libre. Está confeccionada con materiales de alta calidad que brindan durabilidad y comodidad. Su tejido especial repelente al agua te mantendrá seco incluso en días lluviosos. Cuenta con capucha ajustable, cierre frontal y bolsillos con cierre para mayor practicidad. Ya sea que estés explorando la naturaleza, practicando deportes al aire libre o simplemente disfrutando de un paseo en un clima impredecible, esta campera será tu compañera confiable. Disponible en diferentes colores y tallas para adaptarse a tu estilo y preferencias.',
    quantity: 3
  },
  {
    id: 4,
    title: 'Pantalon',
    image: 'https://http2.mlstatic.com/D_NQ_NP_880063-MLA54962024767_042023-O.webp',
    price: 5.0,
    description: 'Un pantalón versátil y cómodo que combina estilo y funcionalidad. Está confeccionado con materiales de alta calidad que ofrecen durabilidad y suavidad al tacto. Su diseño clásico de corte recto y ajuste regular se adapta a diferentes estilos y ocasiones. Puedes lucirlo tanto en el ámbito laboral como en tu tiempo libre. Es perfecto para combinar con camisas, remeras o buzos, creando looks elegantes o casuales según tus necesidades.',
    quantity: 10
  }
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })
}

export const ItemList = () => {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    getProducts()
      .then((products) => {
        setProductList(products)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto mt-3 gap-9 mb-10'>
      {productList.map(item => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  )
}
