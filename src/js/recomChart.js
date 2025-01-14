
/*  Certification date of venture/lab 차트데이터 */

const recommendDataChartEvet01 = () => {

let recommendDataBoxs01 = document.getElementById('recommendData01').getContext('2d');
      let gradient01 = recommendDataBoxs01.createLinearGradient(0, 0, 0, 400);
      gradient01.addColorStop(0, 'rgba(27,95,248,1)'); // 시작 색상 (왼쪽)
      gradient01.addColorStop(1, 'rgba(14,48,124,1)'); // 끝 색상 (오른쪽)

      let gradient02 = recommendDataBoxs01.createLinearGradient(0, 0, 0, 400);
      gradient02.addColorStop(0, 'rgba(195, 255, 111,1)'); // 시작 색상 (왼쪽)
      gradient02.addColorStop(1, 'rgba(98, 128, 56,1)'); // 끝 색상 (오른쪽)

const recommendDataChart01 = new Chart(recommendDataBoxs01, {
   
   type: 'bar', // 수평 바 차트
   data: {
     labels: ['', ''], // X축 레이블
     datasets: [{
       label: '', // 데이터셋의 레이블
       data: [3.5,2.2,1,4,5], // Y축 값 (각각의 막대 크기)
       fill: false, // 배경 채우지 않음
       backgroundColor: [
          gradient01,
          gradient02
       ],
       maxBarThickness: 30,
       borderRadius: [50, 50]
     }]
   },
   options: {
     indexAxis: 'y', // 수평 차트로 설정
     responsive: false,
     layout: {
      padding: 0,
    },
     plugins: {
       legend: {
         position: 'top',
         display: false, // 범례 숨기기
       },
       tooltip: {
         enabled: true // 툴팁 활성화
       }
     },
     scales: {
       x: {
         beginAtZero: true, // X축은 0부터 시작
         ticks: {
            stepSize: 1, // X축 값 간격을 1로 설정
            padding:0,
          },
          grid: {
            color: 'rgba(51, 70, 101,1)', // X축 그리드 색상
            borderColor: 'rgba(51, 70, 101,1)', // X축 테두리 색상
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
        ticks:{
         padding:0,
        },
        grid: {
         color: 'rgba(51, 70, 101,1)', // Y축 그리드 색상
         borderColor: 'rgba(51, 70, 101,1)', // Y축 테두리 색상
         borderWidth: 1, // Y축 그리드의 테두리 두께
         lineWidth: 1, // 그리드 선의 두께
         drawBorder: false, // Y축 경계선 그리기 비활성화
         drawOnChartArea: true, // 차트 배경에 그리드 그리기
         drawTicks: true, // 틱선 그리기
         tickMarkLength: 5, // 틱선 길이
      }
       }
     },
     elements: {
       bar: {
         borderWidth: 2, // 테두리 두께 설정
       }
     },
   }
 });


 let  recommendDataBoxs02 = document.getElementById('recommendData02').getContext('2d');
      let gradient03 = recommendDataBoxs02.createLinearGradient(0, 0, 0, 400);
      gradient01.addColorStop(0, 'rgba(27,95,248,1)'); // 시작 색상 (왼쪽)
      gradient01.addColorStop(1, 'rgba(14,48,124,1)'); // 끝 색상 (오른쪽)

      let gradient04 = recommendDataBoxs02.createLinearGradient(0, 0, 0, 400);
      gradient02.addColorStop(0, 'rgba(195, 255, 111,1)'); // 시작 색상 (왼쪽)
      gradient02.addColorStop(1, 'rgba(98, 128, 56,1)'); // 끝 색상 (오른쪽)

const recommendDataChart02 = new Chart(recommendDataBoxs02, {
   
   type: 'bar', // 수평 바 차트
   data: {
     labels: ['', ''], // X축 레이블
     datasets: [{
       label: '', // 데이터셋의 레이블
       data: [3.5,2.5,1,4,5], // Y축 값 (각각의 막대 크기)
       fill: false, // 배경 채우지 않음
       backgroundColor: [
          gradient01,
          gradient02
       ],
       maxBarThickness: 30,
       borderRadius: [50, 50]
     }]
   },
   options: {
     indexAxis: 'y', // 수평 차트로 설정
     responsive: false,
     layout: {
      padding: 0,
    },
     plugins: {
       legend: {
         position: 'top',
         display: false, // 범례 숨기기
       },
       tooltip: {
         enabled: true // 툴팁 활성화
       }
     },
     scales: {
       x: {
         beginAtZero: true, // X축은 0부터 시작
         ticks: {
            stepSize: 1, // X축 값 간격을 1로 설정
            padding:0,
          },
          grid: {
            color: 'rgba(51, 70, 101,1)', // X축 그리드 색상
            borderColor: 'rgba(51, 70, 101,1)', // X축 테두리 색상
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
         ticks:{
            padding:0,
           },
           grid: {
            color: 'rgba(51, 70, 101,1)', // Y축 그리드 색상
            borderColor: 'rgba(51, 70, 101,1)', // Y축 테두리 색상
            borderWidth: 1, // Y축 그리드의 테두리 두께
            lineWidth: 1, // 그리드 선의 두께
            drawBorder: false, // Y축 경계선 그리기 비활성화
            drawOnChartArea: true, // 차트 배경에 그리드 그리기
            drawTicks: true, // 틱선 그리기
            tickMarkLength: 5, // 틱선 길이
         }
       }
     },
     elements: {
       bar: {
         borderWidth: 2, // 테두리 두께 설정
       }
     },
   }
 });

}

recommendDataChartEvet01();


/*  Patent applications 차트데이터 */

const recommendDataChartEvet02 = () => {

   let recommendDataBoxs03 = document.getElementById('recommendData03').getContext('2d');
   const recommendDataChart03 = new Chart(recommendDataBoxs03, {
     
      type: 'line',
      data : {
         labels: ['1','2','3','4','5','6','7','8','9','10'],
         datasets: [
            {
               label: '', // 첫 번째 선
               data: [1,5,4,6,7,6,9,8,10,10], // 첫 번째 데이터셋의 Y축 값
               fill: false, // 배경 채우지 않음
               borderColor: 'rgb(123, 165, 255)', // 선 색상
               borderWidth: 2, // 선 두께
            },
            {
               label: '', // 두 번째 선
               data: [1,2,3,4,5,6,7,8,9,10], // 두 번째 데이터셋의 Y축 값
               fill: false, // 배경 채우지 않음
               borderColor: 'rgb(188, 245, 107)', // 선 색상
               borderWidth: 2, // 선 두께
            }
         ]
      },
      options: {
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
                stepSize: 2, // X축 값 간격을 1로 설정
                color: 'rgb(101, 127, 168)', // X축 숫자 색상
              },
              grid: {
               color: 'rgba(51, 70, 101,1)', // X축 그리드 색상
               borderColor: 'rgba(51, 70, 101,1)', // X축 테두리 색상
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
             ticks: {
               stepSize: 2,
               display: false, // Y축의 숫자 숨기기
            },
            grid: {
               color: 'rgba(51, 70, 101,1)', // Y축 그리드 색상
               borderColor: 'rgba(51, 70, 101,1)', // Y축 테두리 색상
               borderWidth: 1, // Y축 그리드의 테두리 두께
               lineWidth: 1, // 그리드 선의 두께
               drawBorder: false, // Y축 경계선 그리기 비활성화
               drawOnChartArea: true, // 차트 배경에 그리드 그리기
               drawTicks: true, // 틱선 그리기
               tickMarkLength: 5, // 틱선 길이
            }
           }
         }
       }
   })
   


}

