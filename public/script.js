// function showBox(boxId) {
//     // 모든 박스를 비활성화
//     const boxes = document.querySelectorAll('.box');
//     boxes.forEach(box => box.classList.remove('active'));

//     // 클릭된 박스를 활성화
//     const activeBox = document.getElementById(boxId);
//     activeBox.classList.add('active');
// }

function showBox(boxId) {
    // 클릭된 박스를 가져오기
    const activeBox = document.getElementById(boxId);

    // 클릭된 박스가 이미 활성화되어 있는지 확인
    if (activeBox.classList.contains('active')) {
        // 활성화되어 있으면 비활성화
        activeBox.classList.remove('active');
    } else {
        // 모든 박스를 비활성화
        const boxes = document.querySelectorAll('.box');
        boxes.forEach(box => box.classList.remove('active'));

        // 클릭된 박스를 활성화
        activeBox.classList.add('active');
    }
}

function closeBox(boxId) {
    // 모든 박스를 비활성화
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.classList.remove('active'));

    // 클릭된 박스를 활성화
    const activeBox = document.getElementById(boxId);
    activeBox.classList.remove('active');
}


document.addEventListener('DOMContentLoaded', (event) => {
    const ctx = document.getElementById('spiderChart').getContext('2d');
    const spiderChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Python', 'R', 'SAS', 'SQL', 'JS/CSS', "Spotfire", "Tableau"],
            datasets: [{
                label: '',
                data: [99, 90, 70, 85, 60, 90, 75],
                // backgroundColor: 'rgba(255, 255, 255, 0.5)',
                // borderColor: "darkred",
                backgroundColor: 'rgba(139, 0, 0, 0.5)',
                borderColor: 'rgba(139, 0, 0, 0.5)',
                borderWidth: 7,
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
                        stepSize: 20, // 범위 간격 설정
                        // max: 100,  // 여기서 min max를 하면 min이 0이더라도 실제값 중 최소값부터 보임
                        // min: 0

                    },
                    
                    grid: {
                        color: 'lightgray', // 라벨 경계의 선 색상
                        lineWidth: 3   // 라벨 경계의 선 굵기
                    },

                    pointLabels: {
                        font:{
                            size: 25,   // 레이블 글자 크기 설정
                            weight: 700
                        }
                    },
                    suggestedMin: 0,     // 여기서 min max시 실제 값과는 상관없이 이 범위 만큼 그래프에 그려짐
                    suggestedMax: 100
    
                }
            }
        }
    });
});





// const ctx = document.getElementById('myPieChart').getContext('2d');

// const data = {
//     labels: ['Red', 'white'],
//     datasets: [{
//         label: 'Sample Pie Chart',
//         data: [10,2],
//         backgroundColor: [
//             'red',
//             'black',
//             // 'rgba(255, 206, 86, 0.6)',
//             // 'rgba(75, 192, 192, 0.6)',
//             // 'rgba(153, 102, 255, 0.6)'
//         ],
//         borderColor: [
//             'rgba(255, 99, 132, 1)',
//             'rgba(54, 162, 235, 1)',
//             // 'rgba(255, 206, 86, 1)',
//             // 'rgba(75, 192, 192, 1)',
//             // 'rgba(153, 102, 255, 1)'
//         ],
//         borderWidth: 1
//     }]
// };

// const config = {
//     type: 'pie',
//     data: data,
//     // options: {
//     //     responsive: true,
//     //     plugins: {
//     //         // legend: {
//     //         //     position: 'top',
//     //         // },
//     //         tooltip: {
//     //             enabled: true
//     //         }
//     //     }
//     // }
// };

// const myPieChart = new Chart(ctx, config);

