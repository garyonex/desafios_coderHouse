export const loginUserCoo = (req, res) => {
  const { username } = req.body
  const result = (req.session.user = username)
  req.status(200).json(result)
  console.log(result)
}

export const logoutCoo = (req, res) => {
  const user = req.session.username
  const result = req.session.destroy((err) => {
    if (err) {
      console.log(`${err}, existe un error en logout cookie`)
      res.status(400).json({ error: 'error lgout' })
    }
  })
  console.log(`Adios ${user}`)
  res.status(200).json(result)
}
