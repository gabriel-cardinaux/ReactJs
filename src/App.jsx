import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'


function App() {
  

  return (
    <>
      <div>
        <Navbar/>
        <ItemListContainer greeting="Hello there"/>
      </div>
    </>
  )
}

export default App
