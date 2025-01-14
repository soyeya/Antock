//주소에 따른 메뉴 불빛 이벤트

 const menuClickEvet = () => {
      
    const menuList = document.querySelectorAll("nav ul li a");
    const path = window.location.pathname;
    console.log(path); //현재 위치값

    if(path === `/src/components/matching.html`){
        menuList.forEach((otherList) => otherList.classList.remove("active"));
        menuList[0].classList.add("active");
    }else if(path === `/src/components/list.html`){
        menuList.forEach((otherList) => otherList.classList.remove("active"));
        menuList[1].classList.add("active");
    }else if(path === `/src/components/recommendation.html`){
        menuList.forEach((otherList) => otherList.classList.remove("active"));
        menuList[2].classList.add("active");
    }else if(path === `/src/components/dashborad.html`){
        menuList.forEach((otherList) => otherList.classList.remove("active"));
        menuList[1].classList.add("active");
    }
    
}

menuClickEvet();