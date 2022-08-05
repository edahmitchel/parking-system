let localee = JSON.stringify(localStorage.getItem("theData"));
console.log(localStorage);


let fullName = document.querySelector("#fullName");
let plate = document.querySelector("#plate");
let randId = document.querySelector("#randId");
// fullName.innerHTML = "Ediomo Peters";

console.log(localStorage.entDate);

fullName.textContent = localStorage.fName;