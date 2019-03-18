self.addEventListener("message", (event) => {
    //等待共享内存地址
    const sharedArrayBuffer = event.data;
    const sharedArray = new Int32Array(sharedArrayBuffer);
    //线程变量锁定
    Atomics.wait(sharedArray, 2, 3);
    console.log("🍎");
})