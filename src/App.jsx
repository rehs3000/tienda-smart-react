
import { Route, Routes } from "react-router-dom";
import { Header } from './Component/Header/Header';
import { Footer } from './Component/Footer/Footer';
import { ItemListContainer } from "./Component/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Component/ItemDetailContainer/ItemDetailContainer";
function App() {
 

  return (
    <>
    <Header/>
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/product/:id" element = {<ItemDetailContainer/>}/>
        <Route path="/carrito" element = {<p>Carrito</p>} />
        
      </Routes>
    </main> 
    <Footer/>
    </>
  )
}

export default App
