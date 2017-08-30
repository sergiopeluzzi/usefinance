
//Middleware pra driblar o cross-origin-requests CORS
module.exports =  function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Origin, Accept")
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, OPTIONS, DELETE")
    next()
}
