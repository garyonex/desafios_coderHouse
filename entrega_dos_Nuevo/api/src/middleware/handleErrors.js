export const handleErrors = (error, req, res, next) => {
  console.log(error.name)
  if (error.name === 'CastError') {
    res.status(400).send({ error: 'id used is malformed' })
  } else if (error.name === 'ValidationError') {
    res.status(409).send({ erorr: error.message })
  } else if (error.name === 'JsonWebTokenError') {
    res.status(401).json({ error: 'token missin or invalid' })
  } else if (error.name === 'TokenExpirerError') {
    res.status(401).json({ error: 'Token expired' })
  } else {
    res.status(500).end()
  }
}
