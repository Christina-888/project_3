export function setOffsetHeight() { 

  document.querySelector(".container").addEventListener('click', (evt) => {
    const href = evt.target.href;
    if (evt.target.tagName === "A" && href.includes("index")) {
      console.log("cat");

      const firstLetterIndex = href.indexOf("#") + 1;

      console.log(firstLetterIndex);

      let idSection = "";

      for (let i=firstLetterIndex; i<href.length; i++) {
        idSection += href[i];
      }
      console.log(idSection);
      
      const section = document.getElementById(idSection);

      console.log(section);

      section.style.scrollMarginTop = `${document.querySelector('.header__wrap').offsetHeight / 16}rem`;
    
    }
  });

}
setOffsetHeight();

  
  

