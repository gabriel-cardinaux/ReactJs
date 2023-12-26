import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


function App() {
  

  return (
    <BrowserRouter> 
        <Navbar/>
        <Routes>
        <Route path="/" element={<ItemListContainer greeting="Welcome to the E-commerce"/>}/>
        <Route path="/category/:category" element={<ItemListContainer greeting="Welcome to the E-commerce"/>}/>
        <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>      
        </Routes>
    </BrowserRouter>
  )
}

export default App
