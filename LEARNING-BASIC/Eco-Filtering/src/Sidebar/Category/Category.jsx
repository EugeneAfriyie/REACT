  import Input from '../../Component/Input'
import './Category.css'
const Category = ({handleChange,checkedInput}) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div className="">
       <label  className='sidebar-label-container'>
        <input type="radio" onChange={handleChange} value="" name='test' className='checkbox'  checked={checkedInput === ""}/>
        <span className="checkmark" ></span> All
       </label>

       <Input
        handleChange={handleChange}
        value='sneakers'
        title='Sneakers'
        name='test'
        checked={checkedInput === "sneakers"}
      
        
        />
       <Input
        handleChange={handleChange}
        value='sandals'
        title='Sandals'
        name='test'
        checked={checkedInput === "sandals"}
      

        
        />
       <Input
        handleChange={handleChange}
        value='heels'
        title='Heels'
        name='test'
        checked={checkedInput === "heels"}
      

        
        />
       <Input
        handleChange={handleChange}
        value='flats'
        title='Flats'
        name='test'
        checked={checkedInput === "flats"}
      

        
        />
   
      </div>
    </div>
  )
}

export default Category