recommendDataChartEvet02();

/* Employment & wage 차트데이터 */

const recommendDataChartEvet03 = () => {

   let recommendDataBoxs04 = document.getElementById('recommendData04').getContext('2d');
   let gradient05 = recommendDataBoxs04.createLinearGradient(0, 0, 0, 400);
   gradient05.addColorStop(0, 'rgba(27,95,248,1)'); // 시작 색상 (왼쪽)
   gradient05.addColorStop(1, 'rgba(14,48,124,1)'); // 끝 색상 (오른쪽)

   let gradient06 = recommendDataBoxs04.createLinearGradient(0, 0, 0, 400);
   gradient06.addColorStop(0, 'rgba(195, 255, 111,1)'); // 시작 색상 (왼쪽)
   gradient06.addColorStop(1, 'rgba(98, 128, 56,1)'); // 끝 색상 (오른쪽)


   const recommendDataChart04 = new Chart(recommendDataBoxs04, {
      type: 'bar', // 기본 차트 유형을 'bar'로 설정
      data: {
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], // X축 라벨
          datasets: [
              {
                  type: 'bar', // 첫 번째 데이터셋은 'bar' 차트
                  label: '',
                  data: [2, 3, 4, 5, 6, 6, 5, 4, 3, 2], // 10개의 데이터 값
                  backgroundColor: gradient05, // 바 색상
                  borderWidth: 0, // 바 테두리 두께
                  barPercentage: 0.5, // 바의 너비를 50%로 설정
                  categoryPercentage: 0.8, // 카테고리 내 바들이 차지하는 비율을 80%로 설정
                  borderRadius: [50, 50]
              },
              {
                  type: 'bar', // 두 번째 데이터셋은 'bar' 차트
                  label: '',
                  data: [1, 2, 3, 4, 5, 4, 5, 5, 5, 5], // 10개의 데이터 값
                  backgroundColor: gradient06, // 바 색상
                  borderWidth: 0, // 바 테두리 두께
                  barPercentage: 0.5, // 바의 너비를 50%로 설정
                  categoryPercentage: 0.8, // 카테고리 내 바들이 차지하는 비율을 80%로 설정
                  borderRadius: [50, 50]
              },
              {
                  type: 'line', // 첫 번째 'line' 데이터셋
                  label: '',
                  data: [10, 9, 8, 9, 8, 9, 7, 8, 6, 7], // Y축 값
                  fill: false, // 배경 채우지 않음
                  borderColor: 'rgb(123, 165, 255)', // 선 색상
                  borderWidth: 2, // 선 두께
              },
              {
                  type: 'line', // 두 번째 'line' 데이터셋
                  label: '',
                  data: [10, 10, 9, 8, 8, 9, 9, 9, 7, 8], // Y축 값
                  fill: false, // 배경 채우지 않음
                  borderColor: 'rgb(188, 245, 107)', // 선 색상
                  borderWidth: 2, // 선 두께
              }
          ]
      },
      options: {
          layout: {
              padding: 0, // 패딩 설정
          },
          plugins: {
              legend: {
                  position: 'top', // 범례 위치
                  display: false, // 범례 표시 안 함
              },
              tooltip: {
                  enabled: true, // 툴팁 활성화
              },
          },
          scales: {
              x: {
                  beginAtZero: true, // X축은 0부터 시작
                  ticks: {
                      stepSize: 1, // X축 값 간격을 1로 설정
                      color: 'rgb(101, 127, 168)', // X축 숫자 색상
                  },
                  grid: {
                     border : {
                        left : 1
                     }
                  }
              },
              y: {
                  beginAtZero: true, // Y축은 0부터 시작
                  ticks: {
                      stepSize: 2,
                      display: false, // Y축의 숫자 숨기기
                  },
                  grid: {
                      color: 'rgba(51, 70, 101,1)', // X축 그리드 색상
                      borderColor: 'rgba(51, 70, 101,1)', // X축 테두리 색상
                      borderWidth: 1, // X축 그리드의 테두리 두께
                      lineWidth: 1, // 그리드 선의 두께
                      drawBorder: false, // X축 경계선 그리기 비활성화
                      drawOnChartArea: true, // 차트 배경에 그리드 그리기
                      drawTicks: true, // 틱선 그리기
                      tickMarkLength: 5, // 틱선 길이
                     //  borderDash: [10, 10], // 그리드 대시 스타일
                  }
              }
          }
      }
  });
  
}

