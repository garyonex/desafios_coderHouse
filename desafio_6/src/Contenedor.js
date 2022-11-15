import fs from 'fs'

class Contenedor {
  constructor() {
    
  }

  async leerArchivo(file_path) {
    try {
      if (fs.existsSync(file_path)) {
        console.log(' el archivo existe')
        return false
      } else {
        console.log('Estamos creando archivo')
        await fs.readFileSync(file_path, 'utf-8')
        return true
      }
    } catch (error) {
      console.log('Error al leer el archivo', error)
      return false
    }
  }
  //Escribir o sobreEscribir
  escribirArchivo(arrayProductos, file) {
    let json = JSON.stringify(arrayProductos)
    try {
      fs.writeFileSync(file, json)
    } catch (error) {
      console.log('Error al escribir el archivo', error)
    }
  }
  //Buscar todos
  getAll(file) {
    let todosProductosArray = this.read(file)
    return todosProductosArray
  }

  //Buscar por Id
  getById(id, file) {
    let todosProductosArray = this.read(file)
    let producto = todosProductosArray.find((element) => element.id == id)

    return producto ? producto : null
  }
  read(file) {
    let todosProductosArray = []
    try {
      todosProductosArray = fs.readFileSync(file, 'utf8')
      todosProductosArray.length > 0
        ? (todosProductosArray = JSON.parse(todosProductosArray))
        : (todosProductosArray = [])
    } catch (error) {
      console.log('error', error)
    }
    return todosProductosArray
  }
  //Guardar un archivo nuevo
  save(producto, file) {
    //  obtengo ultimo id + 1
    let nextId = this.nuevoId(file)
    producto['id'] = nextId
    //  actualizo el contenido con el nuevo producto
    const todosProductosArray = this.read(file)
    todosProductosArray.push(producto)
    //  Grabo el archivo nuevamente
    this.escribirArchivo(todosProductosArray, file)
  }
  //eliminar uno
  deleteById(id) {
    const contenidoNuevo = this.contenido.filter((element) => element.id === id)
    this.escribirArchivo(contenidoNuevo)
  }
  //Eliminar todo
  deleteAll() {
    const contentido = []
    this.contenido = contentido
    this.escribirArchivo(this.contenido)
  }
  nuevoId(file) {
    let lastId = 0
    let todosProductosArray = this.read(file)
    if (todosProductosArray.length > 0) {
      lastId = todosProductosArray[todosProductosArray.length - 1].id
    }
    return lastId + 1
  }
}

export default Contenedor
