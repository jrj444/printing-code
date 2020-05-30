let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `/* 你好，我是一名前端新人
 * 下面代码将会给大家展示一个八卦图
 * 注意看屏幕的右边，如果你是用手机查看，请看屏幕下方
 * 让我们先画一个正方形吧~
 */

#div1 {
    border: 1px solid black;
    width: 200px;
    height: 200px;
}

/* 然后把它变成圆形，加上阴影
 * 接着上色，八卦图是一黑一白的
 */ 

#div1 {
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(0,0,0,0.8);
    border: none;
}

#div1 {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/* 现在我们就可以画它里面的部分啦
 * 同样是两个圆，一黑一白。
 */ 

#div1::before {
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}

#div1::after {
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}

/* 最后我们给它加点动画吧
 * 让它自己转动起来！
 */ 

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

#div1 {
    animation: rotate 8s linear infinite;
}
 `;

let n = 0;

let string2 = "";

let step = () => {
    setTimeout(()=>{
        if (string[n] === '\n') {
            string2 += '<br>';
        } else if (string[n] === " ") {
            string2 += '&nbsp';
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            n++;
            step();
        }
    },50);
};

step();


