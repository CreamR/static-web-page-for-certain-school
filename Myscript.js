window.addEventListener('DOMContentLoaded', function () {
    let backIndex = document.querySelector('.logo');
    backIndex.addEventListener('click', function (e) {

        location.href = 'https://cn.bing.com/search?q=%E5%82%BB%E5%8D%B5%E5%AD%A6%E6%A0%A1%E5%91%B5%E5%91%B5&cvid=95f3a8dc807440b6924577439d5841ba&aqs=edge..69i57.15780j0j4&FORM=ANAB01&PC=U531';

    });

    //获取构造函数以确定实时日期
    let date = new Date();
    console.log(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDay() + ' ' + date.getHours() + ':' + date.getMinutes() + '   项目目前处于demo阶段, 创建了section轮播图与header部分并完成相对应的响应式移动端适配, 由于使用了Bootstrap5快速开发, 目前移动端无法全面适配, 仅iPhoneXR适配, 后续将在电脑端及移动端使用网络技术创建一个实时聊天室(这可能需要过几个月- 。-, 这需要一些针对TCP协议的后端技术, 暂且定为最早2022-5-1开始聊天室开发), 日后会使用相对更先进的框架二次开发, 那时本项目会具有大部分的动效设计以及用户交互');
    console.log(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDay() + ' ' + date.getHours() + ':' + date.getMinutes() + '   解决了部分bug, 新增了部分bug(轮播图有一些bug), 目前已有解决方案但需要另添加新的插件, 对本项目二次开发时将利用新插件实现更流畅的滑动操作并解决轮播图左右按钮不匹配的bug, 增加了学校要闻部分并进行排版与适配移动端iPhoneXR, 对标签li进行了弹性布局, 优化了浏览器性能.');
    console.log(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDay() + ' ' + date.getHours() + ':' + date.getMinutes() + '   改变了banner区域的字体深度与内间距, 使得字体变小边框增大, 更适合官网的风格, 解决了一些bug, 增加了移动端手风琴的组件, lorem填充是前端在未知数据且未与数据库发生数据交互的时候使用的默认填充字样.');
});

//there just a test!