(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["_layouts/website/login.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "userInfo")) {
output += "\n<div class=\"login\">\n    <a href=\"javascript:void(0)\" class=\"user-img avatar\">\n        <img src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "userInfo")),"basic_info")),"icon"), env.opts.autoescape);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "userInfo")),"basic_info")),"name"), env.opts.autoescape);
output += "\" />\n    </a>\n    <div class=\"login-out out\">\n        <a href=\"javascript:void(0)\">退出</a>\n    </div>\n</div>\n";
;
}
else {
output += "\n<div class=\"no-login btn_login\">\n    <a href=\"javascript:void(0)\">\n        <div class=\"qq-w\"></div>登录</a>\n</div>\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

