
  //라디오 영역 _ purpose
  const matchRadios01 = document.querySelectorAll('input[name="matchingStepBoxs"]');
  const categoryValues01 = document.querySelector(".categoryBoxs01");
  //체크박스 영역 _industry
  const matchCheckbox = document.querySelectorAll('input[type="checkbox"]');
  const categoryValues02 = document.querySelector(".categoryBoxs02");
  //라디오 영역 _ stage   
  const matchRadios02 = document.querySelectorAll('input[name="stageBoxs"]');
  const categoryValues03 = document.querySelector(".categoryBoxs03");

  let industryLabels = document.querySelectorAll(".industryLabels");
  let stageLabels = document.querySelectorAll(".stageLabels");



/* 라디오버튼, 체크박스 컨텐츠 함수(오른쪽 메뉴 삭제버튼이 있는 경우의 값 담는 로직 포함) _이전, 다음, 삭제버튼  */

const matchingStepEvet = () => {

  const nowChecked = document.querySelectorAll(".nowChecked");
  const radioLabels = document.querySelectorAll(".matchLabels");
  const nowStep = document.querySelectorAll(".stepBoxs ul .nowStep");
  const lineAdd = document.querySelectorAll(".lineBoxs em");
  const thirdLineBoxs = document.querySelector(".thirdLineBoxs");

  //각 목록에 따른 섹션과 next, prev버튼
  const matchSection = document.querySelectorAll(".matchWrap section");
  const mathNextBtn = document.querySelectorAll(".matchWrap .matchNextBtn");
  const matchPrevBtn = document.querySelectorAll(".matchWrap .matchPrevBtn");


   //최초의값 설정
   matchSection[0].classList.add("active");
   nowStep[0].classList.add("active");
   lineAdd[0].classList.add("active");
   thirdLineBoxs.classList.remove("active");
  

 //모든값 초기화 함수
const returnInitial = () => {

  radioLabels.forEach(otherLabels => { otherLabels.style.opacity = '0.6';
    otherLabels.classList.remove("active");
  });
  matchCheckbox.forEach((checkbox) => { checkbox.checked = false;});
  matchRadios01.forEach((radios) => { radios.checked = false;});
  matchRadios02.forEach((radios) => { radios.checked = false;});
  matchSection.forEach((otherSection) => otherSection.classList.remove("active"));
  nowStep.forEach((nowBtns) => nowBtns.classList.remove("active"));
  lineAdd.forEach((nowLines) => nowLines.classList.remove("active"));
  nowChecked.forEach((allCheck) => allCheck.classList.remove("active"));
  categoryValues01.innerHTML = '';
  categoryValues02.innerHTML = '';
  categoryValues03.innerHTML = '';
  thirdLineBoxs.classList.remove("active");

}

//purpose 라디오버튼 이벤트
   matchRadios01.forEach( (button, indx) => {

      button.addEventListener('change', function() {

          //오른쪽메뉴 체크표시
          nowChecked[0].classList.add("active");
          //값 담기
          categoryValues01.innerHTML = `<div class="categoriesWrap"><span>${this.value}</span><button class="addCloseBtn"></button></div>`;

          //purpose 화면 라벨영역 디자인변화
          radioLabels.forEach(otherLabels => {
            otherLabels.style.opacity = '0.6';
            otherLabels.classList.remove("active");
          });
          radioLabels[indx].style.opacity = '1';
          radioLabels[indx].classList.add("active");

           //purpose에서 next 버튼 클릭시
            mathNextBtn[0].addEventListener("click", () => {
            
            if(button.checked === true){

                if(matchRadios01[1].checked == true){ //investor클릭시
                  nowChecked[1].classList.add("active");
                }
                matchSection.forEach((otherSection) => otherSection.classList.remove("active")),
                matchSection[1].classList.add("active"),
                nowStep[1].classList.add("active"),
                lineAdd[1].classList.add("active");
            }
            })


          //purpose 삭제버튼 클릭시
          const addCloseBtn = document.querySelector(".categoryBoxs01 .addCloseBtn");
          
          if(addCloseBtn){
              addCloseBtn.addEventListener("click", () => {
              returnInitial();
              button.checked = false;
              matchSection[0].classList.add("active");
              nowStep[0].classList.add("active");
              lineAdd[0].classList.add("active");
             })
          }

      });
      
  });


  //industry 체크박스이벤트
  matchCheckbox.forEach((button) => {

    button.addEventListener('change', function() {

    
        //오른쪽 체크표시
        nowChecked[0].classList.add("active");
        nowChecked[1].classList.add("active");


        //값 담기
        if(matchRadios01[0].checked === true){ //banker를 클릭했을 경우
          if (this.checked) { //다른체크박스는 선택할 수 없는 로직추가
          matchCheckbox.forEach(otherCheckbox => {
            if (otherCheckbox !== this) {
                otherCheckbox.checked = false;
            }
          });
          categoryValues02.innerHTML = `<div class="categoriesWrap"><span>${this.value}</span><button class="addCloseBtn"></button></div>`;
          }
        }



        //industry에 삭제버튼 클릭시
        const addCloseBtn02 = document.querySelector(".categoryBoxs02 .addCloseBtn");
        
        if(addCloseBtn02){
            addCloseBtn02.addEventListener("click", () => {
            categoryValues02.innerHTML = ``;
            nowChecked[1].classList.remove("active");
            button.checked = false;
            radioLabels.forEach((labels) => { labels.classList.remove("active");  labels.style.opacity = '1';});
            matchSection.forEach((otherSection) => otherSection.classList.remove("active"));
            matchSection[1].classList.add("active");
           })
        }

    });
    
        //industry에서 next클릭시
        mathNextBtn[1].addEventListener("click", () => {

          if(button.checked === true && matchRadios01[2].checked === true){ //icubator클릭 후 next버튼 클릭시 
          matchRadios02.forEach((radios) => { radios.setAttribute('onclick', 'return false');})
          matchRadios02[0].checked = true; //birth-stage값 true
          matchSection.forEach((otherSection) => otherSection.classList.remove("active"));
          matchSection[2].classList.add("active");
          nowStep[2].classList.add("active");
          lineAdd[2].classList.add("active");

          }else if(button.checked === true && matchRadios01[2].checked != true){//banker, investor클릭 후 next버튼 클릭시 
            matchSection.forEach((otherSection) => otherSection.classList.remove("active"));
            matchSection[2].classList.add("active");
            nowStep[2].classList.add("active");
            lineAdd[2].classList.add("active");
            matchRadios02.forEach((others) => {
              others.checked = false;
              others.setAttribute('onclick', 'return true')
            })
          }
          
          }) 

});


//stage 라디오버튼 이벤트
matchRadios02.forEach( (button, indx) => {

  button.addEventListener('change', function() {

      //오른쪽메뉴 체크표시
      nowChecked[2].classList.add("active");
      categoryValues03.innerHTML = `<div class="categoriesWrap"><span>${this.value}</span><button class="addCloseBtn"></button></div>`;

       //stage에서 next 버튼 클릭시
        mathNextBtn[2].addEventListener("click", () => {
        
        if(button.checked === true){
          // window.location.href = ("/src/components/list.html");
        }
        })


      //stage 삭제버튼 클릭시
      const addCloseBtn = document.querySelector(".categoryBoxs03 .addCloseBtn");
      
      if(addCloseBtn){
          addCloseBtn.addEventListener("click", () => {

          button.checked = false;
          matchSection.forEach((otherSection) => otherSection.classList.remove("active"));
          matchSection[2].classList.add("active");
          nowStep.forEach((nowBtns) => nowBtns.classList.add("active"));
          lineAdd.forEach((nowLines) => nowLines.classList.add("active"));
          nowChecked.forEach((allCheck) => allCheck.classList.add("active"));
          nowChecked[2].classList.remove("active");
          categoryValues03.innerHTML = '';

         })
      }

  });
  
});


//이전버튼클릭시 이벤트
//industry에서 이전버튼 클릭시
matchPrevBtn[0].addEventListener("click", () => {
          
  returnInitial();
  matchSection[0].classList.add("active");
  nowStep[0].classList.add("active");
  lineAdd[0].classList.add("active");

})

//stage에서이전버튼클릭시
matchPrevBtn[1].addEventListener("click", () => {
          
  matchSection.forEach((otherSection) => otherSection.classList.remove("active"));
  nowStep.forEach((nowBtns) => nowBtns.classList.remove("active"));
  lineAdd.forEach((nowLines) => nowLines.classList.remove("active"));
  nowChecked.forEach((allCheck) => allCheck.classList.remove("active"));
  matchSection[1].classList.add("active");
  nowStep[1].classList.add("active");
  lineAdd[1].classList.add("active");
  nowStep[0].classList.add("active");
  lineAdd[0].classList.add("active");
  nowChecked[0].classList.add("active");
  nowChecked[1].classList.add("active");
  if(matchRadios01[2].checked != true){ //banker, investor클릭 후 stage에서 이전 버튼 클릭시
    matchRadios02.forEach((radios) => { radios.checked = false;});
    categoryValues03.innerHTML = '';
  }

})

   
}

