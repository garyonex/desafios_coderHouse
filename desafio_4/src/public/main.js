export const render = (data) => {
    notes.innerHTML +=
        `
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

export const addMessage = e => {
    const message = {
        user: document.getElementById('user').value,
        text: document.getElementById('text').value,
        date: dateNow()
    }
    socket.emit('client:chat', message)
    return false
}

// fecha y hora del mensaje

dateNow = () => {
    const now = new Date()
    return `${now.getHours()}: ${now.getMinutes()}`

}

export const cargar = (nota) => {
    nota.forEach((nota) => render.nota)
}

// card productos

export const displayProductos = (productList) => {
    let productosHTML = ''

    productList.forEach((element) => {
        productosHTML +=
            `<div class="col text-center mt-4 text-capitalize" >
            <div class="card h-100 card_img shadow_sm">
                <img src="${element.thumbnail}" class="card-img-top" alt="${element.title}">
                <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <span class="card-text">Price  ${element.price}</span>
                <span class="float-start">Stock ${element.stock}</span>
                <button class="btn btn-primary mt-2 " onclick="add(${element.id}, ${element.price})">Comprar</button>
                </div>
            </div>
        </div>`
    })
}

document.getElementById('insert_product').innerHTML = productosHTML
