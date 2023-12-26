import "./ItemDetail.css"

const ItemDetail = ({product}) => {
  return (
    <div className="details">
        <img src={product.image} alt={product.name} />
      <div className="detail-box">
        <h2>{product.name}</h2>
        <p>$ {product.price}</p>
        <h4>{product.description}</h4>
      </div>
    </div>
  )
}
export default ItemDetail