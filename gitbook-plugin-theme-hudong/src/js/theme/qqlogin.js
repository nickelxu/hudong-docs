var $ = require('jquery');
var loginTpl = require('./loginTpl');

const LOGIN_TPL = '_layouts/website/login.html';

var page = 'documentation';

pt.setParams({
    "appid":1600001129,
    "daid":591,
    "s_url": location.protocol + "//hudong.qq.com/ptlogin",
    "style":20,
    "domain":"qq.com",
    "border_radius":1,
    "target":"self",
    "maskOpacity":40
});

window.loginCb = [];

//设置全局变量，使外部能通知重新登录事件
window.onLogin = function(){
    for(var i = 0;i < loginCb.length; i++){
        loginCb[i].call(null);
    }
};

var Data = {
    login: function (cb) {
        $.ajax({
            url: '/ajax/userVerify/userInfo',
            data: {
                from: page
            },
            success: function (re) {
                if(re.code == 200){
                    cb(re.data)
                }
            }
        });
    }
};

function getUrlParams(name, url) {

    var reg = new RegExp("(^|&|\\?|#)" + name + "=([^&]*?)(&|#|$)");

    var url = url || location.href;

    var tempHash = url.match(/#.*/) ? url.match(/#.*/)[0] : ''; //临时存储hash
    url = url.replace(/#.*/, ''); //url
    if (reg.test(tempHash)) {
        //HASH优先
        return decodeURIComponent(tempHash.match(reg)[2]);
    } else if (reg.test(url)) {
        return decodeURIComponent(url.match(reg)[2]);
    } else {
        return ''
    }

}

function login() {
    if(getUrlParams('backAct')){
        location.replace(getUrlParams('backAct'));
    }else{
        Data.login(function (data) {
            $('.header_avatar').html(nunjucks.render('_layouts/website/login.html', { userInfo: data}));
        });
    }
}

function bindEvent() {

    $('.header_avatar').on('click','.btn_login', function () {
        loginCb.push(login);
        pt.showPtui();
    });

    $('.header_avatar').on('click', '.out', function () {
        pt.logout(function (code) {
            if(code != 0){
                var html = nunjucks.render('_layouts/website/login.html', { userInfo: undefined });
                $('.header_avatar').html(html);
            }
        })
    });

    $('.header_avatar').on('click', '.avatar', function () {
        location.href = '/user-center/base-info';
    });

}

function init() {
    if(getUrlParams('act') == 'login'){
        loginCb.push(login);
        pt.showPtui();
    }
    Data.login(function (userInfo) {
        var html = nunjucks.render('_layouts/website/login.html', { userInfo: userInfo });
        $('.header_avatar').html(html);
    });
    bindEvent();
}

module.exports = {
    init: init
};
