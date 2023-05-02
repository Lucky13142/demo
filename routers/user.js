const { User } = require("../config/db.config");
// 使用class类封装获取用户列表接口
const bcrypt = require("bcryptjs");
// 设置cookie
const cookie = require("cookie-parser");
// 导入jwt token工具类
const JwtUtil = require("../utils/jwt");
class UserList {
  // 用户注册接口 包括用户名，密码，邮箱，手机号
  // 密码使用bcryptjs加密
  // 插入数据库前须判断用户名是否存在
  async register(req, res) {
    try {
      const { username, password, email, phone } = req.body;
      const data = await User.find({ username });
      if (data.length) {
        res.send({
          code: 400,
          message: "用户名已存在",
        });
      } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const data = await User.insertMany({
          username,
          password: hash,
          email,
          phone,
        });
        res.send({
          code: 200,
          message: "注册成功",
          data,
        });
      }
    } catch (error) {
      console.log(error);
      res.send({
        message: error.message,
      });
    }
  }
  // 用户登录接口 包括用户名，密码
  async login(req, res) {
    try {
      const { username, password } = req.body;
      const data = await User.find({ username });
      console.log(data);
      if (data.length > 0) {
        const hash = data[0].password;
        const result = bcrypt.compareSync(password, hash);
        if (result) {
          // 登陆成功，添加token验证
          let _id = data[0]._id.toString();
          // 将用户id传入并生成token
          let jwt = new JwtUtil(_id);
          let token = jwt.generateToken();
          // 将 token 返回给客户端
          res.send({
            code: 200,
            message: "登录成功",
            token,
          });
        } else {
          res.send({
            code: 400,
            message: "密码错误",
          });
        }
      } else {
        res.send({
          code: 400,
          message: "用户名不存在",
        });
      }
    } catch (error) {
      console.log(error);
      res.send({
        message: error.message,
      });
    }
  }

  // 获取用户信息接口 包括用户名，邮箱，手机号
  async getUserInfo(req, res) {
    try {
      let { _id } = req.params;
      if (!_id) {
        res.json({
          code: 400,
          message: "参数错误",
        });
      }
      const data = await User.find({ _id });
      if (data.length) {
        res.send({
          code: 200,
          message: "获取成功",
          data,
        });
      } else {
        res.send({
          code: 400,
          message: "用户不存在",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  // 修改用户信息接口
  async updateUserInfo(req, res) {
   try {
    let { _id } = req.params;
    if (!_id) {
      res.json({
        code: 400,
        message: "参数错误",
      });
    }
    const user = await User.find({ _id });
    if (!user.length) {
        res.send({
            code: 400,
            message: "用户不存在",
        });
    }
    console.log(user);
    const { username, email, phone } = req.body;
    console.log(req.body);
    const data = await User.updateOne({_id:user[0]._id},{$set:{username,email,phone}});
    console.log('====>',data);
    if(data.acknowledged){
      res.send({
        code:200,
        message:'修改成功'
      })
    }else{
        res.send({
            code:400,
            message:'修改失败'
        })
    }
   } catch (e) {
    console.log(e);
   }
  }
}
module.exports = new UserList();
