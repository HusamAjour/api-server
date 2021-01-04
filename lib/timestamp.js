module.exports = (req, res, next)=>{
    req.requestTime = new Date(Date.now()).toUTCString();
    next();
}
