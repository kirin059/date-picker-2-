# date-picker 만들기(2) 
## javascript
---

```js
const mth = document.querySelector(".mth");
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octobor", "November", "December"];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

```


1️⃣ 이전(prev) / 이후(next) 월(month) 지정하기

 ```js
function goToNextMonth(e) {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    mth.textContent = months[month] + " " + year;   // mth 가 보여지는 부분에 textContent 메서드를 통해 원하는 문구를 입력
    populateDates();
}

function goToPrevtMonth(e) {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    mth.textContent = months[month] + " " + year;
    populateDates();
}
```


2️⃣ 전체 요일(days) 지정하기 (2월은 28일까지만 따로 지정) + 오늘 날짜 표기하기
    
```js
const days = document.querySelector(".days");  //일(day)이 보여지는 공간


function populateDates(e) {
    days.innerHTML = "";     // 초기화
    let amountDays = 31;

    if (month == 1) {        // 2월은 index 2
        amountDays = 28;
    }
    for (let i = 0; i < amountDays; i++) {
        const dayElement = document.createElement("div");

        dayElement.classList.add("day");
        dayElement.textContent = i + 1;

        // 오늘날짜 표기
        if (selectedDay == i + 1 && selectedYear == year && selectedMonth == month) {
            dayElement.classList.add("selected");
        }
        days.appendChild(dayElement);
    }
}
```


