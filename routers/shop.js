const { Shop } = require("../config/db.config");

class ShopList {
    // 根据id获取商品列表
    async getShopList(req, res) {
        try {
            let { _id } = req.params;
            if (!_id) {
                res.json({
                    code: 400,
                    message: "参数错误",
                });
            }
            const data = await Shop.find({ _id });
            if (data.length) {
                res.send({
                    code: 200,
                    message: "获取成功",
                    data,
                });
            } else {
                res.send({
                    code: 400,
                    message: "商品不存在",
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = new ShopList();