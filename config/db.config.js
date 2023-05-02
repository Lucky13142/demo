const mongoose = require('mongoose')
// 引入默认配置
const defalut = require('../type/defalut')
const  { dbUrl } = defalut
// 连接数据库
mongoose.connect(dbUrl).then(() => console.log('数据库连接成功'))
.catch(() => console.log('数据库连接失败'))
// 创建集合规则（这里你自己定义规则意思就是表头的数据类型和限制）
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    phone: Number,
})

const shopSchema = new mongoose.Schema({
    title: String,
    img_big_logo: String,
    img_small_logo: String,
    price: String,
    current_price: String,
    stock: Number,
    is_sale: Boolean,
    is_hot: Boolean,
    goods_introduce: String
})
// 创建集合
// 第一个参数是集合名称，第二个参数是集合规则 第三个参数是集合名称(集合就是你创建的表名)
const User = mongoose.model('User', userSchema,'user')
const Shop = mongoose.model('Shop', shopSchema,'shop')
// 导出集合以便操作数据库的时候使用
module.exports = {User,Shop}
