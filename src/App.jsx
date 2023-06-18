
import './App.css'
import { CheckoutForm } from './components/CheckoutForm'
import { ItemDetailContainer } from './components/itemDetail/ItemDetailContainer'
import { ItemListContainer } from './components/itemList/ItemListContainer'
import { Navbar } from './navigation/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/carritoContext'

function App () {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:idCategory' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/checkout' element={<CheckoutForm />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
