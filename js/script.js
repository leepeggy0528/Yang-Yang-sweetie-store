$(function(){
    $(".menu li:first-child").on({
        mouseover:function(){
            $(this).children("div").stop().slideDown();
        },
        mouseout:function(){
            $(this).children("div").stop().slideUp();
        }
    });
});
$(function(){
    $(".list li").on({
        mouseover:function(){
            $(this).children("div").stop().slideDown();
        },
        mouseout:function(){
            $(this).children("div").stop().slideUp();
        }
    });
});

function openCloseMenu() {
    document.querySelector(".hamburger .menuHB").classList.toggle("open");
}
function CloseMenu() {
    document.querySelector(".hamburger .menuHB").classList.toggle("close");
}

function init() {
    if (document.querySelector(".hamburger .open")==true) {
        document.getElementById("body").onclick=CloseMenu;
    }else{
        document.getElementById("btnHamburger").onclick=openCloseMenu;
    }
}
window.addEventListener("load",init,false);

$("#top").click (function(){
    $("html,body").animate({scrollTop:0 },500);
});
