import './sidebar.css';
 import Category from '../Sidebar/Category/Category.jsx'
 import Price from './Price/Price'
//  import Colors from './COLORS/Colors.jsx'
import Colors from './Colors/Colors.jsx'
//  console.log('Colors component path:', require.resolve('./COLORS/Colors.jsx'));


const Sidebar = ({handleChange,checkedInput}) => {

  // console.log(handleChange)
  return (
    <>
       <section className="sidebar">
        <div className="logo-container">
            <h1>🛒</h1>
        </div>

        <Category handleChange={handleChange} checkedInput={checkedInput}/>
        <Price    handleChange={handleChange} checkedInput={checkedInput}/>
        <Colors   handleChange={handleChange} checkedInput={checkedInput}/>
        </section> 
    </>
  )
}

export default Sidebar