/* 왼쪽메뉴 Detail Score 차트 */

const detailChart01 = document.getElementById('detailCanvas01').getContext('2d');
const detailChart02 = document.getElementById('detailCanvas02').getContext('2d');
const detailChart03 = document.getElementById('detailCanvas03').getContext('2d');
const detailChart04 = document.getElementById('detailCanvas04').getContext('2d');
const detailChart05 = document.getElementById('detailCanvas05').getContext('2d');
const detailChart06 = document.getElementById('detailCanvas06').getContext('2d');

const dashChartEvet01 = (id, data, options) => {
  
  const createDetailChart01 = new Chart(id, {
     
    type: 'bar',
    data: {
      labels: [''], // x축 레이블
      datasets: [
        {
          label: data.datasetLabel, // 데이터셋 레이블
          data: data.values, // 데이터 값
          backgroundColor: data.backgroundColor,//막대배경색
          borderWidth: 0, // 테두리 두께
          barThickness: 10, // 막대의 고정된 너비 (예: 30px),
          borderRadius: [50, 50]
        }
      ]
    },
    options: {
      responsive: true, // 화면 크기에 따라 자동 조정
      indexAxis: 'y',
      scales: {
        x: {
          // beginAtZero: true, // x축이 0부터 시작하도록 설정
          min: -100, 
          max: 100,
          grid: {
           display: false, // x축 그리드 숨기기
         },
         ticks : {
            display:false,
         },
         border: {
           display: false,
         },
        },
        y: {
        // beginAtZero: false,
          grid: {
           display: false,
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



 // detail 차트 데이터
 const detailChartData01 = {
  datasetLabel: '', // 데이터셋 레이블
  values: [-50], // 데이터 값
  backgroundColor: [
     'rgba(85,102,136,1)',
  ], // 막대 배경색
};
const detailChartData02 = {
  datasetLabel: '', // 데이터셋 레이블
  values: [80], // 데이터 값
  backgroundColor: [
     'rgba(40,122,177,1)',
  ], // 막대 배경색
};
const detailChartData03 = {
  datasetLabel: '', // 데이터셋 레이블
  values: [30], // 데이터 값
  backgroundColor: [
     'rgba(89,141,255,1)',
  ], // 막대 배경색
};
const detailChartData04 = {
  datasetLabel: '', // 데이터셋 레이블
  values: [100], // 데이터 값
  backgroundColor: [
     'rgba(39,163,255,1)',
  ], // 막대 배경색
};
const detailChartData05 = {
  datasetLabel: '', // 데이터셋 레이블
  values: [100], // 데이터 값
  backgroundColor: [
     'rgba(149,255,210,1)',
  ], // 막대 배경색
};
const detailChartData06 = {
  datasetLabel: '', // 데이터셋 레이블
  values: [100], // 데이터 값
  backgroundColor: [
     'rgba(113,199,255,1)',
  ], // 막대 배경색
};


//incomeStatement차트옵션
const detailChartOptions01 = {
  plugins: {
     legend : { 
        display : false,
      },
    title: {
      display: false,
    }
  }
};
const detailChartOptions02 = {
  plugins: {
    legend : { 
       display : false,
     },
   title: {
     display: false,
   }
 }

};
const detailChartOptions03= {
  plugins: {
    legend : { 
       display : false,
     },
   title: {
     display: false,
   }
 }
};
const detailChartOptions04= {
  plugins: {
    legend : { 
       display : false,
     },
   title: {
     display: false,
   }
 }
};
const detailChartOptions05= {
  plugins: {
    legend : { 
       display : false,
     },
   title: {
     display: false,
   }
 }
};
const detailChartOptions06= {
  plugins: {
    legend : { 
       display : false,
     },
   title: {
     display: false,
   }
 }
};


 dashChartEvet01(detailChart01,  detailChartData01,  detailChartOptions01);
 dashChartEvet01(detailChart02,  detailChartData02,  detailChartOptions02);
 dashChartEvet01(detailChart03,  detailChartData03,  detailChartOptions03);
 dashChartEvet01(detailChart04,  detailChartData04,  detailChartOptions04);
 dashChartEvet01(detailChart05,  detailChartData05,  detailChartOptions05);
 dashChartEvet01(detailChart06,  detailChartData06,  detailChartOptions06);




/* 정중앙 radar 차트 */
const dashChartEvet02 = () => {
   const dashChart02 = document.getElementById('dashChartBar02').getContext('2d');
   const dashChartBarBoxs02 = new Chart(dashChart02, {
     type: 'radar', // 차트 유형 (Radar 차트)
     data: {
       labels: ['F1 Readiness', 'F2 Readiness', 'F3 Readiness', 'F4 Readiness', 'F5 Readiness', 'F6 Readiness', 'F7 Readiness', 'F8 Readiness'],
       datasets: [
         {
            label: '',
            data: [80, 90, 80, 90, 95, 80, 90, 50],
            backgroundColor: 'rgba(11, 108, 208,0.18)',
            borderColor: 'rgb(44, 109, 255)',
            borderWidth: 1
         },
         {
            label: '',
            data: [65, 75, 65, 75, 75, 65, 75, 35],
            backgroundColor: 'rgba(195, 255, 111,0.18)',
            borderColor: 'rgb(195, 255, 111)',
            borderWidth: 1
         },
         {
            label: '',
            data: [35, 45, 35, 45, 45, 35, 45, 5],
            backgroundColor: 'rgba(113, 199, 255,0.18)',
            borderColor: 'rgb(113, 199, 255)',
            borderWidth: 1
         }
       ]
     },
     options: {
       responsive: true, // 화면 크기에 맞게 차트 크기 조정
       scales: {
         r: {
           beginAtZero: true, // 반지름이 0에서 시작하도록 설정
           min: 0, // 최소값 설정
           max: 100, // 최대값 설정
           ticks: {
             stepSize: 20, // 눈금 간격 설정
             backdropColor: 'transparent', // 눈금 배경 색
             color: 'rgb(51, 70, 100)', // 그리드 선 색상
             display:false,
           },
           grid: {
             circular: true, // 원형 그리드로 설정
             color: 'rgb(51, 70, 100)', // 그리드 선 색상
             lineWidth: 1, // 그리드 선 두께
             drawTicks: true, // 눈금을 그리드에 그리도록 설정
           },
             // 레이블 숨기기
             pointLabels: {
               display: false, // 축 레이블 숨기기
             }
         }
       },
       plugins: {
         legend: {
           display: false, // 범례 숨기기
           position: 'top', // 범례 위치
         },
         tooltip: {
           enabled: true // 툴팁 활성화
         }
       }
     }
   });
}

dashChartEvet02();



//performance 차트
const dashChartEvet03 = () => {

   let dashChartCont01 = document.getElementById('dashChart01').getContext('2d');
   const canvas = document.getElementById('dashChart01');
   canvas.width = 800;  // 원하는 너비
   canvas.height = 400; // 원하는 높이

   const dashDataChart01 = new Chart(dashChartCont01, {
     
      type: 'line',
      data : {
         labels: ['1','2','3','4','5','6','7','8','9','10'],
         datasets: [
            {
               label: '', // 첫 번째 선
               data: [100, 500, 200, 100, 400, 800, 300, 400, 600, 300], // 첫 번째 데이터셋의 Y축 값
               fill: true, // 배경 채우기 활성화
               backgroundColor: 'rgba(44, 109, 255, 0.2)', // 선 아래 배경 색상
               borderColor: 'rgb(44, 109, 255)', // 선 색상
               borderWidth: 2, // 선 두께
               pointRadius: 0, // 포인트 숨기기
               tension: 0.4, // 선의 곡률을 부드럽게 설정 (0~1 사이 값)
               borderCapStyle: 'round', // 선 끝을 둥글게 만듬
               borderJoinStyle: 'round', // 선을 연결할 때 둥글게 만듬
            },
            {
               label: '', // 두 번째 선
               data: [300, 600, 400, 500, 300, 200, 500, 300, 400, 700],  // 두 번째 데이터셋의 Y축 값
               fill: true, // 배경 채우지 않음
               backgroundColor: 'rgba(188, 245, 107, 0.2)', // 선 아래 배경 색상
               borderColor: 'rgb(188, 245, 107)', // 선 색상
               borderWidth: 2, // 선 두께
               pointRadius: 0, // 포인트 숨기기
               tension: 0.4, // 선의 곡률을 부드럽게 설정 (0~1 사이 값)
               borderCapStyle: 'round', // 선 끝을 둥글게 만듬
               borderJoinStyle: 'round', // 선을 연결할 때 둥글게 만듬
            },
            {
               label: '', // 두 번째 선
               data: [0, 300, 400, 500, 400, 200, 300, 700, 200, 300],// 두 번째 데이터셋의 Y축 값
               fill: true, // 배경 채우지 않음
               backgroundColor: 'rgba(51, 125, 211,0.2)', // 선 아래 배경 색상
               borderColor: 'rgb(51, 125, 211)', // 선 색상
               borderWidth: 2, // 선 두께
               pointRadius: 0, // 포인트 숨기기
               tension: 0.4, // 선의 곡률을 부드럽게 설정 (0~1 사이 값)
               borderCapStyle: 'round', // 선 끝을 둥글게 만듬
               borderJoinStyle: 'round', // 선을 연결할 때 둥글게 만듬
            }
         ]
      },
      options: {
         responsive: true, // 화면 크기에 맞게 차트 크기 조정
         layout: {
          padding: 0,
        },
        plugins: {
            legend: {
            display: false, // 범례 숨기기
            },
        },
         scales: {
           x: {
             beginAtZero: true, // X축은 0부터 시작
             ticks: {

                color: 'rgb(101, 127, 168)',
              },
              grid: {
               color: 'rgba(51, 70, 101,1)', // X축 그리드 색상
               borderColor: 'rgba(51, 70, 101,1)', // X축 테두리 색상
               backdropColor: 'rgba(51, 70, 101,1)', // X축 테두리 색상
               borderWidth: 1, // X축 그리드의 테두리 두께
               lineWidth: 1, // 그리드 선의 두께
               drawBorder: false, // X축 경계선 그리기 비활성화
               drawOnChartArea: true, // 차트 배경에 그리드 그리기
               drawTicks: true, // 틱선 그리기
               tickMarkLength: 5, // 틱선 길이
            }
           },
           y: {
             beginAtZero: true, // Y축은 0부터 시작
             min: 0, // Y축 최소값
             max: 1500, // Y축 최대값
             ticks: {
               stepSize: 250, // Y축 간격을 250으로 설정
               callback: function(value) {
                  return value; // Y축 값 표시 형식
               },
               color: 'rgb(101, 127, 168)',
            },
            grid: {
              display:false,
            }
           }
         }
       }
   })
   


}

dashChartEvet03();


const dataBar01 = document.getElementById('dataBar01').getContext('2d');


const dashChartEvet04 = (id, data, options) => {
  
  const createDetailChart04 = new Chart(id, {
     
    type: 'bar',
    data: {
      labels: [''], // x축 레이블
      datasets: [
        {
          label: '', // 데이터셋 레이블
          data: [30], // 데이터 값
          backgroundColor: 'rgba(113,199,255,1)',//막대배경색
          borderWidth: 0, // 테두리 두께
          barThickness: 15, // 막대의 고정된 너비 (예: 30px),
          borderRadius: [50, 50]
        },
        {
          label: '', // 데이터셋 레이블
          data: [60], // 데이터 값
          backgroundColor: 'rgba(39,163,255,1)',//막대배경색
          borderWidth: 0, // 테두리 두께
          barThickness: 15, // 막대의 고정된 너비 (예: 30px),
          borderRadius: [50, 50]
        },
        {
          label: '', // 데이터셋 레이블
          data: [40], // 데이터 값
          backgroundColor: 'rgba(33,221,255,1)',//막대배경색
          borderWidth: 0, // 테두리 두께
          barThickness: 15, // 막대의 고정된 너비 (예: 30px),
          borderRadius: [50, 50]
        },
        {
          label: '', // 데이터셋 레이블
          data: [30], // 데이터 값
          backgroundColor: 'rgba(113,255,211,1)',//막대배경색
          borderWidth: 0, // 테두리 두께
          barThickness: 15, // 막대의 고정된 너비 (예: 30px),
          borderRadius: [50, 50]
        },
        {
          label: '', // 데이터셋 레이블
          data: [70], // 데이터 값
          backgroundColor: 'rgba(43,94,224,1)',//막대배경색
          borderWidth: 0, // 테두리 두께
          barThickness: 15, // 막대의 고정된 너비 (예: 30px),
          borderRadius: [50, 50]
        },
        {
          label: '', // 데이터셋 레이블
          data: [40], // 데이터 값
          backgroundColor: 'rgba(112,124,255,1)',//막대배경색
          borderWidth: 0, // 테두리 두께
          barThickness: 15, // 막대의 고정된 너비 (예: 30px),
          borderRadius: [50, 50]
        },
        {
          label: '', // 데이터셋 레이블
          data: [60], // 데이터 값
          backgroundColor: 'rgba(72,86,255,1)',//막대배경색
          borderWidth: 0, // 테두리 두께
          barThickness: 15, // 막대의 고정된 너비 (예: 30px),
          borderRadius: [50, 50]
        },
        {
          label: '', // 데이터셋 레이블
          data: [60], // 데이터 값
          backgroundColor: 'rgba(229,229,229,1)',//막대배경색
          borderWidth: 0, // 테두리 두께
          barThickness: 15, // 막대의 고정된 너비 (예: 30px),
          borderRadius: [50, 50]
        }
      ]
    },
    options: {
      responsive: true, // 화면 크기에 따라 자동 조정
      indexAxis: 'y',
      scales: {
        x: {
          // beginAtZero: true, // x축이 0부터 시작하도록 설정
          min: 0, 
          max: 400,
          stacked: true,
          grid: {
           display: false, // x축 그리드 숨기기
         },
         ticks : {
            display:false,
         },
         border: {
           display: false,
         },
        },
        y: {
        // beginAtZero: false,
         stacked: true,
          grid: {
           display: false,
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

const dataBarChartData01 = {
  datasetLabel: '', // 데이터셋 레이블
  values: [100], // 데이터 값
  backgroundColor: [
     'rgba(113,199,255,1)',
  ], // 막대 배경색
};

const dataBarChartOptions01 = {
  plugins: {
     legend : { 
        display : false,
      },
    title: {
      display: false,
    }
  }
};


dashChartEvet04(dataBar01,  dataBarChartData01, dataBarChartOptions01);