const dashboardBtnEvet = () => {

    const radarBtn = document.querySelectorAll(".radar-button");

    if(radarBtn){
      radarBtn[0].classList.add("active");
    radarBtn.forEach((btn) => {
       btn.addEventListener("click", () => {
         radarBtn.forEach((otherBtn) => { otherBtn.classList.remove("active")});
         btn.classList.add("active")
       })
    })
   }
}

dashboardBtnEvet();

const moreChartPageOpen = () => {

    const tableBtns = document.querySelectorAll(".addMoreInfoBody tr");
    const openDataBoxies = document.querySelectorAll(".openDataBoxies");
    const backPage = document.querySelector(".backPage");

    if(tableBtns){

      openDataBoxies[0].classList.add("active");

      tableBtns.forEach((moreBtn) => {
         moreBtn.addEventListener("click", () =>{

            tableBtns.forEach((otherBtn) => {otherBtn.classList.remove("active")});
             moreBtn.classList.add("open");
             openDataBoxies.forEach((otherPage) => otherPage.classList.remove("active"));
             openDataBoxies[1].classList.add("active");

         })
      })
    }

    if(backPage){

      backPage.addEventListener("click", () => {

         tableBtns.forEach((otherBtn) => {otherBtn.classList.remove("active")});
         openDataBoxies.forEach((otherPage) => otherPage.classList.remove("active"));
         openDataBoxies[0].classList.add("active");
      })

    }


}

moreChartPageOpen();



//셀렉박스 이벤트


const selelctInsertEvet = () => {


   const selectBtns = document.querySelector(".selectInsertSelectsTitleBtn");
   const selectInsertSelectList = document.querySelector(".selectInsertSelectList");
    //셀렉박스 버튼 클릭 이벤트

    selectBtns.addEventListener("click", () => {


        if(selectInsertSelectList.classList.contains("active")){
           return selectInsertSelectList.classList.remove("active"),
           selectBtns.classList.remove("active");
        }
      
        selectBtns.classList.add("active");
        selectInsertSelectList.classList.add("active");

      })
 
}

selelctInsertEvet();


//viewReport 클릭시 팝업 오픈 이벤트 

/* 구성저장 팝업 불러오기 */

function viewReportPopEvet(){

   const viewPopOpenBtn = document.querySelector(".viewPopOpenBtn");
   const viewPopWrappers = document.getElementById("viewReportPopWrap");
   let viewPopHtmlFilePath = '/src/components/infomationPop.html'; 

   if(viewPopOpenBtn){

     let xhr = new XMLHttpRequest();
     xhr.open('GET', viewPopHtmlFilePath, true);
  
     xhr.onreadystatechange = function() {
  
     if (xhr.readyState == 4) {
         if (xhr.status == 200){
  
              try{
                       viewPopWrappers.innerHTML = xhr.responseText;
                    let viewPopscripts = viewPopWrappers.getElementsByTagName('script');
  
                    for (let i = 0; i < viewPopscripts.length; i++) {
                          let script = document.createElement('script');
  
                          if (viewPopscripts[i].src) {
                               script.src = viewPopscripts[i].src; // 외부 스크립트
                           } else {
                             script.textContent = viewPopscripts[i].textContent; // 인라인 스크립트
                           }
                          // 스크립트 로드 완료 후 실행
                          script.onload = () => { console.log(`viewPopup스크립트 ${i + 1} 로드 완료`);};
                          // 에러 핸들링
                          script.onerror = () => { console.error(`viewPopup스크립트 ${i + 1} 로드 실패: ${script.src || '인라인 스크립트'}`)};
 
                          document.body.appendChild(script); // 스크립트를 body에 추가하여 실행
                    }
                 }catch (error) {
                    console.log('기업정보팝업오류:', error);
              }
        }else{
           console.error('HTTP 요청 실패:', xhr.status);
        }
       }
  
     };

     xhr.send();
     console.log('기업정보팝업작동');


     viewPopOpenBtn.addEventListener("click" , () => {

     const infomationPopWrap = document.getElementById("infomationPopWrap");
        if(infomationPopWrap){
          return infomationPopWrap.classList.add("active");
        }
        infomationPopWrap.classList.remove("active");

     });

   }

}

viewReportPopEvet();