matchingStepEvet();



/* purpose 선택에 따른 industry 체크박스 상태 및 선택된 value값 오른쪽 메뉴에 표시 이벤트 (삭제버튼이 없는 값 담는 로직 포함) */
function radioDataEvet(){

   //purpose클릭시 이벤트 
    matchRadios01.forEach((button) => {

      button.addEventListener('change', function() {

        //banker클릭시
        if(button.checked === true && button.value === `banker`){
          matchCheckbox.forEach((otherList, idx) => { 
            if(idx > 3){ return otherList.setAttribute('onclick', 'return false');}
             otherList.checked = false;
             otherList.setAttribute('onclick', 'return true');
          })
           industryLabels.forEach((otherLabel, index) => {
            if(index > 3){ return otherLabel.classList.add("non-opacity");}
              otherLabel.classList.remove("non-opacity");
          })
          stageLabels.forEach((labels) => labels.classList.remove("non-opacity"));

        //investor 클릭시 
        }else if(button.checked === true && button.value === `investor`){
           matchCheckbox.forEach((otherList, idx) => { 
            otherList.checked = true;
            if(idx > 5){ otherList.checked = false;}
              matchCheckbox[7].checked = true;
              otherList.setAttribute('onclick', 'return false'); 
          
           })
          industryLabels.forEach((otherLabel, index) => {
            otherLabel.classList.remove("non-opacity");
            if(index > 5){ otherLabel.classList.add("non-opacity");}
            industryLabels[7].classList.remove("non-opacity");
          })
          stageLabels.forEach((labels) => labels.classList.remove("non-opacity"));

          let newList = '';
          matchCheckbox.forEach((nowlist, index) => { 
            if(index < 5){ newList += `<div class="categoriesWrap"><span>${nowlist.value}</span></div>`}
            if(index === 7){ newList += `<div class="categoriesWrap"><span>${nowlist.value}</span></div>`}
           })

           categoryValues02.innerHTML = newList;
        
          //incubator 클릭시
         }else if(button.checked === true && button.value === `incubator`){
          matchCheckbox.forEach((otherList, idx) => { 
            otherList.checked = true;
            if(idx > 5){ otherList.checked = false;}
              matchCheckbox[7].checked = true;
              otherList.setAttribute('onclick', 'return false'); 
           })
           industryLabels.forEach((otherLabel, index) => {
            otherLabel.classList.remove("non-opacity");
            if(index > 5){ otherLabel.classList.add("non-opacity");}
            industryLabels[7].classList.remove("non-opacity");
          })
          stageLabels.forEach((labels) => labels.classList.remove("non-opacity"));
          stageLabels[1].classList.add("non-opacity");

          let newList02 = '';
          matchCheckbox.forEach((otherList, idx) => { 
            otherList.checked = true;
            otherList.setAttribute('onclick', 'return false'); 
            if(idx < 5){ newList02 += `<div class="categoriesWrap"><span>${otherList.value}</span></div>`}
            if(idx === 7){newList02 += `<div class="categoriesWrap"><span>${otherList.value}</span></div>`}

           })
           categoryValues02.innerHTML = newList02;
           categoryValues03.innerHTML = `<div class="categoriesWrap"><span>${matchRadios02[0].value}</span></div>` //stage단계에서 오른쪽 버튼없는 목록만들기
         
         }



   

      })

    })
   
    
}

radioDataEvet();






