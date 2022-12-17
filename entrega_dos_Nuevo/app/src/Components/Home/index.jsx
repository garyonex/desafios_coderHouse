import styles from './styles.module.scss'
import Cart from '../Cart'
import Products from '../Products'
const Home = () => {
    return (
        <div className={styles.home}>
            <Cartr /> 
            <Products />
        </div>
    )
}

export default Home