// 引入模块依赖
const jwt = require('jsonwebtoken');
// 创建 token 类
class Jwt {
    constructor(data) {
        this.data = data
    }
    //生成token
    generateToken() {
        let data = this.data;
        let created = Date.now();
        // 私钥可以保存在文件中在读取
        let cert = 'secret';
        let token = jwt.sign({
            data,
            startTime:+new Date(),
            exp: created + 60*1000
        }, cert, { algorithm: 'HS256' });
        return token;
    }
    // 校验token 还没写完
    verifyToken() {
        let token = this.data;
        // 公钥可以保存在文件中在读取
        console.log('token',token);
        let certs = 'haha';
        let res;
        try {
            console.log(1);
            let result = jwt.verify(token, certs) || {};
            console.log(result);
            let { exp = 0 } = result, current = Date.now();
            if (current <= exp) {
                res = result.data || {};
            }
        }catch(err){
            res = "err";
        }
        return res;
    }
}
module.exports = Jwt;