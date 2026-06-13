import { useEffect, useState } from "react"
import useAPI from "../CustomHOOK/useAPI"

const Products = () => {

  const [prods,setProds]=useState([])

  const {dataFromAPI,loading,error} = useAPI("https://fakestoreapi.com/products")
  console.log(dataFromAPI);

  useEffect(()=>{
    setProds(dataFromAPI)
  },[dataFromAPI])

  return (
<>
<h1>PRODUCTS</h1>
<ul >
{prods?.map((p,i)=>(
  <li key={i}>{p.title}</li>
))}
</ul>
</>
  )
}

export default Products