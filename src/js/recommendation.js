const recommendationOpenEvet = () => {

     const checkOutBtn = document.querySelector(".checkOutBtn");
     const recommanInfoCont = document.querySelectorAll(".recommenInfo article");
     const fixedSwiperCont = document.querySelectorAll(".fixedSwiperCont");
     
     const recommendBtn = document.querySelector(".recommendBtn");
     const mainInfos = document.querySelectorAll(".mainInfos");
     const mainInfoRecomBack = document.querySelector(".mainInfoRecomBack");


     mainInfos.forEach((infos) => { infos.classList.remove("active")});
     mainInfos[0].classList.add("active");

   //첫번째 화면 checkout클릭시 오픈
   if(checkOutBtn){
        
    recommanInfoCont.forEach((content) => content.classList.add("active"));
    fixedSwiperCont[0].classList.add("active");

     checkOutBtn.addEventListener("click", () => {
        recommanInfoCont.forEach((content) => content.classList.remove("active"));
        recommanInfoCont[0].classList.add("active");
        fixedSwiperCont.forEach((list) => { list.classList.remove("active")});
        fixedSwiperCont[1].classList.add("active");
     })
    }

    //recommand 버튼클릭시 

    if(recommendBtn){
      recommendBtn.addEventListener("click", () => {

         mainInfos.forEach((infos) => { infos.classList.remove("active")});
         mainInfos[1].classList.add("active");

      })
    }

    //recommand back클릭시 
    if(mainInfoRecomBack){

      mainInfoRecomBack.addEventListener("click", () => {

         mainInfos.forEach((infos) => { infos.classList.remove("active")});
         mainInfos[0].classList.add("active");

      })
    }

}

recommendationOpenEvet();


/* swiper 영역내 버튼 클릭시 팝업 오픈 이벤트 */

const recommendPopOpenEvet = () => {

const recommendOpenPopBtn = document.querySelectorAll(".moreInfoPop");
const recommendationsPopWrappers = document.getElementById("recommendationsPopWrappers");

recommendOpenPopBtn.forEach((thisBtn) => {

   thisBtn.addEventListener("click", () =>{

      recommendOpenPopBtn.forEach((others) => { others.classList.remove("active")});
      thisBtn.classList.add("active");
      recommendationsPopWrappers.classList.add("active");

   })
})

}

recommendPopOpenEvet();


