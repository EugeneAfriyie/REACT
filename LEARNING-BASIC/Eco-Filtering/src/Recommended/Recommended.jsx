import React from 'react'
import './recommended.css'
import Button from '../Component/Button'

const Recommended = ({handleClick}) => {
  return (
    <>
      <div className="">
        <h2 className='recommended-title'>Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value='' title='All Products' />
          <Button onClickHandler={handleClick} value='Nike' title='Nike' />
          <Button onClickHandler={handleClick} value='Puma' title='PUMA' />
          <Button onClickHandler={handleClick} value='Adidas' title='ADIDAS' />
          <Button onClickHandler={handleClick} value='Vans' title='VANS' />
        </div>
      </div>
    </>
  )
}

export default Recommended