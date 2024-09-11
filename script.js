const numBtn = document.getElementById("num-date");
const dateBtn = document.getElementById("date-num");
const numSection = document.querySelector(".number");
const dateSection = document.querySelector(".date");
const container = document.querySelector(".container");
const body = document.getElementsByTagName("body")[0];

const fact = document.querySelector(".fact");
const url = "http://numbersapi.com/";

//кнопка число -> дата
function numToDate() {
  numSection.style.display = "none";
  dateSection.style.display = "block";
  fact.innerHTML = "";
  container.style.background = "var(--color-brown)";
  body.style.background = "var(--color-white)";
  fact.style.display = "none";
  document.getElementById("month").value = "";
  document.getElementById("day").value = "";
  fact.style.border = "none";
}
numBtn.addEventListener("click", numToDate);

//кнопка дата -> число
function dateToNum() {
  dateSection.style.display = "none";
  numSection.style.display = "block";
  fact.innerHTML = "";
  container.style.background = "var(--color-white)";
  body.style.background = "var(--color-brown)";
  fact.style.display = "none";
  document.getElementById("num").value = "";
  fact.style.border = "3px, solid, var(--color-brown)";
}
dateBtn.addEventListener("click", dateToNum);

//для чисел

// объявление переменных
const buttonNum = document.getElementById("get-fact-num");
const randomNumButton = document.getElementById("get-random-fact-num");

function getFactNum() {
  fact.style.display = "block";
  const num = document.getElementById("num").value;
  if (num) {
    if (parseFloat(num) >= 0 && parseFloat(num) <= 300) {
      if (parseFloat(num) === Math.floor(num)) {
        fetchFact(num);
      } else {
        fact.innerHTML = `<p>the number must be an integer</p>`;
      }
    } else {
      fact.innerHTML = `<p>please enter a number between 0 and 300</p>`;
    }
  } else {
    fact.innerHTML = `<p>the input field  cannot be empty</p>`;
  }
}

//рандомный факт о числе
function getRandomFactNum() {
  fact.style.display = "block";
  const num = Math.floor(Math.random() * 301);
  fetchFact(num);
}

buttonNum.addEventListener("click", getFactNum);
randomNumButton.addEventListener("click", getRandomFactNum);

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

//для дат
//объявление переменных
const buttonDate = document.getElementById("get-fact-date");
const randomButtonDate = document.getElementById("get-random-fact-date");

function getFactDate() {
  const month = parseInt(document.getElementById("month").value);
  const day = parseInt(document.getElementById("day").value);
  const date = `2020/${month}/${day}`;
  fact.style.display = "block";
  if (month && day) {
    if (Date.parse(date)) {
      if (month === 2 && day > 29) {
        fact.innerHTML = "<p>please enter a valid date</p>";
      } else if (
        (month === 4 || month === 6 || month === 9 || month === 11) &&
        day > 30
      ) {
        fact.innerHTML = "<p>please enter a valid date</p>";
      } else {
        fetchFact(`${month}/${day}/date`);
      }
    } else {
      fact.innerHTML = "<p>please enter a valid date</p>";
    }
  } else {
    fact.innerHTML = "<p>the input field  cannot be empty</p>";
  }
}

buttonDate.addEventListener("click", getFactDate);

//рандомная дата
function getRandomFactDate() {
  fact.style.display = "block";
  const month = Math.ceil(Math.random() * 13);
  let day = 0;
  switch (month) {
    case 2:
      day = Math.ceil(Math.random() * 29);
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      day = Math.ceil(Math.random() * 30);
      break;
    default:
      day = Math.ceil(Math.random() * 31);
      break;
  }
  fetchFact(`${month}/${day}/date`);
}
randomButtonDate.addEventListener("click", getRandomFactDate);

// отправка запроса на сервер и получение данных
function fetchFact(num) {
  const finalUrl = url + num;

  fetch(finalUrl)
    .then((resp) => resp.text())
    .then((resp) => {
      fact.innerHTML = `<h2>${num.toString().replace("/date", "")}</h2>
        <p>${resp}</p>`;
    });
}
