export function animateTitle () {

  const leftPart = document.getElementById("title-left-part");
    const rightPart = document.getElementById("title-right-part");

  const scrollToPlanner = () => {
    const sectionPlanner = document.querySelector(".section-planner");
    
    if(window.pageYOffset > sectionPlanner.offsetHeight){
      
      leftPart.classList.add("left");
      rightPart.classList.add("right");
    }  
  }
  if (window.innerWidth >= 1550) {
    window.onscroll = scrollToPlanner;
  } else {
    document.querySelector(".section-planner__title-wrap").classList.add("section-planner__title-wrap_gradient");
    // leftPart.classList.add("section-planner__title_neon");
    // rightPart.classList.add("section-planner__title_neon");
  }
}
animateTitle();