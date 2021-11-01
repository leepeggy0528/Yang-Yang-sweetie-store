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

window.addEventListener("load",function(){
    let img=document.querySelectorAll(".pt_else img");
    for (let i = 0; i < img.length; i++) {
        img[i].addEventListener('click',function (e){
            let small=e.target;
            small_src=small.src;
            document.getElementById("large").src=small_src;
        },false);
    }
}, false);
