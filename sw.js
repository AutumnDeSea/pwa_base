/**
 * 1.self 表示 Service Worker作用域
 * 2.caches 表示Service Worker接管的页面
 * 3.skipWaiting 表示强制当前处在Waitting的状态脚本直接进入activate
 */
//缓存版本的文件戳
var cacheName = "ydPWA-step-v1";
//缓存的资源列表
var filesTocache = [
    "/scripts/index.js",
    "/images/timg.jpeg",
    "/scripts/test.js",
    "/",
    "/demo2.html"
];
//安装阶段去定义怎么缓存当前的文件
self.addEventListener("install", function (event) {
    console.log("安装成功");
    event.waitUntil(updateStaticCache());
})

function updateStaticCache() {
    //对所有的静态资源进行缓存的过程
    return caches.open(cacheName)
        .then(function (cache) {
            return cache.addAll(filesTocache);
        }).then(() => self.skipWaiting());
}
//更新缓存的版本
self.addEventListener("activate", function (event) {
    event.waitUntil(caches.keys().then(function (keyList) {
        return Promise.all(keyList.map(function (key) {
            if (key !== cacheName) {
                return caches.delete(key);
            }
        }))
    }))
})
// 缓存中有从缓存中拿，没有的话就从fetch文件
self.addEventListener("fetch", function (event) {
    // event.respondWith(new Response("Hello World"))
    event.respondWith(
        caches.match(event.request).then(function(response){
            return response || fetch(event.request);
        })
    );
})