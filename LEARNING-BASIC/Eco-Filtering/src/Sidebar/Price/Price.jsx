import Input from '../../Component/Input'
import './Price.css'
const Price = ({handleChange}) => {
  return (
    <div className='ml'>
      <h2 className="sidebar-title price-title">Price</h2>

     
      <div className="">
       <label  className='sidebar-label-container'>
        <input type="radio" onChange={handleChange} value='All' name='test'  />
        <span className="checkmark"></span> All
       </label>

       <Input
        handleChange={handleChange}
        value={50}
        title='$0 - $50'
        name='test4'
        
        />
    
       <Input
        handleChange={handleChange}
        value={100}
        title='$50 - $100'
        name='test4'
        
        />
    
       <Input
        handleChange={handleChange}
        value={150}
        title='$100 - $150'
        name='test4'
        
        />
    
       <Input
        handleChange={handleChange}
        value={200}
        title='Over $150'
        name='test4'
        
        />
    
   
      </div>

    </div>
  )
}

export default Price