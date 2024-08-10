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