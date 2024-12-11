import React from 'react'
import './Products.css'
import { FaStar } from "react-icons/fa";
import { BsFillBagHeartFill } from "react-icons/bs";
import Card from '../Component/Card';
const Products = () => {
  return (
    <div>
      <section className="card-container">
       
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </section>
    </div>
  )
}

export default Products