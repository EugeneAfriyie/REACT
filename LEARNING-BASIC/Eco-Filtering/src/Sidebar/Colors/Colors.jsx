import React from 'react'
import './Colors.css'
import Input from '../../Component/Input'

const Colors = ({handleChange,checkedInput}) => {
  return (
    <div>
      
      <h2 className="sidebar-title">Colors</h2>


      <div>
       <Input
        handleChange={handleChange}
        value='black'
        title='Black'
        name='test'
        color='black'
        checked={checkedInput === "black"}
        />
       <Input
        handleChange={handleChange}
        value='blue'
        title='Blue'
        name='test'
        color='blue'
        checked={checkedInput === "blue"}
        />
       <Input
        handleChange={handleChange}
        value='red'
        title='red'
        name='test'
        color='red'
        checked={checkedInput === "red"}
        />
       <Input
        handleChange={handleChange}
        value='green'
        title='Green'
        name='test'
        color='green'
        checked={checkedInput === "green"}
        />
      
     

      <label     className={`sidebar-label-container 
          }`}>
        <input type="radio" onChange={handleChange} value='white' name='test'  checked={checkedInput === "white"}  className='checkbox'/>
        <span
    className='checkmark'
    style={{ backgroundColor: "white", border: "2px solid black" }}
  ></span> White
       </label>
      </div>
    </div>


  )
}

export default Colors