
function loadingDatasEvent(){

    const leftContentText = document.querySelectorAll(".texts ul");
    const rightSteps = document.querySelectorAll(".rightStep");
    const loadingBar = document.querySelector(".loading-bar em");
    const loadingPageWrap = document.querySelector(".loadingPageWrap");

    const totalSteps = 4; // 총 4단계
    const intervalTime = 3000; // 각 단계 간 시간 간격 3초
    let currentStep = 0; // 현재 단계

    loadingBar.classList.remove("active");
    loadingPageWrap.classList.remove("active");

    const loadingBarEvet = setInterval(() => {

          loadingBar.classList.add("active");
            setTimeout(() => {
              loadingBar.classList.remove("active");
            },totalSteps * intervalTime)
    
    })
   

    // 각 단계에 대해 "active" 클래스를 추가/제거하는 함수
    const updateStep = (step) => {

        // 이전 단계에서 active 제거
        if (currentStep > 0) {
            leftContentText[currentStep - 1].classList.remove("active");
            rightSteps[currentStep - 1].classList.remove("active");
        }
        // 현재 단계에서 active 추가
        leftContentText[step].classList.add("active");
        rightSteps[step].classList.add("active");
    };

    // 처음 단계 실행
    updateStep(currentStep);
    

    // 3초마다 다음 단계로 이동
    const interval = setInterval(() => {
        currentStep++;

        if (currentStep < totalSteps) {
            updateStep(currentStep);
        } else {
            loadingPageWrap.classList.add("active");
            loadingBar.classList.remove("active");
            clearInterval(interval); // 9초 후 종료
            clearInterval(loadingBarEvet);

        }
    }, intervalTime);
};  

loadingDatasEvent(); // 함수 실행


const finalistDataEvet = () => {
    //finalist
    let finalistWrap = document.querySelector(".finalist");
    let newFinalList = '';

    for(let i = 1; i <= 30; i++){
      newFinalList += `<li><img src="/src/media/loading/finalist/finalist${i}.svg" alt="finalistImg" loading="lazy"></li>`
    }     

    finalistWrap.innerHTML = newFinalList;
}

finalistDataEvet();

