export function animateSplitTitle () {

  const scrollToPlanner = () => {
    const sectionPlanner = document.querySelector(".section-planner");
    if(window.pageYOffset > sectionPlanner.offsetHeight){
      
      document.getElementById("title-left-part").classList.add("left");
      document.getElementById("title-right-part").classList.add("right");
    }  
  }
  
  window.onscroll = scrollToPlanner;
}
animateSplitTitle();