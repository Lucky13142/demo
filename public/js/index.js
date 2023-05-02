// fetch("http://localhost:3000/userList").then(res => res.json()).then(res => {
//     console.log(res);
// })
// // 测试ajax请求
// ajax("http://localhost:3000/api/user/getUserInfo", "get", {}, res => {
//  console.log(JSON.parse(res));
// })
// 瀑布流 1.获取数据 2.渲染数据 3.滚动加载获取下一页
// 1.获取数据
let page = 1;
let pageSize = 20;
let flag = true;
async function getShopList(page1, pageSize1) {
    // ajax(`http://localhost:3000/api/shop/getShopListByPage/${page}/${pageSize}`, "get", {}, res => {
    //     let data = JSON.parse(res).goods;
    //     if (data.length>0) {
    //         console.log(1);
    //         render(data)
    //     }
    // })
    if(!flag) return;
    const data = await fetch(`http://localhost:3000/api/shop/getShopListByPage?page=${page}&pageSize=${pageSize}`).then(res => res.json())
    console.log(data);
    const goods = data.goods;
    if (data.goods.length < pageSize) {
        flag = false;
    }
    render(goods)
    page++;
}
getShopList(page,pageSize);
// 2.渲染数据
function render(data) {
    let html = '';
    data.forEach(item => {
        html += `
        <div class="item">
        <div class="img-box">
            <img src="${item.img_big_logo}" alt="">
        </div>
            <p class="title">${item.title}</p>
            <p class="price">${item.price}</p>
        </div>
        `
    });
    document.querySelector(".goods-list").innerHTML += html;
}
// 节流函数
function debounce(fn, delay) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay);
    }
}

// 3.滚动加载
// 获取滚动条高度
function getScrollTop() {
    return document.documentElement.scrollTop || document.body.scrollTop;
}
//获取可视区高度
function getClientHeight() {
    return document.documentElement.clientHeight || document.body.clientHeight;
}
//获取页面高度
function getScrollHeight() {
    return document.documentElement.scrollHeight || document.body.scrollHeight;
}
//滚动加载
function fn(){
    if (getScrollTop() + getClientHeight() >= getScrollHeight() - 200) {  
            getShopList(page, pageSize)  
    }
}

window.addEventListener("scroll", debounce(fn,100))