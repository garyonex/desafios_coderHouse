import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User'

export const recoverUserPass = async (req, res) => {
  const { body } = req
  const { username, password } = body
  req.session.user = username
  // console.log(req.session)
  const user = await User.findOne({ username })
  const passCorrect =
    user === null ? false : await bcrypt.compare(password, user.passwordHash)

  if (!(user && passCorrect)) {
    res.status(401).json({
      error: 'Invalid user or password'
    })
  }

  const userForToken = {
    id: user._id,
    username: user.username,
    // isAdmin: user.isAdmin
  }
  const token = jwt.sign(userForToken, process.env.JWT_SECRET, {
    expiresIn: 60 * 60
  })
  const { ...others } = user._doc
  res.send({
    ...others,
    token
  })
}
export const logout = (req, res) => {
  // const user = req.session.user
  const result = req.session.destroy((err) => {
    if (err) {
      console.log(`${err}, existe un error en logout cookie`)
      res.status(400).json({ error: 'error lgout' })
    }
  })
  // console.log(`Adios ${user}`)
  res.status(200).json(result)
}