recommendDataChartEvet03();


/* Revenue 데이터 차트 */

const recommendDataChartEvet04 = () => {

   let recommendDataBoxs05 = document.getElementById('recommendData05').getContext('2d');
   const recommendDataChart05 = new Chart(recommendDataBoxs05, {
     
      type: 'line',
      data : {
         labels: ['1','2','3','4','5','6','7','8','9','10'],
         datasets: [
            {
               label: '', // 첫 번째 선
               data: [1,5,4,6,7,6,9,8,10,10], // 첫 번째 데이터셋의 Y축 값
               fill: false, // 배경 채우지 않음
               borderColor: 'rgb(123, 165, 255)', // 선 색상
               borderWidth: 2, // 선 두께
            },
            {
               label: '', // 두 번째 선
               data: [1,2,3,4,5,6,7,8,9,10], // 두 번째 데이터셋의 Y축 값
               fill: false, // 배경 채우지 않음
               borderColor: 'rgb(188, 245, 107)', // 선 색상
               borderWidth: 2, // 선 두께
            }
         ]
      },
      options: {
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
                stepSize: 3, // X축 값 간격을 1로 설정
                color: 'rgb(101, 127, 168)', // X축 숫자 색상
              },
              grid: {
               color: 'rgba(51, 70, 101,1)', // X축 그리드 색상
               borderColor: 'rgba(51, 70, 101,1)', // X축 테두리 색상
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
             ticks: {
               stepSize: 3,
               display: false, // Y축의 숫자 숨기기
            },
            grid: {
               color: 'rgba(51, 70, 101,1)', // Y축 그리드 색상
               borderColor: 'rgba(51, 70, 101,1)', // Y축 테두리 색상
               borderWidth: 1, // Y축 그리드의 테두리 두께
               lineWidth: 1, // 그리드 선의 두께
               drawBorder: false, // Y축 경계선 그리기 비활성화
               drawOnChartArea: true, // 차트 배경에 그리드 그리기
               drawTicks: true, // 틱선 그리기
               tickMarkLength: 5, // 틱선 길이
            }
           }
         }
       }
   })

}

