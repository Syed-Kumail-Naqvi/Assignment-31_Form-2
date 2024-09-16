var fullName = document. getElementById("fullName");
var fatherName = document. getElementById("fatherName");
var rollNumber = document. getElementById("rollNumber");
var email = document. getElementById("email");
var phoneNo = document. getElementById("phoneNo");
var doBirth = document. getElementById("doBirth");
var result = document. getElementById("output");
var submit = document. getElementById("submit");
var clear = document. getElementById("clear");
var clearAll = document. getElementById("clearAll");

function submitValue (){
    
    output.innerHTML = ["Full-Name: "] + fullName.value;
    output2.innerHTML = ["Father's-Name: "] + fatherName.value; 
    output3.innerHTML = ["Roll-Number: "] + rollNumber.value;
    output4.innerHTML = ["Email: "] + email.value;
    output5.innerHTML = ["Phone-No: "] + phoneNo.value;
    output6.innerHTML = ["Date-of-Birth: "] + doBirth.value;      
}


// submit.addEventListener('click', submitValue);