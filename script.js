const button = document.getElementById("get-fact");
const randomButton = document.getElementById("get-random-fact");
const fact = document.querySelector(".fact");
const url = "http://numbersapi.com/";

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

function getRandomFact() {
  fact.style.display = "block";
  let num = Math.floor(Math.random() * 301);
  fetchFact(num);
}
button.addEventListener("click", getFact);
randomButton.addEventListener("click", getRandomFact);
