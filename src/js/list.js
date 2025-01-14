const listDataEvet = () => {

     const listDataObj = {

         title : ["Inobus" , "World CNS" , "NaviFra" , "Dalpa", "Cantoos" , "Myve" , "Evergreen IT" , "Hopae" , "Deep Wave" , "GenData" , "78 Research Lab" , "Jin Story Korea" , "Diwix" , "Green Talk" , "Nearbrain" , "D Museum" , "Eagle Vision" , "Sangun" , "J2Morrow One" , "Beomhan Solutions" , "MetaJence" , "Cranberry" , "Biodeck" , "BiomAids" , "WM Assy" , "JAS Tech" , "Studio Hi" , "Industrial AI" , "Shine Tech" , "Samil Technics"],
         rank : ["Top 1.03%","Top 2.06%","Top 3.09%","Top 4.12%","Top 5.15%","Top 6.19%", "Top 7.22%", "Top 8.25%", "Top 9.28%", "Top 10.31%", "Top 11.34%" , "Top 12.37%", "Top 13.40%" , "Top 14.43%" , "Top 15.46%" , "Top 16.49%", "Top 17.53%", "Top 18.56%", "Top 19.59%", "Top 20.62%", "Top 21.65%" , "Top 22.68%", "Top 23.71%", "Top 24.74%", "Top 25.77%", "Top 26.80%" , "Top 27.84%", "Top 28.87%", "Top 29.90%", "Top 30.93%"],
         subRank : ["2.5499", "2.1576", "2.0728", "2.0349", "1.9766", "1.0400","1.9393","1.8810", "1.8283","1.7992", "1.7766" , "1.7629", "1.7486", "1.7198" , "1.6743", "1.6210", "1.6030", "1.5850", "1.5663", "1.5565", "1.5183", "1.5096", "1.4810", "1.424", "1.4576", "1.4179", "1.3885", "1.3837", "1.3812", "1.3636"],
         names : ["Kim Tae-woo" , "Cho Sung-hyun" , "Yoon Hee-seong" , "Kim Gyeong-dong" , "Yoo Seung-hwan" , "Kim Hye-jin" , "Jang Seok-gyun" , "Lee Tae-rin" , "Shin Jae-hee" , "Ahn Jun-hyeong", "Park Jung-tae" , "Seo Jong-bok", "Hong Chan-hyung" , "Hong In-pyo" , "Bang Su-on" , "Park Yong-taek", "Kim Do-gyun" , "Sim Jae-hoon" , "Heo In-seok" , "Won Deok-hee" , "Kim Shin-nam", "Son Young-guk" , "Jang Jin-hyeok" , "Kim Tae-hwan" , "Ham Min-hyeok" , "Kim Woo-chan" , "Kim Hae-gyun" , "Lee Eun-hye" , "Lee Tae-yong" , "Kim Gi-tae"],
         dates : ["2022.1.10" , "2022.4.13", "2023.1.17","2023.1.3", "2022.2.11", "2022.1.10" , "2022.1.3", "2022.4.6", "2022.2.28","2022.8.30","2022.4.1", "2022.6.10", "2022.7.25", "2022.8.1","2022.2.17", "2022.11.4", "2023.5.3", "2022.7.7", "2022.12.1", "2022.1.12", "2022.1.19", "2022.8.2", "2022.5.6", "2022.4.30", "2022.1.3", "2022.4.1", "2022.3.8", "2022.4.4", "2022.10.24", "2022.2.22"],
         imgs : ["listImg01.png", "listImg02.png","listImg03.png","listImg04.png","listImg05.png", "listImg06.png","listImg07.png","listImg08.png","listImg09.png","listImg10.png","listImg11.png","listImg12.png","listImg13.png","listImg14.png","listImg15.png","listImg16.png","listImg17.png","listImg18.png","listImg19.png","listImg20.png",
            "listImg21.png","listImg22.png","listImg23.png","listImg24.png","listImg25.png","listImg26.png","listImg27.png","listImg28.png","listImg29.png","listImg30.png"
         ]
        }

     let listContentBoxs = document.querySelector(".listContentBoxs");
     let setList = "";

     for(let i = 0; i <= listDataObj.title.length - 1; i++){
         setList += `<div class="lists">
                      <div class="imgSpace"><img src="/Antock/src/media/list/data/${listDataObj.imgs[i]}" alt="listImg"><span>Data Accessible</span></div>
                       <div class="textBoxs">
                          <h3 class="textTitles">${listDataObj.title[i]}</h3>
                           <ul class="list-cont">
                              <li><h5>Rank</h5><p class="rankSubData">${listDataObj.rank[i]}<span>${listDataObj.subRank[i]}</span></p></li>
                              <li class="nameBoxs"><h5>CEO name</h5><p>${listDataObj.names[i]}</p></li>
                              <li><h5>Est.date</h5><p>${listDataObj.dates[i]}</p></li>
                              <li><h5>Industry</h5><p>Very long industry</p></li>
                           </ul>
                       </div>
                       <div class="linkBoxs">
                           <a href="/Antock/src/components/dashborad.html"><span></span>DASHboard</a>
                       </div>
                  </div>`
     }

     listContentBoxs.innerHTML = setList;



     //테이블 데이터 삽입

     let tableListContent = document.querySelector(".tableContentBoxs table tbody");
     let tableList = '';

     for(let i = 0; i <= listDataObj.title.length - 1; i++){
   
     if(i == 8 || i == 9){
         tableList += `<tr>
         <td>${listDataObj.title[i]}</td>
         <td>${listDataObj.subRank[i]}(${i+1}th, ${listDataObj.rank[i]})</td>
         <td>${listDataObj.names[i]}</td>
         <td>${listDataObj.dates[i]}</td>
         <td>Main product</td>
         <td><button type="button" class="non-color"><span>Dashboard</span></button></td>
      </tr>`
     }else{
      tableList += `  <tr>
                          <td>${listDataObj.title[i]}</td>
                          <td>${listDataObj.subRank[i]}(${i+1}th, ${listDataObj.rank[i]})</td>
                          <td>${listDataObj.names[i]}</td>
                          <td>${listDataObj.dates[i]}</td>
                          <td>Main product</td>
                          <td><button type="button"><span>Dashboard</span></button></td>
                   </tr>`
     }
      
  }

   tableListContent.innerHTML = tableList;


}


listDataEvet();


/* List버튼 클릭에 따른 데이터 리스트  */

const listContentChange = () => {

  const listContent = document.querySelectorAll(".listMainContent article");
  const listBtn01 = document.querySelector(".listBtn01");
  const listBtn02 = document.querySelector(".listBtn02");

  //최초의값
  listBtn02.classList.add("active");
  listContent[0].classList.add("active");

  //리스트형
  listBtn01.addEventListener("click", () => {
     listBtn02.classList.remove("active");
     listBtn01.classList.add("active");
     listContent.forEach((list) => { list.classList.remove("active");});
     listContent[1].classList.add("active");
  })

  //앨범형
  listBtn02.addEventListener("click", () => {

     listBtn01.classList.remove("active");
     listBtn02.classList.add("active");
     listContent.forEach((list) => {list.classList.remove("active");});
     listContent[0].classList.add("active");
  })

}

listContentChange();