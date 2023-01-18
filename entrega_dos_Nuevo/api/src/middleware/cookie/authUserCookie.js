export const loginUserCoo = async (req, res) => {
  const { username } = req.body
  const result = await (req.session.user = username)
  res.status(200).json(result)
  console.log(result)
}

export const logoutCoo = async (req, res) => {
  const user = await req.session.username
  const result = req.session.destroy((err) => {
    if (err) {
      console.log(`${err}, existe un error en logout cookie`)
      res.status(400).json({ error: 'error lgout' })
    }
  })
  console.log(`Adios ${user}`)
  res.status(200).json(result)
}
