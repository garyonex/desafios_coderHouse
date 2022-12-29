import './App.scss'
import Home from './Components/Home'
import { CartProvider } from './Context/CartContext'
function App() {
  return (
    <div className='appContainer'>
      <CartProvider>
        <Home />
      </CartProvider>
    </div>
  )
}

export default App
