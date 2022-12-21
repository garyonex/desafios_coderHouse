import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User'

export const recoverUserPass = async (req, res) => {
  const { body } = req
  const { username, password } = body

  const user = await User.findOne({ username })
  const passCorrect =
  user === null ? false : await bcrypt.compare(password, username.passwordHash)

  if (!(user && passCorrect)) {
    res.status(401).json({
      error: 'Invalid user or password'
    })
  }

  const userForToken = {
    id: user._id,
    username: user.username
  }
  const token = jwt.sign(userForToken, process.env.JWT_SECRET, {
    expiredIn: 60 * 60
  })
  res.send({
    username: user.username,
    email: user.email,
    token
  })
}
