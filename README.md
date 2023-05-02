# demoexpress
## npm i 下载依赖
## 本模板是mongoDB数据库
## 商品添加数据
```js
db.shop.insertMany([
	{
		 title: "iPadPro2022",
    img_big_logo: "https://img11.360buyimg.com/n7/jfs/t1/177739/7/29917/62228/634ee1c0Edf2cbba5/90cae02302ce2e7c.jpg",
    img_small_logo: "https://img11.360buyimg.com/n7/jfs/t1/177739/7/29917/62228/634ee1c0Edf2cbba5/90cae02302ce2e7c.jpg",
    price: "6799",
    current_price: "6599",
    stock: 12,
    is_sale: true,
    is_hot: true,
    goods_introduce: "Apple iPad Pro 11英寸平板电脑 2022年款(128G WLAN版/M2芯片Liquid视网膜",
	},
	{
		 title: "iPad2022",
    img_big_logo: "https://img14.360buyimg.com/n7/jfs/t1/174049/33/36322/74107/643e0b7aF295b944b/0701d364fbae48f7.jpg.avif",
    img_small_logo: "https://img14.360buyimg.com/n7/jfs/t1/174049/33/36322/74107/643e0b7aF295b944b/0701d364fbae48f7.jpg.avif",
    price: "3649",
    current_price: "3549",
    stock: 12,
    is_sale: true,
    is_hot: true,
    goods_introduce: "苹果（Apple）ipad2022款第10代10.9英寸苹果平板电脑 WLAN版 蓝色 64G【 国",
	},
	{
		 title: "iPad10代",
    img_big_logo: "https://img10.360buyimg.com/n7/jfs/t1/168402/6/30833/24950/634ee32dEf4e97c55/a4c1ecc8e1989c22.jpg.avif",
    img_small_logo: "https://img10.360buyimg.com/n7/jfs/t1/168402/6/30833/24950/634ee32dEf4e97c55/a4c1ecc8e1989c22.jpg.avif",
    price: "3899",
    current_price: "3599",
    stock: 12,
    is_sale: true,
    is_hot: true,
    goods_introduce: "Apple iPad（第 10 代）10.9英寸平板电脑 2022年款（64GB WLAN版/A14芯",
	},
	{
		 title: "iPadmini",
    img_big_logo: "https://img10.360buyimg.com/n7/jfs/t1/199029/33/8469/158695/61411f3eE7f0b476e/28a2f7d33f216b2b.jpg.avif",
    img_small_logo: "https://img10.360buyimg.com/n7/jfs/t1/199029/33/8469/158695/61411f3eE7f0b476e/28a2f7d33f216b2b.jpg.avif",
    price: "5499",
    current_price: "5199",
    stock: 12,
    is_sale: true,
    is_hot: true,
    goods_introduce: "Apple iPad mini（第 6 代）8.3英寸平板电脑 2021年款（256GB WLAN版/A15芯",
	},
])
```
