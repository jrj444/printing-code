parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#html"),r=document.querySelector("#style"),a="/* 你好，我是一名前端新人\n * 下面代码将会给大家展示一个八卦图\n * 注意看屏幕的右边，如果你是用手机查看，请看屏幕下方\n * 让我们先画一个正方形吧~\n */\n\n#div1 {\n    border: 1px solid black;\n    width: 200px;\n    height: 200px;\n}\n\n/* 然后把它变成圆形，加上阴影\n * 接着上色，八卦图是一黑一白的\n */ \n\n#div1 {\n    border-radius: 50%;\n    box-shadow: 0 0 20px rgba(0,0,0,0.8);\n    border: none;\n}\n\n#div1 {\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n\n/* 现在我们就可以画它里面的部分啦\n * 同样是两个圆，一黑一白。\n */ \n\n#div1::before {\n    width: 100px;\n    height: 100px;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: white;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n}\n\n#div1::after {\n    width: 100px;\n    height: 100px;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: black;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n\n/* 最后我们给它加点动画吧\n * 让它自己转动起来！\n */ \n\n@keyframes rotate {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n#div1 {\n    animation: rotate 8s linear infinite;\n}\n ",e=0,t="",o=function o(){setTimeout(function(){"\n"===a[e]?t+="<br>":" "===a[e]?t+="&nbsp":t+=a[e],n.innerHTML=t,r.innerHTML=a.substring(0,e),window.scrollTo(0,99999),n.scrollTo(0,99999),e<a.length-1&&(e++,o())},0)};o();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.e317f3e4.js.map