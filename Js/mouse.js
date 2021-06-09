const mouseCircle = document.getElementById('mouse-circle');
const master_div=document.querySelector('.master_div');
const about_right=document.querySelector('.about_right');
const skills_left=document.querySelector('.skills_left');
const animate=document.querySelector('.animate');
const touch=document.querySelector('.touch');
const followright=document.querySelector('.followright');
const end=document.querySelector('.end');
console.log('here')
//zoom in
about_right.addEventListener('mouseover',()=>{
    mouseCircle.style.transform='scale(1.3,1.3)';
})
skills_left.addEventListener('mouseover',()=>{
    mouseCircle.style.transform='scale(1.3,1.3)';
})
animate.addEventListener('mouseover',()=>{
    mouseCircle.style.transform='scale(1.3,1.3)';
})
end.addEventListener('mouseover',()=>{
    mouseCircle.style.transform='scale(1.3,1.3)';
})
touch.addEventListener('mouseover',()=>{
    mouseCircle.style.transform='scale(1.3,1.3)';
})
followright.addEventListener('mouseover',()=>{
    mouseCircle.style.transform='scale(1.3,1.3)';
})
// zoom out
end.addEventListener('mouseout',()=>{
    mouseCircle.style.transform='scale(1,1)';
})
about_right.addEventListener('mouseout',()=>{
    mouseCircle.style.transform='scale(1,1)';
})
skills_left.addEventListener('mouseout',()=>{
    mouseCircle.style.transform='scale(1,1)';
})
animate.addEventListener('mouseout',()=>{
    mouseCircle.style.transform='scale(1,1)';
})
touch.addEventListener('mouseout',()=>{
    mouseCircle.style.transform='scale(1,1)';
})
followright.addEventListener('mouseout',()=>{
    mouseCircle.style.transform='scale(1,1)';
})