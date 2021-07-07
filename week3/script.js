// function init() {
//   alert();
// }

function getPlus() {
  var firstx = document.getElementById("plus1").value;
  var firsty = document.getElementById("plus2").value;
  var x = parseInt(firstx) + parseInt(firsty);
  document.getElementById("demo").innerHTML = x;
}

function ClickMe() {
  showDate();
  Greeting();
  console.log(`Button has been clickws`);
}

function Greeting() {
  let dates = document.getElementById("greeting");
  dates.innerHTML = "Hello World";
}

function showDate() {
  let currentDate = new Date();

  const longDate = currentDate.toString();
  const shortDate = currentDate.toDateString();

  let dates = document.getElementById("currentDate");
  dates.innerHTML = shortDate;
}

// const planets = ["mercury", "venus", "earth"];

function ClearEmail() {
  let field = document.getElementById("email");

  console.log(`Current Value is ${field.value}`);
  field.value = "";
}

function SetEmail() {
  let field = document.getElementById("email");
  console.log(`Current Value is ${field.value}`);
  field.value = "Put your email here";
}

function WriteListAsHTML(listOfItem) {
  let messagePanel = document.getElementById("messagepanel");

  WriteListAsHTML(planets);

  let htmlText = ["<ul>"];

  let list = listOfItems.map((currentItem) => {
    return `<li>${currentItem}</li>`;
  });

  for (const item of listOfItem) {
    holdingText.push(`<li>${item}</li>`);
    console.log(holdingText.join());
  }
  holdingText.push(`</ol>`);
  messagePanel.innerHTML = holdingText.join("");
}

function WriteListAsHTML_1(listOfItem) {
  let messagePanel = document.getElementById("messagePanel");
}
