import Nav from "./NAVIGATION/Nav"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import '../src/index.css'
import Sidebar from "./Sidebar/sidebar"
import products from "./data/data.jsx"
import Card from "./Component/Card"
import { useState } from "react"

const App = () => {

  const [selectedCategory,setSelectedCategory] = useState("");
  const [query,setQuery] = useState("");


  // input filter

  const handleInputChange = e =>{
    setQuery(e.target.value)
  }






// ************ Radio filtering ************

const handleChange = e =>{
  setSelectedCategory(e.target.value)
}

// ************ Radio Button ************

const handleClick = e =>{
  setSelectedCategory(e.target.value)
}


const filteredData = (products,selected,query) =>{

let filteredProducts = products;

// Fltering Seach Input Data 

if (query){
  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    

);
  // filteredProducts = filteredItems;
}

// Selected Filtering 

if(selected){

  filteredProducts = filteredProducts.filter(({category,color,company,newPrice,title}) =>(
    category === selected
     || color === selected 
     || company === selected 
     || newPrice === selected 
     || title === selected
  ));


  
}

if(!selected && !query){
  filteredProducts = products
}


return filteredProducts.map(({img,title,prevPrice,star,reviews,newPrice}) =>
(  

  <Card 
  key={title + Math.random()}
  img={img}
  title={title}
  prevPrice={prevPrice}
  star ={star}
  reviews = {reviews}
  newPrice = {newPrice}

  />
))


}
const result = filteredData(products,selectedCategory,query)



  return (
    <div>
      <Sidebar handleChange={handleChange} checkedInput={selectedCategory}  />
      <Nav query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Products result={result} />
      
    </div>
  )
}

export default App