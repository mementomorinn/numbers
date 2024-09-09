const numBtn = document.getElementById("num-date");
const dateBtn = document.getElementById("date-num");
const numSection = document.querySelector(".number");
const dateSection = document.querySelector(".date");

//кнопка число -> дата
function numToDate() {
  numSection.style.display = "none";
  dateSection.style.display = "block";
  fact.innerHTML = "";
}
numBtn.addEventListener("click", numToDate);

//кнопка дата -> число
function dateToNum() {
  dateSection.style.display = "none";
  numSection.style.display = "block";
  fact.innerHTML = "";
}
dateBtn.addEventListener("click", dateToNum);

//для чисел
// объявление переменных
const buttonNum = document.getElementById("get-fact-num");
const randomNumButton = document.getElementById("get-random-fact-num");
const fact = document.querySelector(".fact");
const url = "http://numbersapi.com/";

//сбор данных с поля для ввода
function getFact() {
  let num = document.getElementById("num").value;
  if (num) {
    fact.style.display = "block";
    if (num >= 0 && num <= 300) {
      fetchFact(num);
    } else {
      fact.innerHTML = `<p>please enter a number between 0 and 300</p>`;
    }
  } else {
    fact.style.display = "block";
    fact.innerHTML = `<p>the input field  cannot be empty</p>`;
  }
}

//рандомный факт о числе
function getRandomFact() {
  fact.style.display = "block";
  let num = Math.floor(Math.random() * 301);
  fetchFact(num);
}

buttonNum.addEventListener("click", getFact);
randomNumButton.addEventListener("click", getRandomFact);

// отправка запроса на сервер и получение данных
function fetchFact(num) {
  let finalUrl = url + num;
  fetch(finalUrl)
    .then((resp) => resp.text())
    .then((resp) => {
      fact.innerHTML = `<h2>${num}</h2>
      <p>${resp}</p>`;
      document.querySelector(".container").append(fact);
    });
}

// async function fetchFact(num) {
//   const finalUrl = url + num;
//   try {
//     const response = await fetch(finalUrl);
//     const data = await response.text();
//     fact.innerHTML = `<h2>${num}</h2>
//         <p>${data}</p>`;
//   } catch (error) {
//     console.log(error);
//   }
// }

//для даты
