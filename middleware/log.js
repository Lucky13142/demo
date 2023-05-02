// 创建日志记录功能
// 主要的目的是记录每个人，在某个时间段访问了该项目 请求时间、请求方式、客户端ip、请求路径、请求状态（默认ok）
// 1.引入fs模块
const fs = require("fs");
// 2.引入path模块
const path = require("path");
// 3.引入moment模块
const moment = require("moment");
// 4.创建日志记录中间件
module.exports = (req, res, next) => {
  // 获取请求开始时间
  let start = Date.now();
  res.on("finish", () => {
    // 5.获取请求时间
    const time = moment().format("YYYY-MM-DD HH:mm:ss");
    // 6.获取请求方式
    const method = req.method;
    // 7.获取客户端ip
    const ip = req.ip;
    // 8.获取请求路径
    const url = req.url;
    // 9.获取请求状态
    const status = res.statusCode;
    // 10.获取请求结束时间`
    const end = Date.now();
    // 11.计算请求时间
    const duration = end - start;
    // 12.创建日志记录格式
    const log = `${time} ${method} ${ip} ${url} ${status} ${duration}ms\n`;
    // 13.创建日志文件路径
    const logPath = path.join(__dirname, "../logs", "access.log");
    // 14.将日志写入到日志文件中
    fs.appendFile(logPath, log, (err) => {
      if (err) {
        console.log(err);
      }
    });
  });
  // 15.执行下一个中间件
  next();
};
