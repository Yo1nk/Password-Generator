// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var numbers = "0123456789";
var letters = "abcdefghijklmnopqrstuvwxyz";
var symbols = "!@#$%^&*()";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function writePassword() {
    var password = "";
    var numbersA = window.prompt("Enter y/n to add / avoid Numbers");
    if (numbersA) {
    var lettersA = window.prompt("Enter y/n to add / avoid Letters");
    } if (lettersA) {
    var symbolsA = window.prompt("Enter y/n to add / avoid Symbols");
    } if (symbolsA) {
    var uppercaseA = window.prompt("Enter y/n to add / avoid uppercase");
    } if (uppercaseA) {
    var passwordLength = window.prompt("Select a Password Length 8-128");
    }

    if (numbersA.indexOf('y')>-1) {
     var chars = chars + numbers;
    } 
    if (lettersA.indexOf('y')>-1) {
    var chars = chars + letters;
    } 
    if (symbolsA.indexOf('y')>-1) {
     var chars = chars + symbols;
    } 
    if (uppercaseA.indexOf('y')>-1) {
     var chars = chars + uppercase;
    }

   var passwordLength = Math.min(128, Math.max(8, passwordLength));

 for (var i = 0; i <= passwordLength; ++i) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
  
        document.getElementById("password").value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
