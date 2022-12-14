const socket = io()
const notes = document.getElementById('notes')
socket.on('server:productos', (productos) => {
  const productosListen = productos
  console.log(typeof(productosListen))
  displayProductos(productosListen)
})
 
socket.on('server:chat', (data) => {
  render(data)
})
socket.on('server:mensajes', (mensajes) => {
  cargar(mensajes)
})

const render = (data) => {
  notes.innerHTML += `
    <div class=" card card-body rounded-0 mb-2 animate__bounceIn">
        <div class="list-group chat">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1 usuario">${data.user}</h5>
                <small> Enviado el: ${data.date}</small>
                <button class="btn btn-danger" data-id="${data.id}">Eliminar</button>
            </div>
            <p class="mb-1">${data.text}</p>
        </div>
    </div>
    `
}
// Agregar mensajes que envian desde el form en plantilla

const addMessage = (e) => {
  const message = {
    user: document.getElementById('user').value,
    text: document.getElementById('text').value,
    date: dateNow(),
  }
  socket.emit('client:chat', message)
  return false
}

// fecha y hora del mensaje

dateNow = () => {
  const now = new Date()
  return `${now.getHours()}: ${now.getMinutes()}`
}

const cargar = (nota) => {
  nota.forEach((nota) => render.nota)
}

// card productos

const displayProductos = (productList) => {
  let productosHTML = ''

  productList.forEach((element) => {
    productosHTML += `<div class="col text-center mt-4 text-capitalize" >
            <div class="card h-100 card_img shadow_sm">
                <img src="${element.imagen} " class="card-img-top" alt="${element.titulo}">
                <div class="card-body">
                <h5 class="card-title">${element.titulo}</h5>
                <span class="card-text">precio  ${element.precio}</span>
                <button class="btn btn-primary mt-2 " onclick="add(${element.id}, ${element.precio})">Comprar</button>
                </div>
            </div>
        </div>`
  })
  document.getElementById('insert_product').innerHTML = productosHTML
}
