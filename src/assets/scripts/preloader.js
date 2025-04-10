export function showPreloader () {

// должно работать так:
// window.onload = function(){
//     const preloader = document.querySelector('.container__preloader');
//     preloader.style.display = 'none';
// }



  document.querySelector('.container__wrap').style.display = 'none';

  window.onload = function(){
    setTimeout( () => {
      const preloader = document.querySelector('.container__preloader');
      preloader.style.display = 'none';
      document.querySelector('.container__wrap').style.display = 'block';
    
    },1500)
  }
}
showPreloader();
