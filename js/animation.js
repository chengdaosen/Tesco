function animation(obj, target, callback) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    // 步长值写到定时器里面
    //把步长值写成整数
    let step = (target - obj.offsetLeft) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step); //得到一个整数，往大的取
    if (obj.offsetLeft == target) {
      clearInterval(obj.timer);
      //回调函数写在定时器结束里
      // if (callback) {
      //   callback;
      // }
      callback && callback();
    }
    obj.style.left = obj.offsetLeft + step + 'px';
  }, 15);
}
