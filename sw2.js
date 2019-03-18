// 首先引入workbox框架
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js');
console.log(workbox);
// js的缓存策略
workbox.routing.registerRoute(
    new RegExp('.*\.js'),
    new workbox.strategies.NetworkFirst()
);
// html的缓存策略
// img的缓存策略