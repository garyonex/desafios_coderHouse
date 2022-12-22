import bcrypt from 'bcrypt'
import User from '../models/User'

export const createUsaer = async (req, res, next) => {
  const { body } = req
  const { username, email, password } = body
  try {
    const saltOrRound = 10
    const passwordHash = await bcrypt.hash(password, saltOrRound)
    const user = new User({
      username,
      email,
      passwordHash
    })
    const savedUser = await user.save()
    res.status(201).json(savedUser)
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export const checkUser = async (req, res, next) => {
  const users = await User.find({})
  res.status(200).json(users)
}
