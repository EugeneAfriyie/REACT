import Nav from "./NAVIGATION/Nav"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import '../src/index.css'
import Sidebar from "./Sidebar/sidebar"
import { useState } from "react"

import products from "./data/data"

const App = () => {

  const [selectedCategory,setSelectedCategory] = useState(null);


  // input filter

  const [query,setQuery] = useState("");


  const handleInputChange = e =>{
    setQuery(e.target.value)
  }


const filteredItems = products.filter(product => 
    product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
);


// ************ Radio filtering ************

const handleChange = e =>{
  setSelectedCategory(e.target.value)
}

// ************ Radio Button ************

const handleClick = e =>{
  setSelectedCategory(e.target.value)
}


const filteredData (products,selected,query) =>{

let filteredProducts = filteredItems;

// Fltering Input Data 

if (query){
  filteredProducts = filteredItems;
}

D

}


  return (
    <div>
      <Sidebar />
      <Nav/>
      <Recommended/>
      <Products />
    </div>
  )
}

export default App