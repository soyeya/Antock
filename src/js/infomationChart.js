const infomationChart01 = document.getElementById('finance-01').getContext('2d');
const infomationChart02 = document.getElementById('finance-02').getContext('2d');
const infomationChart03 = document.getElementById('finance-03').getContext('2d');
const infomationChart04 = document.getElementById('finance-04').getContext('2d');
const infomationChart05 = document.getElementById('finance-05').getContext('2d');
const infomationChart06 = document.getElementById('finance-06').getContext('2d');
const infomationChart07 = document.getElementById('status01').getContext('2d');


/* finance 차트 */

const createBarChart01 = (id, data, options) => {
   const createChart01 = new Chart(id, {
     type: 'bar',
     data: {
       labels: ['2019', '2020', '2021', '2022', '2023'], // x축 레이블
       datasets: [
         {
           label: data.datasetLabel, // 데이터셋 레이블
           data: data.values, // 데이터 값
           backgroundColor: data.backgroundColor || 'rgba(0, 123, 255, 0.5)', // 막대 배경색
           borderColor: 'transparent',
           borderWidth: 0, // 테두리 두께
           barThickness: 10, // 막대의 고정된 너비 (예: 30px),
           borderRadius: [50, 50]
         }
       ]
     },
     options: {
       responsive: true, // 화면 크기에 따라 자동 조정
       scales: {
         x: {
           beginAtZero: true, // x축이 0부터 시작하도록 설정
           grid: {
            display: false, // y축 그리드 숨기기
          },
          ticks : {
             color:'rgba(163,165,169,1)'
          },
          border: {
            display: true,
            color : 'rgba(81,88,100,1)'
          }
         },
         y: {
           beginAtZero: true, // y축이 0부터 시작하도록 설정
           grid: {
            display: false, // y축 그리드 숨기기
          },
          ticks: {
            display: false, // y축 레이블(글자) 숨기기
          },
          border: {
            display: false, // x축의 border(선) 숨기기
          }
         }
       },
       layout: {
         padding: {
           top: 10,
           bottom: 10,
           left: 10,
           right: 10
         }
       },
       ...options // 사용자가 전달한 추가 옵션
     }
   });
 };

 // 차트 데이터를 정의
 const chartData01 = {
   datasetLabel: '', // 데이터셋 레이블
   values: [65, 59, 80, 81, 56], // 데이터 값
   backgroundColor: [
      'rgba(27,95,248,1)',
      'rgba(118, 160, 252,1)',
      'rgba(204,255,132,1)',
      'rgba(113,255,212,1)',
      'rgba(225,225,225,1)',
   ], // 막대 배경색
 };
 const chartData02 = {
   datasetLabel: '', // 데이터셋 레이블
   values: [65, 59, 80, 81, 56], // 데이터 값
   backgroundColor: [
      'rgba(27,95,248,1)',
      'rgba(118, 160, 252,1)',
      'rgba(204,255,132,1)',
      'rgba(113,255,212,1)',
      'rgba(225,225,225,1)',
   ], // 막대 배경색
 };
 const chartData03 = {
   datasetLabel: '', // 데이터셋 레이블
   values: [65, 59, 80, 81, 56], // 데이터 값
   backgroundColor: [
      'rgba(27,95,248,1)',
      'rgba(118, 160, 252,1)',
      'rgba(204,255,132,1)',
      'rgba(113,255,212,1)',
      'rgba(225,225,225,1)',
   ], // 막대 배경색
 };

 // 옵션 설정 (선택적)
 const chartOptions01 = {
   plugins: {
     legend : { 
       display : false,
     },
     title: {
       display: true,
       text: 'Total Assts',
       color:'rgba(225,225,225,1)',
     }
   }
 };
 const chartOptions02 = {
   plugins: {
      legend : { 
         display : false,
       },
     title: {
       display: true,
       text:'Total Liabilitie',
       color:'rgba(225,225,225,1)'

     }
   }
 };
 const chartOptions03 = {
   plugins: {
      legend : { 
         display : false,
       },
     title: {
       display: true,
       text: 'Total Equity',
       color:'rgba(225,225,225,1)'
     }
   }
 };

 createBarChart01(infomationChart01, chartData01, chartOptions01);
 createBarChart01(infomationChart02, chartData02, chartOptions02);
 createBarChart01(infomationChart03, chartData03, chartOptions03);



/* incomeStatement차트 */

