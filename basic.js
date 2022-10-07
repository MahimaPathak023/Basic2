function show(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  getDirection : true
});
locoScroll.on("scroll", ScrollTrigger.update);

locoScroll.on("scroll", function (dets) {
  if (dets.direction === "up") {
      document.querySelector("#uppernav").style.top = "0%";
     
      
  }
  else if (dets.direction == "down") {
      document.querySelector("#uppernav").style.top = "-100%";
  }
})

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
show();

function imgAnimation(){
  const elems = document.querySelectorAll(".elems");
const imgdiv = document.querySelector("#image");

elems.forEach(function(elem){
 
  elem.addEventListener("mouseenter",function(){
    let img = elem.getAttribute("data-image");
    let w = elem.getAttribute("data-width");
    let h = elem.getAttribute("data-height");
    imgdiv.style.backgroundImage = `url(${img})`;

  })
  })
  document.querySelector("#elem-div").addEventListener("mousemove",function(dets){
   imgdiv.style.left = `${dets.x+350}px`;
   imgdiv.style.top = `${dets.y-150}px`;
   elems.h1.style.zIndex = "99999999999";
})
}
imgAnimation();

function loaderAnimation(){
  var tl = gsap.timeline();

tl.to("#title",{
  Y:-100,
  opacity:0,
  duration:0.5,
  delay:1,
  stgger:0.5
})
.to("#loadingpage",{
  top:-1000,
  duration:2,
})

}
loaderAnimation();

function showReel(){
  const showreel = document.querySelector("#showreel");
document.querySelector("#videodiv").addEventListener("mousemove", (e) =>{
   let  x = e.pageX;
   let y = e.pageY;

   showreel.style.top = y + "px";
   showreel.style.left = x + "px";
})
document.querySelector("#videodiv").addEventListener("mouseleave", function (e) {
  document.querySelector("#showreel").style.top = `2%`;
  document.querySelector("#showreel").style.left = `50%`;
})
}
showReel();

function GsapAnimation(){
  var tl2 = gsap.timeline();

tl2.from(".contentdivs",{
  opacity:0,
  y:150,
  duration:5,
  stagger:5,
  scrollTrigger: {
    scroller:"#main",
    trigger:".contentdivs",
    scrub: 20,
  }
})

var tl3 = gsap.timeline();

tl3.from("#elem-div>h1",{
  opacity:0,
  y:150,
  duration:5,
  stagger:2,
  scrollTrigger: {
    scroller:"#main",
    trigger:"#elem-div>h1",
    scrub: 0.3,
  }
})

gsap.to("#deptdiv",{
  ScrollTrigger:{
    scroller:"#main",
    trigger:"#deptdiv",
    scrub : 2,
    markers:true
  },
  backgroundColor : "#252422",
  color:"#f9cdcd",
})
}
GsapAnimation();

function GsapAnimation2(){
  var tl2 = gsap.timeline();

  tl2.from("#elem-div h1",{
    opacity:0,
    y:150,
    duration:6,
    stagger:1,
    scrollTrigger: {
      scroller:"#main",
      trigger:"#elem-div h1",
      scrub: 0.3,
    }
  })
}
GsapAnimation2();