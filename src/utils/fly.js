// import cookies from 'weapp-cookie'

//定义请求地址
const host = 'https://wwnlkjapi.wangzhengou.cn/api';
// const host = 'http://172.10.162.112:9999';


function request(url, method, data,params, header = {}) {
    wx.showLoading({
        title: '加载中'
    })
    return new Promise((resolve, reject) => {
        let token = wx.getStorageSync("token")
        let header = {
          'content-type': 'application/json'
          };
        if(token){
            header = {
                'content-type': 'application/json',
                // 'Authorization': 'Bearer ' + token,
                'x-token':  token
            }

        }else{

        }
        wx.request({
            url: host + url,
            method: method,
            data: data,
            params:params,
            header,
            success: function(res) {
                resolve(res.data)
            },
            fail: function(error) {
                reject(false)
            },
            complete: function() {
              wx.hideLoading();
            }
        })
    })
}

function get(obj) {
    return request(obj.url, 'GET', obj.data)
}

function post(obj) {
    return request(obj.url, 'POST', obj.data)
}

export default {
    request,
    get,
    post
}
