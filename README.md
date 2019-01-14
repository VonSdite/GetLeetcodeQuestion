# GetLeetcodeQuestion
一个**获取leetcode题目信息html代码的Chrome插件**

[博客查看本文: https://vonsdite.cn/posts/31cb5475.html](https://vonsdite.cn/posts/31cb5475.html)

## 前言
写leetcode题解(特指用**markdown**写)的时候, 想把leetcode的**题目信息**也放入到题解中, 
但是又不想截图(图片占空间、而且题目可能很长, 需要分段截图),
因此想着把leetcode题目的html直接拿下来, 但是直接copy html代码,  
又会**丢失**css样式, 不能很好地将题目原样呈现出来, 而且操作**繁琐**,
所以就做了一个**获取leetcode题目信息html代码的Chrome插件**


## 环境
> - **Chrome插件**(仅适用Chrome内核的浏览器, 比如Chrome、360、QQ浏览器等)

## 使用
1. 使用命令`git`**clone**本项目
```
git clone https://github.com/VonSdite/GetLeetcodeQuestion.git
```

2. 打开**Chrome浏览器**的扩展程序(点击Chrome浏览器右上角**设置** - **更多工具** - **扩展程序(E)**)
![](/images/2019-01-14-23-54-56.png)

3. 点击**加载已解压的扩展程序**, 选择本项目即可
![](/images/2019-01-14-23-56-57.png)

## 演示
完成上述操作后, 
以后打开**leetcode**的题目就会在**题目旁边**多了如下的按钮, 点击按钮即可将题目的html代码放入到剪切板中
![](/images/2019-01-14-23-58-23.png)
![](/images/2019-01-14-23-59-14.png)

### 复制的html代码
之后只需要`ctrl`+`v`就可以粘贴代码了, 比如上面这题**Two Sum**粘贴出来的代码如下
```html
[Two Sum - LeetCode](https://leetcode.com/problems/two-sum/)
<div style="margin:1em 0;font-size:13px;"><div><p>Given an array of integers, return <strong>indices</strong> of the two numbers such that they add up to a specific target.</p>

<p>You may assume that each input would have <strong><em>exactly</em></strong> one solution, and you may not use the <em>same</em> element twice.</p>

<p><strong>Example:</strong></p>

<pre style="white-space:pre-wrap;background:#f7f9fa;padding:10px15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px;margin-top:0;margin-bottom:1em;overflow:auto;font-family:SFMono-Regular,Consolas,LiberationMono,Menlo,Courier,monospace;">Given nums = [2, 7, 11, 15], target = 9,

Because nums[<strong>0</strong>] + nums[<strong>1</strong>] = 2 + 7 = 9,
return [<strong>0</strong>, <strong>1</strong>].
</pre>

<p>&nbsp;</p>
</div></div>
```

<details><summary>markdown中的效果</summary>

[Two Sum - LeetCode](https://leetcode.com/problems/two-sum/)

<div style="margin:1em 0;font-size:13px;"><div><p>Given an array of integers, return <strong>indices</strong> of the two numbers such that they add up to a specific target.</p>

<p>You may assume that each input would have <strong><em>exactly</em></strong> one solution, and you may not use the <em>same</em> element twice.</p>

<p><strong>Example:</strong></p>

<pre style="white-space:pre-wrap;background:#f7f9fa;padding:10px15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px;margin-top:0;margin-bottom:1em;overflow:auto;font-family:SFMono-Regular,Consolas,LiberationMono,Menlo,Courier,monospace;">Given nums = [2, 7, 11, 15], target = 9,

Because nums[<strong>0</strong>] + nums[<strong>1</strong>] = 2 + 7 = 9,
return [<strong>0</strong>, <strong>1</strong>].
</pre>

<p>&nbsp;</p>
</div></div>
</details>


可以发现, 粘贴的代码与原来的html代码的区别:
1. html标签的`class`均被替换为原来的**css样式**
2. `<pre>`标签额外添加了它的**css样式**
