import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({product}) => {
  return (
    <div className="card" >
    <img className="img" src={product.image} alt={product.name} />
    <h2 className="title">{product.name}</h2>
    <p className="price">$ {product.price}</p>
    <Link to={`/detail/${product.id}`} className="link">Details</Link>
    </div>
  )
}
export default Item