// 문서의 DOM이 완전히 로드된 후 실행됩니다.
document.addEventListener('DOMContentLoaded', (event) => {
    // 'donutChart' ID를 가진 캔버스 요소를 가져와 2D 컨텍스트를 설정합니다.
    const ctx = document.getElementById('donutChart1').getContext('2d');

    // Chart.js를 사용하여 도넛 차트를 생성합니다.
    const donutChart = new Chart(ctx, {
        // 차트의 타입을 'doughnut'으로 설정합니다.
        type: 'doughnut',
        // 차트에 표시할 데이터와 레이블을 설정합니다.
        data: {
            // 데이터의 레이블을 설정합니다. 이 경우 'ML'과 빈 문자열을 사용합니다.
            labels: ['', "ML"],
            // 데이터셋을 정의합니다. 하나의 데이터셋을 사용하여 차트를 그립니다.
            datasets: [{
                // 데이터셋의 레이블을 'Skills'로 설정합니다.
                label: 'Skills',
                // 도넛 차트에서 표시할 데이터 값을 배열로 제공합니다.
                data: [10, 90],
                // 각 데이터 항목에 대한 배경 색상을 배열로 설정합니다.
                backgroundColor: [
                    'white', // 첫 번째 데이터 항목의 배경 색상
                    '#404040' // 두 번째 데이터 항목의 배경 색상
                ],
                // 각 데이터 항목에 대한 테두리 색상을 배열로 설정합니다.
                borderColor: [
                    'whitesmoke', // 첫 번째 데이터 항목의 테두리 색상
                    'black' // 두 번째 데이터 항목의 테두리 색상
                ],
                // 데이터 항목의 테두리 두께를 설정합니다.
                borderWidth: 1
            }]
        },
        // 차트의 옵션을 설정합니다.
        options: {
            // 플러그인 설정
            plugins: {
                // 범례를 숨기기 위해 설정합니다.
                legend: {
                    display: false // 범례를 표시하지 않습니다.
                },
                // 툴팁을 활성화합니다.
                tooltip: {
                    enabled: true // 툴팁을 활성화합니다.
                }
            },
            // 차트를 반응형으로 설정하여 크기를 조절할 수 있게 합니다.
            responsive: true,
            // 차트의 종횡비를 유지하지 않도록 설정합니다.
            maintainAspectRatio: false,
            // 도넛의 중앙 빈 공간 크기를 조정합니다.
            cutout: '70%', // 도넛의 중앙 빈 공간의 크기를 70%로 설정합니다.
        },
        // 플러그인 설정 배열
        plugins: [{
            // 차트가 그려지기 전에 호출되는 콜백 함수입니다.
            beforeDraw: (chart) => {
                // 차트의 컨텍스트와 차트 영역을 가져옵니다.
                const {ctx, chartArea} = chart;
                // 차트 영역의 크기와 위치를 가져옵니다.
                const {width, height, top, left} = chartArea;
                // 차트의 중앙 좌표를 계산합니다.
                const centerX = (left + width) / 2;
                const centerY = (top + height) / 2;
                // 텍스트의 폰트 크기와 스타일을 설정합니다.
                const fontSize = 24;
                const fontFamily = 'Arial';
                const fontColor = '#404040'; // 텍스트 색상

                // 컨텍스트 상태 저장
                ctx.save();
                // 폰트 스타일을 설정합니다.
                ctx.font = `${fontSize}px ${fontFamily}`;
                // 텍스트 정렬을 중앙으로 설정합니다.
                ctx.textAlign = 'center';
                // 텍스트 기준선을 중앙으로 설정합니다.
                ctx.textBaseline = 'middle';
                // 텍스트 색상을 설정합니다.
                ctx.fillStyle = fontColor;

                // 중앙에 'ML' 텍스트를 그립니다.
                ctx.fillText('ML', centerX, centerY);
                // 컨텍스트 상태를 복원합니다.
                ctx.restore();
            }
        }]
    });
});



document.addEventListener('DOMContentLoaded', (event) => {
    const ctx = document.getElementById('donutChart2').getContext('2d');
    const donutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['', "Statistic"],
            datasets: [{
                label: 'Skills',
                data: [10, 90],
                backgroundColor: [
                    'white', // 첫 번째 데이터 항목의 배경 색상
                    '#3F704D' // 두 번째 데이터 항목의 배경 색상
                ],
                borderColor: [
                    'whitesmoke', // 첫 번째 데이터 항목의 테두리 색상
                    'black' // 두 번째 데이터 항목의 테두리 색상
                ],
                // 데이터 항목의 테두리 두께를 설정합니다.
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false // 범례를 표시하지 않습니다.
                },
                tooltip: {
                    enabled: true // 툴팁을 활성화합니다.
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%', // 도넛의 중앙 빈 공간의 크기를 70%로 설정합니다.
        },
        plugins: [{
            beforeDraw: (chart) => {
                const {ctx, chartArea} = chart;
                const {width, height, top, left} = chartArea;
                const centerX = (left + width) / 2;
                const centerY = (top + height) / 2;
                const fontSize = 24;
                const fontFamily = 'Arial';
                const fontColor = '#3F704D'; // 텍스트 색상
                
                ctx.save();
                ctx.font = `${fontSize}px ${fontFamily}`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = fontColor;
                ctx.fillText('Statistic', centerX, centerY);
                ctx.restore();
            }
        }]
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    const ctx = document.getElementById('donutChart3').getContext('2d');
    const donutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['', "Coding"],
            datasets: [{
                label: 'Skills',
                data: [10, 90],
                backgroundColor: [
                    'white', // 첫 번째 데이터 항목의 배경 색상
                    '#D0B8A2' // 두 번째 데이터 항목의 배경 색상
                ],
                borderColor: [
                    'whitesmoke', // 첫 번째 데이터 항목의 테두리 색상
                    'black' // 두 번째 데이터 항목의 테두리 색상
                ],
                // 데이터 항목의 테두리 두께를 설정합니다.
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false // 범례를 표시하지 않습니다.
                },
                tooltip: {
                    enabled: true // 툴팁을 활성화합니다.
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%', // 도넛의 중앙 빈 공간의 크기를 70%로 설정합니다.
        },
        plugins: [{
            beforeDraw: (chart) => {
                const {ctx, chartArea} = chart;
                const {width, height, top, left} = chartArea;
                const centerX = (left + width) / 2;
                const centerY = (top + height) / 2;
                const fontSize = 24;
                const fontFamily = 'Arial';
                const fontColor = '#D0B8A2'; // 텍스트 색상
                
                ctx.save();
                ctx.font = `${fontSize}px ${fontFamily}`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = fontColor;
                ctx.fillText('Coding', centerX, centerY);
                ctx.restore();
            }
        }]
    });
});
