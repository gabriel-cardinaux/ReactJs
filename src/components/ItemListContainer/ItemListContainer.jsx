import { useEffect, useState } from "react"
import obtainProductList from "../Utilities/data"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {

const [products, setProducts] = useState([])
const {category} = useParams()

useEffect(()=>{
  obtainProductList
.then((response)=>{
  if(category){
    const filteredProducts = response.filter((product)=> product.category === category)
    setProducts(filteredProducts)

  }else{
    setProducts(response)
  }

})
.catch((error)=>{
 console.log(error)
})
.finally(()=>{
console.log("Promise end")
})
},[category])


  return (
    <div>
        <p>{greeting}</p>
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer