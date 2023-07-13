//页面加载完后再执行
window.addEventListener('load', function () {
  let arrow_l = document.querySelector('.arrow-l');
  let arrow_r = document.querySelector('.arrow-r');
  let focus = document.querySelector('.focus');
  focus.addEventListener('mouseenter', function () {
    arrow_l.style.display = 'block';
    arrow_r.style.display = 'block';
    clearInterval(timer);
    timer = null; //清除定时器变量
  });
  focus.addEventListener('mouseleave', function () {
    arrow_l.style.display = 'none';
    arrow_r.style.display = 'none';
    timer = setInterval(function () {
      //手动调用点击事件
      arrow_r.click();
    }, 2000);
  });
  //动态添加小圆圈
  let focusWidth = focus.offsetWidth;
  let ul = focus.querySelector('ul');
  let ol = focus.querySelector('.circle');
  for (let i = 0; i < ul.children.length; i++) {
    //记录当前小圆圈的索引号，通过自定义属性来做
    let li = document.createElement('li'); //注意此处顺序，先写这个才能创建下面的索引
    li.setAttribute('index', i);
    ol.appendChild(li);
    //小圆圈的排他思想
    li.addEventListener('click', function () {
      for (let i = 0; i < ol.children.length; i++) {
        ol.children[i].className = '';
      }
      this.className = 'current';
      let index = this.getAttribute('index');
      // console.log(focusWidth);
      // console.log(index);
      num = circle = index;
      animation(ul, -focusWidth * index);
    });
  }
  ol.children[0].className = 'current';
  //克隆最后一个节点
  let first = ul.children[0].cloneNode(true);
  ul.appendChild(first);
  //点击按钮，图片滚动
  let num = 0;
  let circle = 0;
  let flag = true;
  arrow_r.addEventListener('click', function () {
    if (flag) {
      flag = false;
      //如果走到最后一张复制的图片，将ul快速复原 left改为0
      if (num == ul.children.length - 1) {
        ul.style.left = 0;
        num = 0;
      }
      num++;
      animation(ul, -num * focusWidth, function () {
        flag = true;
      });
      circle++;
      if (circle == ol.children.length) {
        circle = 0;
      }
      for (let i = 0; i < ol.children.length; i++) {
        ol.children[i].className = '';
      }
      ol.children[circle].className = 'current';
    }
  });
  //左滑点击按钮
  arrow_l.addEventListener('click', function () {
    if (flag) {
      flag = false;
      //如果走到最后一张复制的图片，将ul快速复原 left改为0
      if (num == 0) {
        num = ul.children.length - 1;
        ul.style.left = num * focusWidth + 'px';
      }
      num--;
      animation(ul, -num * focusWidth, function () {
        flag = true;
      });
      circle--;
      circle = circle < 0 ? ol.children.length - 1 : circle;
    }
    for (let i = 0; i < ol.children.length; i++) {
      ol.children[i].className = '';
    }
    ol.children[circle].className = 'current';
  });
  //自动播放轮播图;
  var timer = setInterval(function () {
    //手动调用点击事件
    arrow_r.click();
  }, 2000);
});
