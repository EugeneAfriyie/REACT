import Input from '../../Component/Input'
import './Price.css'
const Price = ({handleChange,checkedInput}) => {
  return (
    <div className='ml'>
      <h2 className="sidebar-title price-title">Price</h2>

     
      <div className="">
     

       <Input
        handleChange={handleChange}
        value={50}
        title='$0 - $50'
        name='test'
        checked={checkedInput === 50}

        
        />
    
       <Input
        handleChange={handleChange}
        value={100}
        title='$50 - $100'
        name='test'
        checked={checkedInput === 100}

        
        />
    
       <Input
        handleChange={handleChange}
        value={150}
        title='$100 - $150'
        name='test'
        checked={checkedInput === 150}

        
        />
    
       <Input
        handleChange={handleChange}
        value={200}
        title='Over $150'
        name='test'
        checked={checkedInput === 200}

        
        />
    
   
      </div>

    </div>
  )
}

export default Price