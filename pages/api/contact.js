export default (req, res) => {
  if(req.body) {
    console.log(req.body)
  } else {
    return null
  }
}