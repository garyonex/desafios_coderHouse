import io from 'socket.io-client'
const connectUrl = 'http://localhost:8080'
export const socket = io(connectUrl)