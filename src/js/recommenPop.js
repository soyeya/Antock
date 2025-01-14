const recommendationPopEvet = () => {

    const buttonBoxiesBtns = document.querySelectorAll(".buttonBoxies button");
    const contentList = document.querySelectorAll(".recommendationContents .contentList");

    if(buttonBoxiesBtns){
   //초기값 설정 
   buttonBoxiesBtns[0].classList.add("active");
   contentList[0].classList.add("active");

    buttonBoxiesBtns.forEach((btns, index) => {
      btns.addEventListener("click", () => {
         contentList.forEach((otherList) => {otherList.classList.remove("active");})
         buttonBoxiesBtns.forEach((otherBtns) => { otherBtns.classList.remove("active")})
         contentList[index].classList.add("active");
         btns.classList.add("active");
          
      })
    })
   }
}
recommendationPopEvet();


/* 팝업 닫히기 이벤트  */

const recommendClosePopEvet = () => {
    
   const preListBtn = document.getElementById("preListBtn");
   const recommendationsPopWrapper = document.getElementById("recommendationsPopWrappers");

   preListBtn.addEventListener("click", () => {
      recommendationsPopWrapper.classList.remove("active");

   })
}
recommendClosePopEvet();