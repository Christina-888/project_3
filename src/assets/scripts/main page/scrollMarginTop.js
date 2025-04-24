export function scrollMarginTop() { 

  document.querySelector("nav").addEventListener('click', (evt) => {
    const href = evt.target.href;
    if (evt.target.tagName === "A" && href.includes("index")) {

      const firstLetterIndex = href.indexOf("#") + 1;

      let idSection = "";

      for (let i=firstLetterIndex; i<href.length; i++) {
        idSection += href[i];
      }

      const section = document.getElementById(idSection);

      if (idSection == "project") {
        section.style.scrollMarginTop = `${+(document.querySelector('.header').offsetHeight) + 80}px`;
      } else {
        section.style.scrollMarginTop = `${document.querySelector('.header').offsetHeight}px`;
      }
      
    }
  });

}
scrollMarginTop();

  
  

