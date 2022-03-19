//Add function to generate button
//add 8 character for every password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatePassword = password-Selection


//functionality 
var lowerCaseCharacter = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ]
var upperCaseCharacter = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "j", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
var specialCharacters = [ "@",
  "%",
  "+",
  "\\",
  "/",
  "‘",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".", ]
  
    var numericNumbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
  
  console.log(lowerCaseCharacter + upperCaseCharacter + specialCharacters + numericNumbers);


// function to prompt password options 
// variable to store length of password 
// a conditional state to see igf the password length is a number
// conditional statement to check to see if character length is at least 8 character long 
// conditional statement to check  if the password length is less thatv 128
//variable to store bulian to see if its true or false regarding special characters 
// create variable for upper,lowercase, 
// Write password to the #password input

function writePassword(max,min) 
{
  var password = Math.floor(Math.random() * (max - min + 5)) + min;
  var password = generatePassword();
  var password = randomPassword
  var passwordText = document.querySelector("#password");
  console.log('generatePassword + document.querySelector("#password")');

  passwordText.value = password;

}
// Add event listener to generate button
{
  function generatePassword()

var addEventListener=("click", function(){ alert("writePassword!");});

generateBtn.addEventListener("click", writePassword)

console.log(generatePassword);
console.log(math.floor+ randomPassword);
}
