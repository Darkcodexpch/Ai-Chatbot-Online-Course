let CurrentPassword = "Kamran";


function Checkpassword(){
    let UserInput = document.getElementById('password').value
    if(UserInput === CurrentPassword){
        alert("Password matched")
        document.getElementById("myForm").reset();
    }
    else{
        alert("Please type correct password");
        document.getElementById("myForm").reset();
    }
}