recommendDataChartEvet04();


/* Net income 데이터 차트 */

const recommendDataChartEvet05 = () => {

   let recommendDataBoxs06 = document.getElementById('recommendData06').getContext('2d');
   const recommendDataChart06 = new Chart(recommendDataBoxs06, {
     
      type: 'line',
      data : {
         labels: ['1','2','3','4','5','6','7','8','9','10'],
         datasets: [
            {
               label: '', // 첫 번째 선
               data: [0, -5000, 0, 5000, 6000, 4000, 1000, 0, 5000, 10000],// 첫 번째 데이터셋의 Y축 값
               fill: false, // 배경 채우지 않음
               borderColor: 'rgb(123, 165, 255)', // 선 색상
               borderWidth: 2, // 선 두께
            },
            {
               label: '', // 두 번째 선
               data: [5000, 7000, 0, 5000, 10000, 0, 1000, 5000, 7000, 10000], // 두 번째 데이터셋의 Y축 값
               fill: false, // 배경 채우지 않음
               borderColor: 'rgb(188, 245, 107)', // 선 색상
               borderWidth: 2, // 선 두께
            }
         ]
      },
      options: {
         
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
                stepSize: 3, // X축 값 간격을 1로 설정
                color: 'rgb(101, 127, 168)', // X축 숫자 색상
              },
              grid: {
               color: 'rgba(51, 70, 101,1)', // X축 그리드 색상
               borderColor: 'rgba(51, 70, 101,1)', // X축 테두리 색상
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
             min: -10000, // Y축 최소값 설정
             max: 10000, // Y축 최대값 설정
             ticks: {
               stepSize:5000,
               color: 'rgb(101, 127, 168)', // y축 숫자 색상
               callback: function(value, index, values) {
                  // 여기서 원하는 5개 값을 설정
                  const customTicks = [-10000, -5000, 0, 5000, 10000];
                  if (customTicks.includes(value)) {
                     return value; // 값이 목록에 있으면 표시
                  }
                  return ''; // 목록에 없으면 빈 문자열 (표시 안 함)
               }
            },
            grid: {
               color: 'rgba(51, 70, 101,1)', // Y축 그리드 색상
               borderColor: 'rgba(51, 70, 101,1)', // Y축 테두리 색상
               borderWidth: 1, // Y축 그리드의 테두리 두께
               lineWidth: 1, // 그리드 선의 두께
               drawBorder: false, // Y축 경계선 그리기 비활성화
               drawOnChartArea: true, // 차트 배경에 그리드 그리기
               drawTicks: true, // 틱선 그리기
               tickMarkLength: 5, // 틱선 길이
            }
           }
         }
       }
   })

}

