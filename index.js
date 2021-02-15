"use strict";

const datePicker = document.querySelector(".datePicker");
const selectedDates = document.querySelector(".selectedDate");
const dates = document.querySelector(".dates");
const mth = document.querySelector(".mth");
const nextMth = document.querySelector(".nextMonth");
const prevMth = document.querySelector(".prevMonth");
const days = document.querySelector(".days");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octobor", "November", "December"];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

mth.textContent = months[month] + " " + year;

selectedDates.textContent = formatDate(date);
populateDates();

// Event Lesteners
datePicker.addEventListener("click", toggleDatePicker);
nextMth.addEventListener("click", goToNextMonth);
prevMth.addEventListener("click", goToPrevtMonth);

// Functions
function toggleDatePicker(e) {
    // console.log(e.target);
    console.log(e.path);
    if (!checkEventPath(e.path, "dates")) {
        dates.classList.toggle("active");
    }
}

function goToNextMonth(e) {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    mth.textContent = months[month] + " " + year;
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

function populateDates(e) {
    days.innerHTML = "";
    let amountDays = 31;

    if (month == 1) {
        amountDays = 28;
    }
    for (let i = 0; i < amountDays; i++) {
        const dayElement = document.createElement("div");

        dayElement.classList.add("day");
        dayElement.textContent = i + 1;

        // 오늘날짜 지정
        if (selectedDay == i + 1 && selectedYear == year && selectedMonth == month) {
            dayElement.classList.add("selected");
        }
        days.appendChild(dayElement);
    }
}

function checkEventPath(path, selector) {
    for (let i = 0; i < path.length; i++) {
        if (path[i].classList && path[i].classList.contains(selector)) {
            return true;
        }
    }
    return false;
}

function formatDate(d) {
    let day = d.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    let month = d.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    let year = d.getFullYear();

    return day + " / " + month + " / " + year;
}
