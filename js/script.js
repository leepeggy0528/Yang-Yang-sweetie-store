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

window.addEventListener("load",function () {
    let text=document.getElementById('count').value;
    document.getElementById('plus').addEventListener("click",function (e) {
        text=parseInt(text)+1;
        document.getElementById('count').value=text;
        e.stopPropagation()
    },false);
    if ( parseInt(document.getElementById('count').value)<=0) {
        document.getElementById('minus').disable=true;
        document.getElementById('minus').style.opacity='0.5';
    }else{
        document.getElementById('minus').addEventListener("click",function () {
            text=parseInt(text)-1;
            document.getElementById('count').value=text;
        },false);
    }   
},false);