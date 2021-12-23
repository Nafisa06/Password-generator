// Assignment Code
var generateBtn = document.querySelector("#generate");

// 1. Prompt user for password criteria
//    a. password lenght must be between 8 and 128
//    b. lower case, upper case, numbers and special characters
// 2. Validate the imput
// 3. Generate password based on criteria
// 4. Display password on page


// variables for the password

var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialcharacters = ["!", "#", "$", "%", "&","'", "(",")", "*", "+", ",", "-", ".", "/", ";", "<", "=", ">", "?", "@", "[", "\" "]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//variable declaration for the prompts

var confirmUppercase;
var confirmLowercase;
var confirmNumbers;
var confirmSpecialCharacters;
var confirmLength =""

// create prompts for passwordlength
function generatePassword () {

var confirmLength  = window.prompt("Password must be between 8 and 128 characters. How many characters would you like for your password");


// while loop if password less than 8 or more than 128 characters long

while (confirmLength <= 8 || confirmLength>= 128) {

// add alert if password does not comply

  alert("password length must be between 8 and 128 characters. please try again");

  var confirmlength = window.prompt("Please choose the number of characters in your password. It must be between 8 and 128 characters");

} 

// Prompts for password characters using confirm

var confirmUppercase = confirm ("Click Ok to include uppercase characters")
var confirmLowercase = confirm ("Click Ok to include lowercase characters")
var confirmNumbers = confirm ("Click Ok to included numerical values")
var confirmSpecialCharacters = confirm ("Click Ok to include special characters")

}

// Password parameters using concat

var passwordCharacters = []

if (confirmUppercase) {

  passwordCharacters = passwordCharacters.concat (uppercase)
}

if (confirmLowercase) {

  passwordCharacters = passwordCharacters.concat (lowercase)
}

if (confirmSpecialCharacters) {

  passwordCharacters = passwordCharacters.concat (specialcharacters)
}

if (confirmNumbers) {

  passwordCharacters = passwordCharacters.concat (numbers)
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
