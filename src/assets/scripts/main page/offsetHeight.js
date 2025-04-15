export function setOffsetHeight() { 

  document.querySelector(".container").addEventListener('click', (evt) => {
    const href = evt.target.href;
    if (evt.target.tagName === "A" && href.includes("index")) {

      const firstLetterIndex = href.indexOf("#") + 1;

      let idSection = "";

      for (let i=firstLetterIndex; i<href.length; i++) {
        idSection += href[i];
      }
      console.log(idSection);
      
      const section = document.getElementById(idSection);

      section.style.scrollMarginTop = `${document.querySelector('.header').offsetHeight / 16}rem`;
    
    }
  });

}
setOffsetHeight();

  
  

