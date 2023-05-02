fetch("http://localhost:3000/userList").then(res => res.json()).then(res => {
    console.log(res);
})
// 测试ajax请求
ajax("http://localhost:3000/api/user/getUserInfo", "get", {}, res => {
 console.log(JSON.parse(res));
})
