let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
let day = document.querySelector('.day');
let inputTime = +new Date('2023-1-1 12:00:00'); //返回用户输入时间的总毫秒数
countdown();
//开启定时器
setInterval(countdown, 1000);
function countdown() {
  let nowTime = +new Date(); //返回当前时间的总毫秒数，+号为了将object类型转换为number类型
  let time = (inputTime - nowTime) / 1000; //剩余时间总秒数
  let d = parseInt(time / 60 / 60 / 24);
  d = d < 10 ? '0' + d : d;
  day.innerHTML = d;
  let h = parseInt((time / 60 / 60) % 24);
  h = h < 10 ? '0' + h : h;
  hour.innerHTML = h;
  let m = parseInt((time / 60) % 60);
  m = m < 10 ? '0' + m : m;
  minute.innerHTML = m;
  let s = parseInt(time % 60);
  s = s < 10 ? '0' + s : s;
  second.innerHTML = s;
  // return /* d + '天'*/ h + '时' + m + '分' + s + '秒';
}
