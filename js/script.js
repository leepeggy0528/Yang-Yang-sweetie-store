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
