
var forFullName = [];
var forEmail = [];
var forPhoneNumber = [];
var forPassword = [];

function takeInupts(){

    var fullName = document.getElementById('fullName').value;

    var YourEmail = document.getElementById('YourEmail').value;

    var PhoneNumber = document.getElementById('PhoneNumber').value;

    var YourPassword = document.getElementById('YourPassword').value;


    forFullName.push(fullName);
    forEmail.push(YourEmail);
    forPhoneNumber.push(PhoneNumber);
    forPassword.push(YourPassword);

    document.getElementById('showText').innerHTML = `
    <h2>Your Details Are Here</h2>
    <p><b>Full Name:</b> ${forFullName}</p>
    <p><b>Email :</b> ${forEmail}</p>
    <p><b>Phone Number :</b>  ${forPhoneNumber}</p>
    <p><b>Password :</b> ${forPassword}</p>
    <p class='last'>Made By Syed Kumail Naqvi</p>`;
    
};

function pop(){

    forFullName.pop();
    forEmail.pop();
    forPhoneNumber.pop();
    forPassword.pop();

    document.getElementById('showText').innerHTML = `
    <h2>Your Details is here</h2>
    <p><b>Full Name:</b> ${forFullName}</p>
    <p><b>Email :</b> ${forEmail}</p>
    <p><b>Phone Number :</b>  ${forPhoneNumber}</p>
    <p><b>Password :</b> ${forPassword}</p>
    <p class='last'><strong>Design by Muhammad Waqas,  Roll No. 263696</strong></p>`;
  
};

function shift(){

    forFullName.shift();
    forEmail.shift();
    forPhoneNumber.shift();
    forPassword.shift();

    document.getElementById('showText').innerHTML = `
    <h2>Your Information</h2>
    <p><b>Full Name:</b> ${forFullName}</p>
    <p><b>Email :</b> ${forEmail}</p>
    <p><b>Phone Number :</b>  ${forPhoneNumber}</p>
    <p><b>Password :</b> ${forPassword}</p>
    <p class='last'>Made By Syed Kumail Naqvi</p>`;
  
}
