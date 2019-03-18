#### 使用quickjs实现资源的预加载（已流量换用户优化）
1. 可视窗口的资源加载
2. 空闲线程资源
3. 自动监测网络情况决定是否加载资源
4. ....
#### quickjs基本原理
```js
  const observer = IntersectionObserver 判断某个元素是否进入了视野
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              const link = entry.target;
              console.log(link)
          })
      })
  Array.from(document.querySelectorAll("a"), link => {
      observer.observe(link);
  })
```
##### serviceWork的生命周期
1. 通过拦截网络请求，使得网站运行的更快，或者在离线情况下，依然可以执行，也作为后台功能的基础，比如消息推送和背景同步  
2. https注意
3. 属于js Worker，不能直接接触Dom，通过postMessage接口和页面通信

installing -》 installed activating --》activeted   
 Redundant（注册失败）
##### 繁杂的生命周期注入代码，还需要考虑版本控制，用别人的轮子更好
workbox-webpack-plugin  ： https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
