// Assignment Code
var generateBtn = document.querySelector("#generate");

//Function to generate a password based on user requirements
function generatePassword(){
  //Define variables
  var password = "";
  var passLength;
  var charTypes = ["lowercase", "uppercase", "numeric", "special"]; 
  var charsList = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "!@#$%^&*`~-_=+',./?;:"];
  var passListSpecial = [];

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
  //use Confirm form to figure out which special characters to include, and add those to the list of characters to use
  while(passListSpecial.length < 1){
    for (let i = 0; i < charTypes.length; i++) {
      const charType = charTypes[i];
      if(confirm("Would you like to require " + charType + " characters?")){
        passListSpecial.push(charType);
      }    
    }
  
  }

  //Generate password

  //For each character in the password, pick a random character from the chosen character types
  for (let i = 0; i < passLength; i++) {   
  //First pick the type of character by choosing a random character type from the list
    let type = passListSpecial[Math.floor(Math.random() * passListSpecial.length)];

  //Then pick out a random character from that type.
    let charOptions = charsList[charTypes.indexOf(type)];
    password += charOptions.charAt(Math.floor(Math.random() * charOptions.length));
  }

  //Return password
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
