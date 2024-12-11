import React from 'react'
import './Products.css'
import { FaStar } from "react-icons/fa";
import { BsFillBagHeartFill } from "react-icons/bs";
import Card from '../Component/Card';
const Products = ({result}) => {
  return (
    <div>
      <section className="card-container">
       
      {result}
      </section>
    </div>
  )
}

export default Products