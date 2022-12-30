import { useUser } from '../../hooks/useUser'
import './styles.modules.scss'

const Anuncio = () => {
  const { user } = useUser()
  const userId = user
 
  return (
    <div className='anuncioContainer'>
      Ventas super fabulantasticas
      {userId ? (
        <h4>
          BIENVENIDO <small>{userId.username}</small>
        </h4>
      ) : (
        ''
      )}
    </div>
  )
}

export default Anuncio
