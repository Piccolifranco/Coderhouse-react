
import './App.css'
import { ItemDetailContainer } from './components/itemDetail/ItemDetailContainer'
import { ItemListContainer } from './components/itemList/ItemListContainer'
import { Navbar } from './navigation/Navbar'

function App () {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer />

    </>
  )
}

export default App
