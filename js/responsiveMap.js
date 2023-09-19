var toggleBtn = document.querySelector(".navbar-toggleBtn");
var menu = document.querySelector(".navbar-menu");
var icons = document.querySelector(".navbar-icons");

// toggle버튼에 클릭 이벤트 추가 
toggleBtn.addEventListener("click", ()=>{
    menu.classList.toggle("active");
    icons.classList.toggle("active");
});

// classList - 클래스 목록 나타냄 
// .toggle - 숨겨져있으면 나타내고, 나타나있으면 숨겨줌 

// 화살표함수 function(){}    (=)    () =>{} : 화살표함수
