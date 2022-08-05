let localee = JSON.stringify(localStorage.getItem("theData"));
console.log(localStorage);


let fullName = document.querySelector("#fullName");
let plate = document.querySelector("#plate");
let randId = Math.floor(Math.random() * 1000000);
let space =document.querySelector("#space")
// fullName.innerHTML = "Ediomo Peters";

console.log(localStorage.entDate);

fullName.textContent = localStorage.fName + " " + localStorage.lName;
plate.textContent = localStorage.lPlate;
space.textContent = localStorage.space;
randId.textContent = randId;