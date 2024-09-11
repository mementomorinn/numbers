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
  document.getElementById("num").value = "";
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

// function fetchFact(num) {
//   let finalUrl = url + num;
//   fetch(finalUrl)
//     .then((resp) => resp.text())
//     .then((resp) => {
//       console.log(resp);
//     });
// }

// fetchFact("12/9/date");
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
//объявление переменных
const buttonDate = document.getElementById("get-fact-date");
const randomButtonDate = document.getElementById("get-random-fact-date");

function getFactDate() {
  const month = document.getElementById("month").value;
  const day = document.getElementById("day").value;
  if (month && day) {
    fact.style.display = "block";
    if (month >= 1 && month <= 12 && day > 0 && day <= 31) {
      switch (month) {
        case 2:
          if (day <= 29) {
            fetchFact(`${month}/${day}/date`);
            break;
          }
        case 4:
        case 6:
        case 9:
        case 11:
          if (day <= 30) {
            fetchFact(`${month}/${day}/date`);
            break;
          }
        default:
          if (day <= 31) {
            fetchFact(`${month}/${day}/date`);
            break;
          }
      }
    } else {
      fact.style.display = "block";
      fact.innerHTML = "<p>please enter a valid date</p>";
    }
  } else {
    fact.style.display = "block";
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
// for (let i = 0; i < 13; i++) {
//   getRandomFactDate();
// }

// отправка запроса на сервер и получение данных
function fetchFact(num) {
  const finalUrl = url + num;
  fetch(finalUrl)
    .then((resp) => resp.text())
    .then((resp) => {
      fact.innerHTML = `<h2>${num.toString().replace("/date", "")}</h2>
      <p>${resp}</p>`;
      document.querySelector(".container").append(fact);
    });
}
