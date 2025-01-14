/* 메인 스크롤이벤트 */

const mainTextEvet = () => {

     const titlesCont = document.querySelector(".titleCont");
     titlesCont.classList.add("active");
     setTimeout(() => {
          const mainSecondContent = document.querySelector(".mainSecondContent");
          mainSecondContent.classList.add("addHeight");

     },2000)
  
}

window.addEventListener("load", () => { mainTextEvet();})