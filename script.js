// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwzxy"
var upperCase = lowerCase.toLocaleUpperCase
var numeric = "0123456789"
var special = "!@#$%^&*"
var passLenght 

// prompt for passs word lenght
function checkLenght() {
    var userChoice = prompt("Choose password lenght between 8 to 128 characters")
    passLenght = parseInt(userChoice)
    if (passLenght < 8 || passLenght > 128 ) {
        alert("enter value between 8 and 128");
        checkLenght();
    } 
    else { 
        return passLenght;
    }
}
function generatePassword(){
    checkLenght();
    // confirms 
    var upperCaseCheck = confirm("Do you want upper case characters");
    var lowerCaseConfirm = confirm("Do you want lower case characters");
    var numericConfirm = confirm("Do you want numeric characters");
    var specialConfirm = confirm("Do you want special characters");
    var characters 
    var password 
    
    if (upperCaseCheck && lowerCaseConfirm && numericConfirm && specialConfirm) {
      characters = lowerCase + upperCase + numeric + special;

    }
  // needs more if statments about all possible user choices

  
    for (var i = 0; i < passLenght; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.lenght));
        
    }
    console.log(password)
}

generatePassword()
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


