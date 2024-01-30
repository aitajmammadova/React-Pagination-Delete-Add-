import { useState } from 'react'
import './App.css'
import Product from './components/Product.jsx'
import Pagination from './components/Pagination.jsx'
import { v4 } from 'uuid'

function App() {
  const [activePage,setActivePage] = useState(1)
  const productPerPage = 4
  const star = (activePage-1) * productPerPage
  const end = star + productPerPage 
  const [products,setProducts] = useState([])
  const [product, setProduct] = useState({
    id:"",
    name: "",
    price: "",
    image: ""
  })
  const productCount = products.length
  const totalPage = Math.ceil(productCount / productPerPage)
  if (totalPage>1 && activePage>totalPage){
    setActivePage(totalPage)
  }
  const deleteItem = (id) => {
    setProducts([...products.filter((a)=>a.id!==id)])

  }
  const handleChange=(e)=>{
    setProduct({...product, [e.target.name]:e.target.value})
     
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    const newProduct = { ...product, id: v4() }
    setProducts([...products,newProduct])
    setProduct({
      id:"",
      name:"",
      price:"",
      image:""
    })
    console.log(activePage)
     
  }
  // const isAnyFieldEmpty = Object.values(product).some(value => value === "")
  
  
  return (
    <>
      
      <div className="heading">Products</div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={product.name} type="text" name="name" id="name" placeholder='Product name'/>
        <input onChange={handleChange} value={product.price} type="number" name="price" id="price" placeholder='Product Price'/>
        <input onChange={handleChange} value={product.image} type="text" name="image" id="image" placeholder='Product image'/>
        <button >Save Product</button>
      </form>
      <section className="products">
        {products.length?products.slice(star,end).map((p,b)=>(<Product deleteFunction={()=>deleteItem(p.id)} product={p} key={b}></Product>)):<h3>No products yet...</h3>}
      </section>
      <Pagination 
      totalPage={totalPage}
      setActivePage={setActivePage}
      activePage={activePage}></Pagination>
    </>
  )
}

export default App
