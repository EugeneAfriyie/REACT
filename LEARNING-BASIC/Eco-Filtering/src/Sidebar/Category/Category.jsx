  import './Category.css'
const Category = () => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div className="">
        <label className="sidebar-label-container">
          <input type="radio" name="test" id="" />
          <span className='checkmark'></span> All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" id="" />
          <span className='checkmark'></span> Sneakers
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" id="" />
          <span className='checkmark'></span> Sandals
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" id="" />
          <span className='checkmark'></span> Heels
        </label>
      </div>
    </div>
  )
}

export default Category