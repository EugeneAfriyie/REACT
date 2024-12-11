import React from 'react'
import './recommended.css'

const Recommended = ({handleClick}) => {
  return (
    <>
      <div className="">
        <h2 className='recommended-title'>Recommended</h2>
        <div className="recommended-flex">
          <button className='btns'>All Prodcts</button>
          <button className='btns'>Nikes</button>
          <button className='btns'>Adidas</button>
          <button className='btns'>Puma</button>
          <button className='btns'>Vans</button>
        </div>
      </div>
    </>
  )
}

export default Recommended