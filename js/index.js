// Loader
setTimeout(loadPage,2000);

window.onscroll = function(){
   showScrollBtn();
   stickyHeader();
   revealSpan();  
};

function loadPage(){
   let div = document.querySelectorAll(".contain");
   let loader = document.querySelector(".loader");

   div.forEach(function(element){
      element.style.opacity = 1;
      element.style.display = "flex";
   });
   loader.style.opacity = 1;
   loader.style.display = "none";

}
function showScrollBtn(){
   const scrollBtn = document.querySelector(".scroll-btn");
   if(scrollY >= innerHeight-67){
      scrollBtn.style.bottom = '20px';
   }else{
      scrollBtn.style.bottom = '-50px';
   }
}
function stickyHeader(){
   const header = document.querySelector(".header");
   if(scrollY > 1){
      header.classList.add("sticky");
   }else{
      header.classList.remove("sticky");
   }
}
function revealSpan(){
   const span = document.querySelectorAll(".span");
   span.forEach( (element)=>{
      let rect = element.getBoundingClientRect();
      if(rect.top <= innerHeight){
         element.style.opacity = 1;
         element.style.marginTop = 0;
      }else{
         element.style.opacity = 0;
         element.style.marginTop = "5px";
      }
   });
}