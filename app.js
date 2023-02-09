
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
    let x,y,xx,yy;
    var menu = document.querySelector('.context-menu');

    x = e.clientX;
    y = e.clientY;
    xx = window.innerWidth;
    yy = window.innerHeight;

    x = xx -x < 170 ? xx - 170 : x;

    menu.style.left = x + "px";
    menu.style.top = y + "px";
    menu.style.display = "block";
});

document.addEventListener("click", function(){
    document.querySelector('.context-menu').style.display = "none";
});

document.addEventListener("scroll", function(){
    document.querySelector('.context-menu').style.display = "none";
});