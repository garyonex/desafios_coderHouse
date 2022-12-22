import './styles.modules.scss'

const Navbar = () => {
  return (
    <div className="navBar_container">
      <div className="subContainer">
        <div className="left">
          <div className="language">ES</div>
          <div className="searchContainer">
            <input type="text" />
            <SearchIcon />
          </div>
        </div>
        <div className="center">
          <div className="logo">Tu camiseta</div>
        </div>
        <div className="right">
          <div className="menuItems">
            <li>REGISTER</li>
            <li>SIGN IN</li>
            <li>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartTwoToneIcon />
              </Badge>
            </li>
          </div>
        </div>
        navbar
      </div>
    </div>
  )
}

// instalar
// npm i @material-ui/core
// npm i @mui/icons-material
export default Navbar
