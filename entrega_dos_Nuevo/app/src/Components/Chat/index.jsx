import { useEffect, useState } from 'react'
import { socket } from '../../services/chat/controllersChat'

function Message() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState('')
  const dateNow = () => {
    const now = new Date()
    return `${now.getHours()}: ${now.getMinutes()}`
  }

  const handlesubmit = (e) => {
    e.preventDefault()
    // console.log(message);
    socket.emit('client:chat', message)
    const newMessage = {
      body: message,
      from: 'me',
      date: dateNow()
    }
    setMessages([...messages, newMessage])
    setMessage('')
  }

  const handleChange = (event) => {
    setMessage(event.target.value)
  }
  useEffect(() => {
    const receiveMessage = (message) => {
      setMessages([...messages, message])
    }
    socket.on('server:chat', receiveMessage)
    return () => {
      socket.off('server:chat', receiveMessage)
    }
  }, [messages])

  return (
    <div>
      <h1>Chat</h1>
      <form action="" onSubmit={handlesubmit}>
        <input type="text" onChange={handleChange} value={message} />
        <button>Enviar</button>
      </form>

      {message.map((message, index) => {
        ;<div key={index}>
          <div className="animate__bounceIn">
            <div>
              <h5>{message.from}</h5>
              <small>Date: {message.date}</small>
              <button>Delete</button>
            </div>
            <p>{message.body}</p>
          </div>
        </div>
      })}
    </div>
  )
}

export default Message
