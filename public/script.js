// 메인 페이지의 자기소개 타이핑 시각화 =================================================================================================
// 다시 호출할 일이 없으므로 "즉시 실행 함수"형태로 만들어 전역 스코프를 오염시키지 않기!

(function(){
    // spa 요소 노드 가져오기
    const spanE1 = document.querySelector("main h2 span");
    // 화면에 표시할 문장 배열
    const txtArr = ["Data Scientist", "Statistician", "Data Analyst", "Model Developer"];
    // 배열의 인덱스 초깃값
    let index = 0;
    // 화면에 표시할 문장 배열에서 요소를 하나 가져온 뒤, 배열로 만들기
    let currentTxt = txtArr[index].split("");

    // 위 currentTxt를 한글자씩 출력하게 함으로써 한글자씩 작성되게 보이는 함수 생성
    function writeTxt(){
        spanE1.textContent += currentTxt.shift();   // shift()는 배열에서 첫번째 추출하고, 그 배열에서 제거
                                                    // currentTxt에서 한글자씩 가져와서 spanE1.textContent에 넣기
        if (currentTxt.length !=0 ){                // 배열에 아직 출력할 단어가 남아있으면, 일정한 시간내에 다시 writeTxt 수행
            setTimeout(writeTxt, Math.floor(Math.random() * 100));
        }else{                                      // 모두 다 출력했으면, textContent에서 값을 가져와 쪼갠 뒤 다시 currentTxt에 채워넣고
                                                    // 일정 시간 이후에 spanE1에서 텍스트를 지우기(deleteTxt 함수 아래에서 생성)
            currentTxt = spanE1.textContent.split("");
            setTimeout(deleteTxt, 3000);
        }
    }

    // 뒤에서부터 한글자씩 추출해 지워지는 시각화 함수 생성
    function deleteTxt(){
        currentTxt.pop();                              // 현재 보여지는 문장이 끝에서부터 한개씩 추출 후 배열에서 제거
        spanE1.textContent = currentTxt.join("");      // 제거되고 남은 단어를 합쳐서 할당(끝에 문자가 점점 줄어들음)
        if(currentTxt.length != 0){                    // 제거할 문자가 아직 남아있다면, 일정한 시간내에 다시 deleteTxt 수행
            setTimeout(deleteTxt, Math.floor(Math.random() * 100));
        }else{                                         // txtArr에 접근할 index를 하나 증가시켜서 현재 보일 문장으로 선택 후 writeTxt() 수행
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[index].split("");
            writeTxt();
        }
    }

    writeTxt();
})();


// 헤더 영역의 메뉴를 통해 이동하기 ======================================================================================================

// 애니메이션 스크롤 이동
const animationMove = function(selector){
    const targetE1 = document.querySelector(selector);          // 매개변수(selector)로 이동할 대상 요소 노드 가져오기
    const browserScrollY = window.pageYOffset;                  // 현재 웹 브라우저의 스크롤 정보(y 값)
    const targetScrollY = targetE1.getBoundingClientRect().top + browserScrollY;    // 이동할 대상의 위치(y 값)
    window.scrollTo({top: targetScrollY, behavior: "smooth"})   // 스크롤 이동
};

// button 태그에 data-* 속성으로 animation-scroll과 target 속성을 지정
const scrollMoveE1 = document.querySelectorAll("[data-animation-scroll='true']");
for (let i = 0; i < scrollMoveE1.length; i++){
    scrollMoveE1[i].addEventListener("click", function(e){
        const target = this.dataset.target;
        animationMove(target);
    });
}



// 스파이더 차트 ======================================================================================================
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
                        stepSize: 35, // 범위 간격을 설정
                        max: 100,  // 최대 값 설정
                        min: 0,    // 최소 값 설정
                        callback: function(value) {
                            // ticks 값을 0, 35, 70, 100만 표시
                            if (value === 0 || value === 35 || value === 70 || value === 100) {
                                return value;
                            }
                            return '';
                        }

                    },
                    
                    grid: {
                        color: 'black', // 라벨 경계의 선 색상
                        lineWidth: 1.5   // 라벨 경계의 선 굵기
                    },

                    pointLabels: {
                        font:{
                            color: 'black',
                            size: 18,   // 레이블 글자 크기 설정
                            weight: "bold"
                        },
                    },
                    suggestedMin: 0,     // 여기서 min max시 실제 값과는 상관없이 이 범위 만큼 그래프에 그려짐
                    suggestedMax: 100
    
                }
            }
        }
    });
});



// 가로 막대 그래프 ======================================================================================================
const ctx = document.getElementById('myBarChart').getContext('2d');
const myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['논문', '연구과제', '프로젝트', '자격증', '분석 대회'],
        datasets: [{
            label: '',  // 범례를 제거하기 위해 빈 값 설정
            data: [4, 5, 2, 5, 10],
            backgroundColor: 'black',
            borderColor: 'black',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,  // 부모 요소 크기에 맞춰 차트 크기 조정
        maintainAspectRatio: false,  // 부모 요소의 크기에 맞추기 위해 비율 고정 해제
        indexAxis: 'y', // 가로 막대그래프
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: true // X축의 선은 표시
                },
                ticks: {
                    display: false // X축 값 숨김
                }
            },
            y: {
                grid: {
                    display: true // Y축의 선은 표시
                },
                ticks: {
                    display: false // Y축 값 숨김
                }
            }
        },
        plugins: {
            legend: {
                display: false // 범례 숨김
            },
            tooltip: {
                enabled: false // 툴팁 비활성화
            }
        }
    },
    plugins: [{
        afterDatasetsDraw: function(chart) {
            const ctx = chart.ctx;
            chart.data.datasets.forEach(function(dataset, i) {
                const meta = chart.getDatasetMeta(i);
                meta.data.forEach(function(bar, index) {
                    const value = dataset.data[index];
                    const label = chart.data.labels[index];

                    ctx.save();  // 이전 상태 저장
                    ctx.font = 'bold 15px Arial';
                    ctx.textAlign = 'left';

                    // 차트 너비를 넘어가지 않도록 조정
                    let textPositionX = bar.x + 5; // 막대 끝에서 5px 오른쪽
                    let textColor = '#000'; // 기본 폰트 색상

                    // 텍스트가 차트 영역을 넘는지 확인
                    if (textPositionX + ctx.measureText(`${label} ${value}`).width > chart.chartArea.right) {
                        textPositionX = chart.chartArea.right - ctx.measureText(`${label} ${value}`).width - 5;
                        textColor = '#fff'; // 차트 바깥으로 넘어갈 경우 폰트 색상을 흰색으로 설정
                    }

                    ctx.fillStyle = textColor; // 폰트 색상 설정
                    ctx.fillText(`${label} ${value}`, textPositionX, bar.y + 5);
                    ctx.restore();  // 이전 상태 복원
                });
            });
        }
    }]
});