recommendDataChartEvet05();

/* Articles on overseas expansion 데이터 차트 */

const recommendDataChartEvet06 = () => {

   let recommendDataBoxs07= document.getElementById('recommendData07').getContext('2d');
   const recommendDataChart07 = new Chart(recommendDataBoxs07, {
     
      type: 'line',
      data : {
         labels: ['1','2','3','4','5','6','7','8','9','10'],
         datasets: [
            {
               label: '', // 첫 번째 선
               data: [1,3,4,6,8,6,5,6,7,8],// 첫 번째 데이터셋의 Y축 값
               fill: false, // 배경 채우지 않음
               borderColor: 'rgb(123, 165, 255)', // 선 색상
               borderWidth: 2, // 선 두께
            },
            {
               label: '', // 두 번째 선
               data: [1,2,3,4,5,6,7,7.5,8,9],// 두 번째 데이터셋의 Y축 값
               fill: false, // 배경 채우지 않음
               borderColor: 'rgb(188, 245, 107)', // 선 색상
               borderWidth: 2, // 선 두께
            }
         ]
      },
      options: {
         
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
                stepSize: 3, // X축 값 간격을 1로 설정
                color: 'rgb(101, 127, 168)', // X축 숫자 색상
              },
              grid: {
               color: 'rgba(51, 70, 101,1)', // X축 그리드 색상
               borderColor: 'rgba(51, 70, 101,1)', // X축 테두리 색상
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
             min: 0, // Y축 최소값 설정
             max: 10, // Y축 최대값 설정
             ticks: {
               stepSize:1,
               color: 'rgb(101, 127, 168)', // y축 숫자 색상
               callback: function(value) {
                  // 여기서 원하는 5개 값을 설정
                  const customTicks02 = [0, 2, 5, 7, 10];
                  if (customTicks02.includes(value)) {
                     return value; // 값이 목록에 있으면 표시
                  }
                  return ''; // 목록에 없으면 빈 문자열 (표시 안 함)
               }
            },
            grid: {
               color: 'rgba(51, 70, 101,1)', // Y축 그리드 색상
               borderColor: 'rgba(51, 70, 101,1)', // Y축 테두리 색상
               borderWidth: 1, // Y축 그리드의 테두리 두께
               lineWidth: 1, // 그리드 선의 두께
               drawBorder: false, // Y축 경계선 그리기 비활성화
               drawOnChartArea: true, // 차트 배경에 그리드 그리기
               drawTicks: true, // 틱선 그리기
               tickMarkLength: 5, // 틱선 길이
            }
           }
         }
       }
   })

}

recommendDataChartEvet06();