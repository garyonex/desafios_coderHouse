import './styles.modules.scss'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navBar_container'>
      <div className='subContainer'>
        <div className='left'>
          <div className='language'>ES</div>
          <div className='searchContainer'>
            <input type='text' />
            <img
              src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-24.png'
              alt=''
            />
          </div>
        </div>
        <div className='center'>
          <Link to='/'>
            <div className='logo'>GaryOnex.</div>
          </Link>
        </div>
        <div className='right'>
          <div className='menuItems'>
            <ul>
              <Link to='/register'>
              <li>REGISTER</li>
              </Link>
              <Link to='/login'>
              <li>SIGN IN</li>
              </Link>
              <li>
                <img
                  src='https://cdn1.iconfinder.com/data/icons/logistics-142/64/order-market-shipping-delivery-shoppin-trolley-cart-24.png'
                  alt=''
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
