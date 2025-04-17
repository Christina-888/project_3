export function setOffsetHeight () {

  document.querySelector('.main').style.marginTop = `${document.querySelector('.header').offsetHeight}px`;  
      
  
}
setOffsetHeight();