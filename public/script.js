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