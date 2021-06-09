const bgtxt2=document.querySelector('.bg_txt2');
const bgtxt3=document.querySelector('.bg_txt3');
const page2=document.querySelector('.page2');
const page3=document.querySelector('.page3');
const page4=document.querySelector('.page4')
const page1=document.querySelector('.page1')


document.addEventListener('DOMContentLoaded', () => {
    let mousePosX = 0,
        mousePosY = 0,
        mouseCircle = document.getElementById('mouse-circle');
        mouseCircle2 = document.getElementById('mouse-circle2');

    document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    }

    let delay = 6,
        revisedMousePosX = 0,
        revisedMousePosY = 0;

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);

        revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
        revisedMousePosY += (mousePosY - revisedMousePosY) / delay; 

        mouseCircle.style.top = revisedMousePosY + 'px';
        mouseCircle.style.left = revisedMousePosX + 'px';
        mouseCircle2.style.top = revisedMousePosY-5.5 + 'px';
        mouseCircle2.style.left = revisedMousePosX-5.5 + 'px';
    }
    delayMouseFollow();
});

page1.addEventListener('mouseover',(e)=>{
    console.log('here')
    bgtxt2.style.left=-25+'%';
    bgtxt3.style.left=100+'%';
})
page2.addEventListener('mouseover',(e)=>{
    bgtxt2.style.left=-14+'%';
})
page3.addEventListener('mouseover',(e)=>{
    bgtxt2.style.left=-25+'%';
    bgtxt3.style.left=100+'%';
})
page4.addEventListener('mouseover',(e)=>{
    bgtxt3.style.left=70+'%';
    bgtxt2.style.left=-25+'%';
})

