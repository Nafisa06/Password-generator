// Assignment Code
var generateBtn = document.querySelector("#generate");

// 1. Prompt user for password criteria
//    a. password lenght must be between 8 and 128 
//    b. lower case, upper case, numbers and special characters

function generatePassword ()


// 2. Validate the imput
// 3. Generate password based on criteria


// 4. Display password on page

return "generated password will go here"


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
