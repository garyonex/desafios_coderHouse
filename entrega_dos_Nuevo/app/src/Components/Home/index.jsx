import Cart from '../Cart'
import ChatUser from '../Chat'
import Navbar from '../Navbar'
import Anuncio from '../Navbar/Anuncio'
import Products from '../Products'
import Register from '../Register'
import styles from './styles.modules.scss/?inline'

const Home = () => {
    return (
        <div className={styles.home}>
            <Anuncio />
            <Navbar />
            <Cart /> 
            <Products />
            <Register />
            <ChatUser/>
        </div>
    )
}

export default Home