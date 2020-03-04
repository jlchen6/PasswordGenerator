// Assignment Code
var generateBtn = document.querySelector("#generate");

//Function to generate a password based on user requirements
function generatePassword(){
  //Define variables
  var passLength;
  var specialChars = []; 

  //Ask for password length. Must be between 8 and 128 chars
  //Continue asking for a valid password length until user enters a valid number
  var validLength = false;
  while(!validLength){
    passLength = parseInt(prompt("How long should the password be? Please enter a number between 8 and 128"));
    //Check to make sure that the user entered a valid number between 8 and 128.
    if((passLength >= 8 && passLength <= 128) && typeof passLength == "number"){
      validLength = true;
    }
    else {
      alert("Please enter a valid length!");
    }
  }

  //Ask for character types to include, such as lowercase, uppercase, numeric, and/or special characters

  //Generate password
  

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
