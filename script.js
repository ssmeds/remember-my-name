let storedName =localStorage.getItem("userName");
let input = document.createElement("input");
let button = document.createElement("button");
let nameDiv = document.createElement("div");
let nameUl = document.createElement("ul");
// let nameLi = document.createElement("li");

button.textContent = "Click me";

document.body.appendChild(input);
document.body.appendChild(button);
document.body.appendChild(nameDiv);
nameDiv.appendChild(nameUl);

nameUl.insertAdjacentHTML("afterbegin", `<li>${storedName}<button id="remove">Remove</button></li>`)

button.addEventListener("click", function () {
  let userName = input.value;
  input.value = "";
  input.focus();

  nameUl.insertAdjacentHTML("afterbegin", `<li>${userName} <button id="remove">Remove</button></li>`);
  localStorage.setItem("userName", userName);

});

nameUl.addEventListener("click", function (e) {
  console.log("e:",e);
  console.log("e.target:", e.target);
  console.log("e.target.parnetElement:", e.target.parentElement);
  e.target.parentElement.remove();
  localStorage.removeItem("userName");
  // console.log(userName);

});




// Skapa en webbsida med ett enkelt inputfält och en knapp.

// När besökaren skriver sitt namn i inputfältet så skall vi visa detta i ett nytt <div> element på sidan.

// Du skall sedan använda localStorage för att spara värdet besökaren har lämnat och vi skall kunna stänga ner webbläsaren och återkomma till sidan och vårat namn skall fortfarande vara utskrivet.

// Har besökaren lämnat sitt namn, så skall det även finnas en "radera" knapp som tar bort värdet ur localStorage.