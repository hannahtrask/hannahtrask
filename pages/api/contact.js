export default (req, res) => {
  if(req.method === 'POST') {
    console.log('got here')
  } else {
    return null
  }
}