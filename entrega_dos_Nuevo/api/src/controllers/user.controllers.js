import bcrypt from 'bcrypt'
import User from '../models/User'
// import faker from '@faker-js/faker'

// const { image } = faker
export const createUser = async (req, res, next) => {
  const { body } = req
  const { username, email, password } = body
  try {
    const saltOrRound = 10
    const passwordHash = await bcrypt.hash(password, saltOrRound)
    const user = new User({
      username,
      email,
      passwordHash
      // thumbnail: image.avatar()
    })
    const savedUser = await user.save()
    res.status(201).json(savedUser)
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export const checkUser = async (req, res, next) => {
  const users = await User.find({}).populate('cart', {
    name: 1,
    amount: 1,
    price: 1
  })
  // populate es para mostrar de forma clara los cart que tiene el usuario
  res.status(200).json(users)
}
