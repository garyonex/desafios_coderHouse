import {useState} from 'react'

// ? componente sirve para mostrar u ocultar otros componentes que queramos
// ? queda ya listo para poder ser utilizado en el momento que se quiera 

export const Togglable = ({ children, buttonLabel }) => {
    const [visible, setVisible] = useState(false)
    const hideVisible = { display: visible ? 'none' : '' }
    const showVisible = { display: visible ? '' : 'note' }
    return (
        <div>
            <div style={hideVisible}>
                <button onClick={() => setVisible(true)}>{buttonLabel}</button>
            </div>
            <div style={showVisible}>
                {children}
                <button onClick={() => setVisible(false)}>Cancel</button>
            </div>
        </div>
    )
}