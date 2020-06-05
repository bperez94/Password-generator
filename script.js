// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ("A","B","C","D","E","F","G","H","I","J","K","L","N","M","O","P","Q","R","S","T","U","V","W","X","Y","Z");
var lowerCase = ("a","b","c","e","f","g","h","i","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z,");
var numeric = ("0,1,2,3,4,5,6,7,8,9");
var special = ("~,!,@,#,$,%,^,&,*");
var all = upperCase.concat(lowerCase,numeric,special);
var passwordText = document.querySelector("#password");
var inculdeUpperCaese = document.getElementById("UpperCaseBox");
var inculdeLowerCase = document.getElementById("LowerCaseBox");
var inculdeNumeric = document.getElementById("NumericCaseBox");
var inculdeSpecial = document.getElementById("SpecialCaseBox");
var charNumber = document.getElementById("CharacterAmount");
// first alert (password lenght)
var firstQuestion = alert("pick you password lenght")
    
//second alert
var secondQuestion = alert("Choose if you want uppercase,lowercase,special characters, or numbers")

   
// Write password to the #password input
function writePassword() {

    // local variables
    var passBox = ""
     
    

    // loop for passwords characters
    for (var i = 0; i <= charNumber ; i++) {
        passBox = passBox + all.charAt(Math.floor(Math.random() * Math.floor(all.length - 1)));
        
    }
  
     // add password to text box
    document.getElementById("password").value = passBox
} 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


