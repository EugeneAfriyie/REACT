import React from 'react'
import './Colors.css'
import Input from '../../Component/Input'

const Colors = ({handleChange}) => {
  return (
    <div>
      
      <h2 className="sidebar-title">Colors</h2>

      <div className="">
      <label  className='sidebar-label-container'>
        <input type="radio" onChange={handleChange} value='' name='test'  />
        <span className="checkmark all"></span> All
       </label>

       <Input
        handleChange={handleChange}
        value='black'
        title='Black'
        name='test2'
        color='black'
        />
       <Input
        handleChange={handleChange}
        value='blue'
        title='Blue'
        name='test2'
        color='blue'
        />
       <Input
        handleChange={handleChange}
        value='red'
        title='red'
        name='test2'
        color='red'
        />
       <Input
        handleChange={handleChange}
        value='green'
        title='Green'
        name='test2'
        color='green'
        />
       <Input
        handleChange={handleChange}
        value='black'
        title='Black'
        name='test2'
        color='black'
        />
     

      <label  className='sidebar-label-container'>
        <input type="radio" onChange={handleChange} value='white' name='test2'  />
        <span className="checkmark" style={{backgroundColor:'white',border:'2px solid black'}}></span> White
       </label>
      </div>
    </div>


  )
}

export default Colors