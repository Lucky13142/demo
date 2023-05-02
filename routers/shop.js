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
    // 获取商品列分页显示
    async getShopListByPage(req, res) {
        try {
            let { page, pageSize } = req.query;
            page = parseInt(page);
            pageSize = parseInt(pageSize);
            const data = await Shop.find()
            const goods = await Shop.find()
                .skip((page - 1) * pageSize)
                .limit(pageSize);
                console.log(data);
            // 如果没有数据 则不接受此次请求
            if (!goods.length) {
                res.send({
                    code: 400,
                    message: "没有更多数据了",
                });
                return;
            }
           
            res.send({
                code: 200,
                message: "获取成功",
                total:data.length,
                page,
                pageSize:goods.length,
                goods,
            });
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = new ShopList();