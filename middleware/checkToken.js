// 封装验证令牌的中间件
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // 获取请求头中的Authorization属性
    const token = req.headers.authorization;
    if(!token){
        res.status(401).json({message: '请先登录'})
        return
    }
    let tokenData;
    try{
        tokenData = jwt.verify(token, 'secret');
        console.log(tokenData);
        next();
    }catch(err){
        res.status(401).json({message: 'token错误'})
        return
    }
    // 令牌有效时间
    if(tokenData.exp < +new Date() ){
        res.status(401).json({message: '登录已过期，请重新登录'})
        return
    }
    req.tokenData = tokenData;

}