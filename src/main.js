let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `/* 你好，我是一名前端新人
 * 你好，我是一名前端新人
 * 下面开始加样式啦
 */
#div1 {
    border: 1px solid black;
    width: 200px;
    height: 200px;
}

#div1 {
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(0,0,0,0.8);
    border: none;
}

#div1 {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

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
    },0);
};

step();


