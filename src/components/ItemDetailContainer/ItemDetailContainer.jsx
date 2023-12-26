import { useEffect, useState } from "react"
import obtainProductList from "../Utilities/data"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        obtainProductList
        .then((response)=>{
            const productFound = response.find((product)=> product.id === id)
            setProduct(productFound)
        })
    }, [])
  return (
    <div>
        <ItemDetail product={product}/>

    </div>
  )
}
export default ItemDetailContainer