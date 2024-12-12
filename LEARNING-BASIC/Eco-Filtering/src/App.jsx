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
  // const [checkedInput,setcheckedInput] = useState("");


  // input filter



  const handleInputChange = e =>{
    setQuery(e.target.value)
  }


const filteredItems = products.filter(product => 
    product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    

);

// console.log(query)


// ************ Radio filtering ************

const handleChange = e =>{
  setSelectedCategory(e.target.value)
  // const allCheckbox = document.querySelectorAll('.checkbox');

  //   allCheckbox.forEach(input =>{
  //   e.target.value === input.className ? setcheckedInput("'checked") : setcheckedInput("")
  // })


  // console.log( e.target.className)

  // return inputChecked
}

// ************ Radio Button ************

const handleClick = e =>{
  setSelectedCategory(e.target.value)
}


const filteredData = (products,selected,query) =>{

let filteredProducts = filteredItems;

// Fltering Input Data 

if (query){
  filteredProducts = filteredItems;
}

// Selected Filter 

if(selected){
  // console.log(filteredProducts)

  filteredProducts = filteredProducts.filter(({category,color,company,newPrice,title}) =>(
    category === selected
     || color === selected 
     || company === selected 
     || newPrice === selected 
     || title === selected
  ));


    // console.log(filteredProducts)
  
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


// checkedInput()

// console.log(result)

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