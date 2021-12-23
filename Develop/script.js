// Assignment Code
var generateBtn = document.querySelector("#generate");

// 1. Prompt user for password criteria
//    a. password lenght must be between 8 and 128
//    b. lower case, upper case, numbers and special characters
// 2. Validate the imput
// 3. Generate password based on criteria
// 4. Display password on page


// variables for the password

var uppercase = "ABCDEFGHIIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var specialcharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~" ;
var numbers = "0123456789";

//variable declaration for the prompts

var confirmuppercase;
var confirmlowercase;
var confirmnumbers;
var confirmspecialcharacters;
var confirmlenght = "";

// create prompts for passwordlength
function generatePassword () {

var confirmlenght = prompt ("Please choose the number of characters in your password. It must be between 8 and 128 characters")

// while loop if password less than 8 or more than 128 characters long

while (confirmlenght <= 8 || confirmlenght >= 128) {

// add alert if password does not comply

  alert("password length must be between 8 and 128 characters. please try again");
  var confirmlenght (prompt ("Please choose the number of characters in your password. It must be between 8 and 128 characters"));

} 

// Prompts for password characters using confirm

var confirmuppercase = confirm ("Click Ok to include uppercase characters")
var confirmlowercase = confirm ("Click Ok to include lowercase characters")
var confirmnumbers = confirm ("Click Ok to included numerical values")
var confirmspecialcharacters = confirm ("Click Ok to include special characters")


  


}



return "generated password will go here"


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
