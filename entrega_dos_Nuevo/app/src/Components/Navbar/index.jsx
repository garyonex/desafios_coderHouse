import './styles.modules.scss'

const Navbar = () => {
  return (
    <div className='navBar_container'>
      <div className='subContainer'>
        <div className='left'>
          <div className='language'>ES</div>
          <div className='searchContainer'>
            <input type='text' />
            <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-24.png" alt="" />
          </div>
        </div>
        <div className='center'>
          <div className='logo'>GaryOnex.</div>
        </div>
        <div className='right'>
          <div className='menuItems'>
            <ul>
              <li>REGISTER</li>
              <li>SIGN IN</li>
              <li><img src="https://cdn1.iconfinder.com/data/icons/logistics-142/64/order-market-shipping-delivery-shoppin-trolley-cart-24.png" alt="" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

// instalar
// npm i @material-ui/core
// npm i @mui/icons-material
export default Navbar
