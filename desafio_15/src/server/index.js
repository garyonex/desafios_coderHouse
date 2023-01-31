import app from './app'
import { Server as websocket } from 'socket.io'
import http from 'http'
import socket from './socket'
import cluster from 'cluster'
import os from 'os'
// import ParsedArgs from 'miniminst'
// configuracion para argumens
// TODO instalar miniminst
const options = { alias: { p: 'port', m: 'modo' }, default: { modo: process.env.MODO_SERVER, port: process.env.PORT } }
const objArguments = ParsedArgs(process.argv.slice(2), options)
// console.log(objArguments)

const PORT = objArguments.port
const MODO = objArguments.modo
if (MODO === 'CLUSTER' && cluster.isPrimary) {
    const numCpus = os.cpus().length
    console.log(`Numero de cpus es de ${numCpus}`)
    for (let index = 0; index < numCpus; index++) {
        cluster.fork()
        //Por cada nucleo que exista, se creara un fork
        cluster.on(('exit' , (worker) =>{
            console.log(`Process ${worker.process.pid} is over`)
            cluster.fork()
        }))
    }
} else {
    const server = app.listen(PORT)
    const io = new websocket(server)
    console.log(`Server on port ${PORT} on process ${process.pid}`)
    socket(io)
}


