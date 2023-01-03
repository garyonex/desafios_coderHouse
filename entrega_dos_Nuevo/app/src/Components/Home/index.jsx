import Cart from '../Cart'
import ChatUser from '../Chat'
import Navbar from '../Navbar'
import Anuncio from '../Navbar/Anuncio'
import Products from '../Products'
import Register from '../Register'
import { Route, Routes } from 'react-router-dom'
import './styles.modules.scss/'
import ItemsDetails from '../itemDetails'
import Login from '../Login'
import { useUser } from '../../hooks/useUser'

const Home = () => {
  const { user } = useUser()
  return (
    <div className=''>
      <Anuncio />
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/products/:productId' element={<ItemsDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/api/chat' element={<ChatUser />} />
      </Routes>
      {/* // sino hay user logueado no se muestra el chat */}
      {user ? <ChatUser /> : ''}
    </div>
  )
}

export default Home
