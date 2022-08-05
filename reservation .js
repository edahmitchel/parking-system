const submitBtn = document.querySelector('#submit-btn');

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

submitBtn.addEventListener('click', (e)=>{
    const entryDate = document.querySelector('#inputEntrydate').value;
    console.log(entryDate)
    const exitDate = document.querySelector('#inputExitdate').value;
    console.log(exitDate)
    const space = document.querySelector('#inputSpace').value;
    const carModel = document.querySelector('#carModel').value;
    const licensePlate = document.querySelector('#licensePlate').value;
    const firstName = document.querySelector('#inputFirstName').value;
    const lastName = document.querySelector('#inputLastName').value;
    const email = document.querySelector('#inputEmail').value;
    const password = document.querySelector('#inputPassword').value;
    const phonenumber = document.querySelector('#inputPhoneNumber').value;
    let peoplesData = JSON.stringify({entDate: entryDate,exDate: exitDate,space : space, model : carModel,lPlate : licensePlate,fName : firstName,lName : lastName,email : email,password : password,pNumber : phonenumber})
    localStorage.setItem("theData", peoplesData);
    console.log(JSON.parse(localStorage.getItem("theData"))); 
})

let info = localStorage.getItem("theData");



