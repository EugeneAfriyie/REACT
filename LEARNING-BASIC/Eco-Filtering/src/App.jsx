import Nav from "./NAVIGATION/Nav"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import '../src/index.css'
import Sidebar from "./Sidebar/sidebar"
import { useState } from "react"

const App = () => {

  const [selectedCategory,setSelectedCategory] = useState(null);


  input filter



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