const createBarChart02 = (id, data, options) => {
   const createChart02 = new Chart(id, {
      
     type: 'bar',
     data: {
       labels: ['2019', '2020', '2021', '2022', '2023'], // x축 레이블
       datasets: [
         {
           label: data.datasetLabel, // 데이터셋 레이블
           data: data.values, // 데이터 값
           backgroundColor: data.backgroundColor || 'rgba(0, 123, 255, 0.5)', // 막대 배경색
           borderColor: 'transparent',
           borderWidth: 0, // 테두리 두께
           barThickness: 10, // 막대의 고정된 너비 (예: 30px),
           borderRadius: [50, 50]
         }
       ]
     },
     options: {
       responsive: true, // 화면 크기에 따라 자동 조정
       scales: {
         x: {
           beginAtZero: true, // x축이 0부터 시작하도록 설정
           grid: {
            display: false, // y축 그리드 숨기기
          },
          ticks : {
             color:'rgba(163,165,169,1)'
          },
          border: {
            display: true,
            color : 'rgba(81,88,100,1)'
          }
         },
         y: {
         beginAtZero: false,
         min: -150, 
         max: 150,
           grid: {
            color : 'rgba(81,88,100,1)'
          },
          ticks: {
            display: false, // y축 레이블(글자) 숨기기
          },
          border: {
            display: false, // x축의 border(선) 숨기기
          }
         }
       },
       layout: {
         padding: {
           top: 10,
           bottom: 10,
           left: 10,
           right: 10
         }
       },
       ...options // 사용자가 전달한 추가 옵션
     }
   });
 };



  //incomeStatement차트데이터
  const incomesChartData01 = {
   datasetLabel: '', // 데이터셋 레이블
   values: [100, 130, 120, 90, -80], // 데이터 값
   backgroundColor: [
      'rgba(27,95,248,1)',
      'rgba(118, 160, 252,1)',
      'rgba(204,255,132,1)',
      'rgba(113,255,212,1)',
      'rgba(114,114,114,1)',
   ], // 막대 배경색
 };
 const incomesChartData02 = {
   datasetLabel: '', // 데이터셋 레이블
   values: [-80, -80,-80,-80,-80], // 데이터 값
   backgroundColor: [
      'rgba(114,114,114,1)',
      'rgba(114,114,114,1)',
      'rgba(114,114,114,1)',
      'rgba(114,114,114,1)',
   ], // 막대 배경색
 };
 const incomesChartData03 = {
   datasetLabel: '', // 데이터셋 레이블
   values: [-80, 130, 120, 90, -80], // 데이터 값
   backgroundColor: [
      'rgba(114,114,114,1)',
      'rgba(118, 160, 252,1)',
      'rgba(204,255,132,1)',
      'rgba(113,255,212,1)',
      'rgba(114,114,114,1)',
   ], // 막대 배경색
 };

 
 //incomeStatement차트옵션
 const incomesChartOptions01 = {
   plugins: {
      legend : { 
         display : false,
       },
     title: {
       display: true,
       text: 'Revenue',
       color:'rgba(225,225,225,1)'
     }
   }
 };
 const incomesChartOptions02 = {
   plugins: {
      legend : { 
         display : false,
       },
     title: {
       display: true,
       text: 'Operating Profit',
       color:'rgba(225,225,225,1)'
     }
   }
 };
 const incomesChartOptions03= {
   plugins: {
      legend : { 
         display : false,
       },
     title: {
       display: true,
       text: 'Net Profit',
       color:'rgba(225,225,225,1)'
     }
   }
 };


  createBarChart02(infomationChart04, incomesChartData01,  incomesChartOptions01);
  createBarChart02(infomationChart05, incomesChartData02,  incomesChartOptions02);
  createBarChart02(infomationChart06, incomesChartData03,  incomesChartOptions03);


  /* status차트 */

  const createBarChart03 = () => {
   const createChart03 = new Chart(infomationChart07,{
      
     type: 'bar',
     data: {
       labels: ['24/01','24/02','24/03','24/04','24/05','24/06','24/07','24/08','24/09','24/10','24/11','24/12',], // x축 레이블
       datasets: [
         {
           label: '', // 데이터셋 레이블
           data:[7,5,6,6,5,5,6,7,4,8,5,8], // 데이터 값
           backgroundColor : 'rgba(27,95,248,1)',
           borderColor: 'transparent',
           borderWidth: 3, // 테두리 두께
           barThickness: 15, // 막대의 고정된 너비 (예: 30px),
           borderRadius: [50, 50]
         },
         {
           label: '', // 데이터셋 레이블
           data:[4,5,4,5,5,8,6,7,4,8,4,8], // 데이터 값
           backgroundColor : 'rgba(113,225,121,1)',
           borderColor: 'transparent',
           borderWidth: 3, // 테두리 두께
           barThickness: 15, // 막대의 고정된 너비 (예: 30px),
           borderRadius: [50, 50]
         }

       ]
     },
     options: {
       responsive: true, // 화면 크기에 따라 자동 조정
       plugins: {
         legend : { 
            display : false,
          },
        title: {
          display: false,
        }
      },
       scales: {
         x: {
           beginAtZero: true, // x축이 0부터 시작하도록 설정
           grid: {
            display: false, // y축 그리드 숨기기
            stepSize: 30,
          },
          ticks : {
             color:'rgba(163,165,169,1)',
          },
          border: {
            display: true,
            color : 'rgba(81,88,100,1)'
          }
         },
         y: {
         min:0,
         max:10,
         beginAtZero: false,
           grid: {
            display:false,
          },
          ticks: {
            display: false, // y축 레이블(글자) 숨기기
          },
          border: {
            display: false, // x축의 border(선) 숨기기
          }
         }
       },
       layout: {
         padding: {
           top: 10,
           bottom: 10,
           left: 10,
           right: 10
         }
       },
     }
   });
 };

 createBarChart03();
