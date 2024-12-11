import './sidebar.css';
 import Category from '../Sidebar/Category/Category.jsx'
 import Price from './Price/Price'
//  import Colors from './COLORS/Colors.jsx'
import Colors from './Colors/Colors.jsx'
//  console.log('Colors component path:', require.resolve('./COLORS/Colors.jsx'));


const Sidebar = () => {
  return (
    <>
       <section className="sidebar">
        <div className="logo-container">
            <h1>🛒</h1>
        </div>

        <Category />
        <Colors />
        <Price />
        </section> 
    </>
  )
}

export default Sidebar