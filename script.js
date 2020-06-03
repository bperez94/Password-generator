// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLNMOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numeric = "0123456789";
var special = "~!@#$%^&*";
var all = [upperCase,lowerCase,numeric,special];
var passwordText = document.querySelector("#password");
var passText = ""
// Write password to the #password input
function writePassword() {
 
  // first prompt (password lenght)
  var firstQuestion = prompt("You must choose a password lenght between 8-128 characters.");
    
  //second promt/if else
    if (firstQuestion > 7 && firstQuestion < 129)  {
      var secondQuestion = prompt("What character type would you like? You can pick uppercae, lowercase, numeric, and special. Or you may choose all.")
    } else {
      alert("incorrect answer try again")
    }

  
  
  

  // loop for passwords characters
 for (var i = 0; i < all.length; i++) {
   passwordText = passwordText + all.charAt(Math.floor(Math.random() * Math.floor(all.length - 1))); 
   
 }
  
  // add password to text box
  document.getElementById("password").all = passText
} 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


