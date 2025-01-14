const infomationPopBtnEvet = () => {

    const popBtn = document.querySelectorAll(".popBtn");
    const contentPages = document.querySelectorAll(".rightContSpace");

    if(popBtn){

    //초기값 설정
    popBtn[0].classList.add("active");
    contentPages[0].classList.add("active");

    popBtn.forEach((btns, index) => {
       btns.addEventListener("click",() => {
         popBtn.forEach((otherbtns) => { otherbtns.classList.remove("active")});
         contentPages.forEach((otherPages) => otherPages.classList.remove("active"))
         btns.classList.add("active");
         contentPages[index].classList.add("active");


       })
    })
   }
}

infomationPopBtnEvet();


/* tech/invest에서 버튼 클릭시 리스트오픈 */

const techInvestBtnEvet = () =>{

    const openInvestBtn = document.querySelectorAll(".openInvestBtn");
    const hiddenWrap = document.querySelectorAll(".hiddenWrap");

    openInvestBtn.forEach((thisBtn,indx) => {
       thisBtn.addEventListener("click", () =>{
         if(thisBtn.classList.contains("active")){
             return thisBtn.classList.remove("active"),
             hiddenWrap[indx].classList.remove("active");
         }
         thisBtn.classList.add("active");
         hiddenWrap[indx].classList.add("active");
       })
    })
}

techInvestBtnEvet();


//팝업닫기 이벤트

const infomationClosePopEvet = () => {
    
   const closePop = document.querySelector(".closePop");
   const infomationPopWrap = document.getElementById("infomationPopWrap");
   
   if(closePop){
   closePop.addEventListener("click", () => {
       console.log('팝업끄기')
       infomationPopWrap.classList.remove("active");
   })
}
}

infomationClosePopEvet();