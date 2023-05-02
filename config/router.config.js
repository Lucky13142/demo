const user = require("../routers/user");
const init = require("../routers/init");
const shop = require("../routers/shop");
const errorList = require("../routers/error");
const checkToken = require("../middleware/checkToken");
// 路由配置
module.exports = app => {
    //页面渲染路由
    app.get('/', init.index)
    // 用户接口
    app.post("/api/user/register", user.register);
    app.post("/api/user/login", user.login);
    app.get("/api/user/getUserInfo/:_id",checkToken,user.getUserInfo);
    app.put("/api/user/updateUserInfo/:_id",checkToken,user.updateUserInfo);
    // 商品接口
    app.get("/api/shop/getShopList/:_id", shop.getShopList);
    app.get("/api/shop/getShopListByPage", shop.getShopListByPage);
    // 错误处理(你的路由不可以写在这后面)
    app.use(errorList.notFind);
    // 500错误
    app.use(errorList.serverError)
}



