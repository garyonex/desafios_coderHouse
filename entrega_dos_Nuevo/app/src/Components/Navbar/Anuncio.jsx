import { useUser } from '../../hooks/useUser'
import './styles.modules.scss'

const Anuncio = () => {
  const { user } = useUser()
   const userId = user

  return (
    <div className='anuncioContainer'>
      Ventas super fabulantasticas
    </div>
  )
}

export default Anuncio
