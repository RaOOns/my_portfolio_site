function showContainer(containerId) {
    // 클릭된 박스를 가져오기
    const activeBox = document.getElementById(containerId);

    // 클릭된 박스가 이미 활성화되어 있는지 확인
    if (activeBox.classList.contains('active')) {
        // 활성화되어 있으면 비활성화
        activeBox.classList.remove('active');
    } else {
        // AM-container와 PJ-container만 비활성화
        const boxes = document.querySelectorAll('#AM-container, #PJ-container');
        boxes.forEach(box => box.classList.remove('active'));

        // 클릭된 박스를 활성화
        activeBox.classList.add('active');
    }
}


document.addEventListener('DOMContentLoaded', (event) => {
    const ctx = document.getElementById('spiderChart').getContext('2d');
    const spiderChart = new Chart(ctx, {
        type: 'radar',
        data: {
            // labels: ['Python\n99%', 'R\n90%', 'SAS\n70%', 'SQL\n85%', 'HTML/CSS/JS\n60%', "Spotfire\n90%", "Tableau\n75%"],
            labels: ['Python', 'R', 'SAS', 'SQL', 'HTML/CSS/JS', 'Spotfire', 'Tableau'],
            datasets: [{
                label: '',
                data: [99, 90, 70, 85, 60, 90, 75],
                // backgroundColor: 'rgba(255, 255, 255, 0.5)',
                // borderColor: "darkred",
                backgroundColor: 'rgba(139, 0, 0, 0.5)',
                borderColor: 'rgba(139, 0, 0, 0.5)',
                borderWidth: 3,
                pointRadius: 0 
            }]
        },
        options: {
            plugins:{
                legend: {
                    display: false   // 범례 숨기기
                }
            },

            scales: {    
                r: {
                    angleLines: {
                        display: false
                    },

                    ticks: {
                        display: true,  // 라벨 보이기
                        font: {
                            size: 20 // 글자 크기
                        },
                        stepSize: 40, // 범위 간격 설정
                        // max: 100,  // 여기서 min max를 하면 min이 0이더라도 실제값 중 최소값부터 보임
                        // min: 0

                    },
                    
                    grid: {
                        color: 'black', // 라벨 경계의 선 색상
                        lineWidth: 1   // 라벨 경계의 선 굵기
                    },

                    pointLabels: {
                        font:{
                            color: 'black',
                            size: 20,   // 레이블 글자 크기 설정
                            weight: 400
                        },
                        // 레이블을 두 줄로 나눔
                        callback: function(value, index) {
                            // 각 레이블에 해당하는 데이터 값을 가져옴
                            const chart = this.chart;
                            const dataValue = chart.data.datasets[0].data[index];
                            // 두 줄로 반환 (첫 줄: label, 두 줄: 데이터값 + %)
                            return value + "\n" + dataValue + '%';
                        }
                    },
                    suggestedMin: 0,     // 여기서 min max시 실제 값과는 상관없이 이 범위 만큼 그래프에 그려짐
                    suggestedMax: 100
    
                }
            }
        }
    });
});

// document.addEventListener('DOMContentLoaded', (event) => {
//     const ctx = document.getElementById('spiderChart').getContext('2d');
//     const spiderChart = new Chart(ctx, {
//         type: 'radar',
//         data: {
//             labels: ['Python', 'R', 'SAS', 'SQL', 'HTML/CSS/JS', 'Spotfire', 'Tableau'],
//             datasets: [{
//                 label: '',
//                 data: [99, 90, 70, 85, 60, 90, 75],
//                 backgroundColor: 'rgba(139, 0, 0, 0.5)',
//                 borderColor: 'rgba(139, 0, 0, 0.5)',
//                 borderWidth: 3,
//                 pointRadius: 0 
//             }]
//         },
//         options: {
//             plugins: {
//                 legend: {
//                     display: false   // 범례 숨기기
//                 }
//             },
//             scales: {    
//                 r: {
//                     angleLines: {
//                         display: false
//                     },
//                     ticks: {
//                         display: true,  // 라벨 보이기
//                         font: {
//                             size: 20 // 글자 크기
//                         },
//                         stepSize: 40, // 범위 간격 설정
//                     },
//                     grid: {
//                         color: 'darkgray', // 라벨 경계의 선 색상
//                         lineWidth: 1   // 라벨 경계의 선 굵기
//                     },
//                     pointLabels: {
//                         display: false // 기본 라벨 숨기기
//                     },
//                     suggestedMin: 0,
//                     suggestedMax: 100
//                 }
//             },
//             plugins: {
//                 afterDraw: function(chart) {
//                     // const chart = this.chart;
//                     const ctx = chart.ctx;
//                     const pointLabels = chart.config.data.labels;
//                     const dataset = chart.data.datasets[0].data;
//                     const scale = chart.scales.r;

//                     pointLabels.forEach((label, index) => {
//                         const labelLines = [label, dataset[index] + '%'];
//                         const pointPosition = scale.getPointPosition(index, scale.drawingArea + 20);

//                         const lineHeight = 16; // 줄 사이 간격

//                         // 첫 번째 줄: label
//                         ctx.font = 'normal 14px Arial';
//                         ctx.fillStyle = 'black';
//                         ctx.textAlign = 'center';
//                         ctx.textBaseline = 'middle';
//                         ctx.fillText(labelLines[0], pointPosition.x, pointPosition.y - lineHeight);

//                         // 두 번째 줄: value + %
//                         ctx.font = 'bold 16px Arial';
//                         ctx.fillText(labelLines[1], pointPosition.x, pointPosition.y + lineHeight);
//                     });
//                 }
//             }
//         }
//     });
// });
