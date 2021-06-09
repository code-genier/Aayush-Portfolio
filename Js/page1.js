//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const myname = document.querySelector(".name");
const desc = document.querySelector(".description");
const desc1 = document.querySelector(".description1");
const desc2 = document.querySelector(".description2");
const infoimg = document.querySelector(".infoimg");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  myname.style.transform = "translateZ(250px)";
  infoimg.style.transform = "translateZ(260px)";
  desc.style.transform = "translateZ(195px)";
  desc1.style.transform = "translateZ(185px)";
  desc2.style.transform = "translateZ(165px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  //Popback
  myname.style.transform = "translateZ(0px)";
  infoimg.style.transform = "translateZ(0px) rotateZ(0deg)";
  desc.style.transform = "translateZ(0px)";
  desc1.style.transform = "translateZ(0px)";
  desc2.style.transform = "translateZ(0px)";
});
