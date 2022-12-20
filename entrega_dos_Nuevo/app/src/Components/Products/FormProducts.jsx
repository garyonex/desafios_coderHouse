import React, { useRef, useState } from 'react'

function FormProducts({ addProduct }) {
  const [newName, setNewName] = useState('')
  const [newImg, setNewImg] = useState('')
  const [newPrice, setNewPrice] = useState('')
  const togglabelRef = useRef()
  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }
  const handleChangeImg = (event) => {
    setNewImg(event.target.value)
  }
  const handleChangePrice = (event) => {
    setNewPrice(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()

    const productObjet = {
      name: newName,
      img: newImg,
      price: newPrice,
    }
    addProduct(productObjet)
    setNewName('')
    setNewImg('')
    setNewPrice('')
    togglabelRef.current.toggleVisibility()
  }
  console.log(togglabelRef)
  return (
    <>
      <div>Create new Product</div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            name='name'
            id=''
            placeholder='name'
            onchange={handleChangeName}
            value={newName}
            required
          />
        </div>
        <div>
          <input
            type='text'
            name='img'
            id=''
            placeholder='img'
            onchange={handleChangeImg}
            value={newImg}
            required
          />
        </div>
        <div>
          <input
            type='number'
            name='price'
            id=''
            placeholder='name'
            onchange={handleChangePrice}
            value={newPrice}
            required
          />
        </div>
        <button>Create new Product</button>
      </form>
    </>
  )
}

export default FormProducts
