
import './App.css'
import { ItemDetailContainer } from './components/itemDetail/ItemDetailContainer'
import { ItemListContainer } from './components/itemList/ItemListContainer'
import { Navbar } from './navigation/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:idCategory' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
