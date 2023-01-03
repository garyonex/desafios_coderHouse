import './styles.modules.scss'
import { Link } from 'react-router-dom'
import { useUser } from '../../hooks/useUser'
import logo from '../../helpers/image/logo.png'
const Navbar = () => {
  const { user, logout } = useUser()
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
            <div className='logo'></div>
            <img src={logo} alt='garyonexlogo' />
          </Link>
        </div>
        <div className='right'>
          <div className='menuItems'>
            <ul>
              {user ? (
                ''
              ) : (
                <Link to='/register'>
                  <li>REGISTER</li>
                </Link>
              )}

              {user ? (
                <em>Bienvenido {user.username}</em>
              ) : (
                <Link to='/login'>
                  <li>SIGN IN</li>
                </Link>
              )}
              {user ? <button onClick={logout}>logout</button> : ''}
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
