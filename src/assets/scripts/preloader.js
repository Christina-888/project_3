export function showPreloader () {

// должно работать так:
// window.onload = function(){
//     const preloader = document.querySelector('.container__preloader');
//     preloader.style.display = 'none';
        // document.querySelector('.main').style.marginTop = `${document.querySelector('.header__wrap').offsetHeight / 16}rem`; 
    
// }


//тут нужно будет закомментировать
  document.querySelector('.container__wrap').style.display = 'none';

  window.onload = function(){
    setTimeout( () => {
      const preloader = document.querySelector('.container__preloader');
      preloader.style.display = 'none';
      document.querySelector('.container__wrap').style.display = 'block';
      document.querySelector('.main').style.marginTop = `${document.querySelector('.header__wrap').offsetHeight / 16}rem`;        
    },1500) 
  }
}
showPreloader();

