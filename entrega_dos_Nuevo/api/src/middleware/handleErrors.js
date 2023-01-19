
const ERROR_HANDLERS = {
  CastError: res =>
    res.status(400).send({ error: 'id used is malformed' }),

  ValidationError: (res, error) =>
    res.status(409).send({ erorr: error.message }),

  JsonWebTokenError: res =>
    res.status(401).json({ error: 'token missin or invalid' }),

  TokenExpirerError: (res, error) =>
    res.status(401).json({ error: 'Token expired' }),

  defaultError: res => res.status(500).end()
}

export const handleErrors = (error, req, res, next) => {
  console.log(error.name)
  const handler = ERROR_HANDLERS[error.name] || ERROR_HANDLERS.defaultError
  handler(res, error)
}