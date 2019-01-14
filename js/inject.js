// 将文字内容放到剪切板中
function copyToClipboard(text) {
    var aux = document.createElement("textarea");
    aux.value = text;
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}

// 获取题目
function GetQuestion() {
    // 题目描述的class
    const className = 'content__eAC7';

    // 以下是获取到html需要修改style的样式
    const classStyle = 'style="margin:1em 0;font-size:13px;"';
    const preStyle = '<pre style="white-space:pre-wrap;background:#f7f9fa;padding:10px15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px;margin-top:0;margin-bottom:1em;overflow:auto;font-family:SFMono-Regular,Consolas,LiberationMono,Menlo,Courier,monospace;"';

    classRegx = new RegExp('class="' + className + '"', 'g');
    preRegx = new RegExp('<pre', 'g');
    html = document.getElementsByClassName(className)[0].outerHTML.replace(classRegx, classStyle).replace(preRegx, preStyle);
    html = '[' + document.title + ']' + '(' + document.URL + ')\n' + html;
    copyToClipboard(html);
    console.log('12120');
    $.hulla = new hullabaloo().send('已复制题目HTML代码到剪切板中', 'success');
}

function InsertButton() {
    // 要插入按钮的class的
    const insertClass = 'css-10o4wqw';

    let buttonNode = document.createElement("button");
    buttonNode.style = "border-style: solid;border-width: 0;cursor: pointer;font-family: inherit;font-weight: bold;line-height: normal;margin: 0 0 1.25em;position: relative;text-decoration: none;text-align: center;display: inline-block;padding-top: 0.75em;padding-right: 1.5em;padding-bottom: 0.8125em;padding-left: 1.5em;font-size: 1em;background-color: #296ca5;border-color: #829606;color: white;"
    buttonNode.innerHTML = '<span>获取题目</span>';
    buttonNode.onclick = GetQuestion;
    document.getElementsByClassName(insertClass)[0].appendChild(buttonNode);
}

InsertButton();
