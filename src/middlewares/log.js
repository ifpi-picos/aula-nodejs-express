const logger = (req, res, next) => {
  console.log('Log:: url: ', req.url, ' - method http: ', req.method)
  next()
}

module.exports = logger
