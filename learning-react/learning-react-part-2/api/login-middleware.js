module.exports = (req, res, next) => {
  if (req.method == 'POST' && req.path == '/login') {
    if (req.body.username === 'victorserpac' && req.body.password === '123456') {
      res.status(200).json({
        token: "xx508xx63817x752xx74004x30705xx92x58349x5x78f5xx34xxxxx51"
      });
    } else {
      res.status(400).json({ message: 'wrong password' })
    }
  } else {
    next()
  }
}