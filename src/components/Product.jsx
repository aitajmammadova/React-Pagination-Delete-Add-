 
function Product({product,deleteFunction}) {
  
  return (
    <>
    {/* <li style={{background:props.age>20?"yellow":"white"}}>{props.name} {props.surname} | {props.age}
    {props.age<20 && <Button></Button>}
    </li> */}
    
      <div className="product">
        <div className="prd-img">
          <img src={product.image}></img>
        </div>
        <div className="prd-text">
          <h2>{product.name}</h2>
          <h3>{product.price}</h3>
           
        </div>
        <button onClick={deleteFunction}>Delete</button>
      </div>
    </>
  )
}

export default Product