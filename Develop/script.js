// Assignment code here

// funtion to get a random integer
function randomInt(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }
  var random = Math.random()
  return Math.floor(min*(1 - random) + random*max);
}

// funtion to get a random character from the list
function randomItem(list) {
  return list[randomInt(list.length)];
}



function generatePassword() {
 
// Displays a promt asking the user to choose a number between 9-128.
  var userInput = window.prompt("How long would you like your password to be? \n Please choose a number between 1-128")

  var passwordLength = parseInt(userInput);
// If the user puts in an input thats not a number this alert will pop up.
    if (isNaN(passwordLength)) {
      window.alert("Please enter a number that is between 8-128");
      return;
    }
// If the user chooses a number that is outside this range then this alert will pop up.
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between a number 8-128");
    return;
  }

// This is for the user to choose if they would like to add numbers, symbols, uppercase letters, or lowercase letters.
  var includeNumbers = window.confirm("Would you like to add numbers to your password?");
  var includeSymbols = window.confirm("Would you like to add symbols to your password?");
  var includeUppercase = window.confirm("Would you like to add uppercase letters to your password?");
  var includeLowercase = window.confirm("Would you like to add lowercase letters to your password?");

// Arrays for the window.confirm to pull information from.
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "-", "_"];
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseList = []
// I made the for loop so I didn't have to type each individual uppercase letter.
  for ( var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase();
  }

// This variable contains all the values that that the user wants in their password.
  var characterList = [];

// When the user confirms if they want numbers, symbols, uppercase, or lowercase then it gets put into this catorgory for the browerser to choose from.
  if (includeNumbers === true) {
    characterList.push(numberList);
  }

  if (includeSymbols === true) {
    characterList.push(symbolList);
  }

  if (includeLowercase === true) {
    characterList.push(lowercaseList);
  }
  
  if (includeUppercase === true) {
    characterList.push(uppercaseList);
  }

 var generatedPassword = "";

// Generates a random password depending on the user inputs.
 for (var i = 0; i < passwordLength; i++) {
  var randomList = randomItem(characterList);
  var randomPassword = randomItem(randomList);
  generatedPassword += randomPassword;
 }
console.log(generatedPassword);

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
