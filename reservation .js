const entryDate = document.querySelector('#inputEntrydate').value
const exitDate = document.querySelector('#inputExitdate').value
const space = document.querySelector('#inputSpace').value
const carModel = document.querySelector('#carModel').value
const licensePlate = document.querySelector('#licensePlate').value
const firstName = document.querySelector('#inputFirstName').value
const lastName = document.querySelector('#inputLastName').value
const email = document.querySelector('#inputEmail').value
const password = document.querySelector('#inputPassword').value
const phonenumber = document.querySelector('#inputPhoneNumber').value
// alert("hello")

// if(firstName)console.log(firstName)
// else console.log("no data")
// let info = {
//     entDate: entryDate,
//     exDate: exitDate,
//     space : space,
//     Model : carModel,
//     lPlate : licensePlate,
//     fName : firstName,
//     lName : lastName,
//     email : email,
//     password : password,
//     pNumber : phonenumber
// }
let peoplesData = JSON.stringify({entDate: entryDate,
    exDate: exitDate,
    space : space,
    Model : carModel,
    lPlate : licensePlate,
    fName : firstName,
    lName : lastName,
    email : email,
    password : password,
    pNumber : phonenumber})



localStorage.setItem("theData", peoplesData)
console.log(localStorage); 

