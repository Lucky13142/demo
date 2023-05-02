// 使用xhr封装一个ajax请求
function ajax(url, method, data, success, error) {
    // 创建xhr对象
    const xhr = new XMLHttpRequest();
    // 监听xhr对象的状态
    xhr.onreadystatechange = function () {
        // 判断xhr对象的状态
        if (xhr.readyState === 4) {
            // 判断xhr对象的状态码
            if (xhr.status === 200) {
                // 调用success函数
                success(xhr.responseText);
            } else {
                // 调用error函数
                error(xhr.status);
            }
        }
    }
    // 判断请求方式
    if (method.toLowerCase() === "get") {
        // 拼接url
        url += "?";
        // 遍历data对象
        for (let key in data) {
            // 拼接url
            url += `${key}=${data[key]}&`;
        }
        // 截取url
        url = url.slice(0, -1);
        // 初始化xhr对象
        xhr.open(method, url);
        // 发送请求
        xhr.send();
    } else if (method.toLowerCase() === "post") {
        // 初始化xhr对象
        xhr.open(method, url);
        // 设置请求头
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("authorization", localStorage.getItem("token"));
        // 发送请求
        xhr.send(JSON.stringify(data));
    }
}
