
window.onscroll = function() { myFunction() };
function myFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById('nav').className = 'navFixed';
    } else {
        document.getElementById('nav').className = 'navIndex';
    }
}

//MENU LEVEL 1
/* KHI MOUSEOVER VÀO CHỮ SẢN PHẨM SẼ HIỂN THỊ MENU */
document.getElementById('product').addEventListener('mouseover', function () {
    document.getElementById('menu').style.display = "block";
}, false);

/* KHI MOUSELEAVE RA KHỎI CHỮ SẢN PHẨM SẼ TẮT MENU VÀ RESET LẠI CÁC MENU CON */
document.getElementById('product').addEventListener('mouseleave', function () {
    document.getElementById('menu').style.display = "none";
    document.getElementById('hairTool__options').style.display = "none";
    document.getElementById('tattoo__options').style.display = "none";
    document.getElementById('wax__options').style.display = "none";
    document.getElementById('fashion__options').style.display = "none";
}, false);

/* KHI MOUSEOVER VÀO MENU THÌ MENU VẪN HIỂN THỊ (ĐỂ GIỮ SỰ HIỂN THỊ CỦA MENU) */
document.getElementById('menu').addEventListener('mouseover', function () {
    document.getElementById('menu').style.display = "block";
}, false);

/* KHI MOUSELEAVE RA KHỎI VÙNG MENU THÌ MENU SẼ TẮT VÀ RESET LẠI CÁC MENU CON */
document.getElementById('menu').addEventListener('mouseleave', function () {
    document.getElementById('menu').style.display = "none";
    document.getElementById('hairTool__options').style.display = "none";
    document.getElementById('tattoo__options').style.display = "none";
    document.getElementById('wax__options').style.display = "none";
    document.getElementById('fashion__options').style.display = "none";
}, false);

//MENU LEVEL 2
/* KHI HIỂN THỊ HAIRTOOL THÌ CÁC MENU CON KHÁC SẼ TẮT */
document.getElementById('hairTool').addEventListener('mouseover', function () {
    document.getElementById('hairTool__options').style.display = "block";
}, false);
document.getElementById('hairTool').addEventListener('mouseleave', function () {
    document.getElementById('hairTool__options').style.display = "none";
}, false);

/* KHI HIỂN THỊ TATTOO THÌ CÁC MENU CON KHÁC SẼ TẮT */
document.getElementById('tattoo').addEventListener('mouseover', function () {
    document.getElementById('tattoo__options').style.display = "block";
}, false);
document.getElementById('tattoo').addEventListener('mouseleave', function () {
    document.getElementById('tattoo__options').style.display = "none";
}, false);

/* KHI HIỂN THỊ WAX THÌ CÁC MENU CON KHÁC SẼ TẮT */
document.getElementById('wax').addEventListener('mouseover', function () {
    document.getElementById('wax__options').style.display = "block";
}, false);
document.getElementById('wax').addEventListener('mouseleave', function () {
    document.getElementById('wax__options').style.display = "none";
}, false);

/* KHI HIỂN THỊ FASHION THÌ CÁC MENU CON KHÁC SẼ TẮT */
document.getElementById('fashion').addEventListener('mouseover', function () {
    document.getElementById('fashion__options').style.display = "block";
}, false);
document.getElementById('fashion').addEventListener('mouseleave', function () {
    document.getElementById('fashion__options').style.display = "none";
}, false);
