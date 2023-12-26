import { useState } from "react"
import "./ItemCount.css"

const ItemCount = () => {
  const [counter, setCounter] = useState(1)

  const addQuantity = ()=> {
    if(counter < stock){
    setCounter (counter + 1)
    }
  }

  const removeQuantity = ()=> {
    if(counter > 1){
    setCounter (counter - 1)
    }
  }
  return (
    <div className="item-counter">
      <button onClick={addQuantity}>➕</button>
      <p>{counter}</p>
      <button onClick={removeQuantity}>➖</button>
      <button>Finish purchase</button>
    </div>
  )
}

export default ItemCount