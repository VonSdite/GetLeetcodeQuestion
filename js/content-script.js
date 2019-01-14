function injectCustomJs()
{
    let jsPath;
    let cssPath = 'css/bootstrap.min.css';
    let temp = document.createElement('link');
    let head = document.getElementsByTagName('head')[0];
    let headNode = head.childNodes[0];
    temp.setAttribute('rel', 'stylesheet');
    temp.href = chrome.extension.getURL(cssPath);
    head.insertBefore(temp, headNode);
   
    jsPath = 'js/jquery.min.js';
    temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    temp.src = chrome.extension.getURL(jsPath);
    head.insertBefore(temp, headNode);

    jsPath = 'js/hullabaloo.min.js';
    temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    temp.src = chrome.extension.getURL(jsPath);
    head.insertBefore(temp, headNode);

    jsPath = 'js/inject.js';
    temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    // 获得的地址类似: chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
    temp.src = chrome.extension.getURL(jsPath);
    head.insertBefore(temp, headNode);
}

setTimeout(injectCustomJs, 3000);     // 3秒后插入
