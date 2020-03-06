// Assignment Code
var generateBtn = document.querySelector("#generate");

//Function to generate a password based on user requirements
function generatePassword(){

  //Define variables
  //password object that stores important information necessary to generate a password
  var pass = {
    word: "",
    length: 0,
    specialChars: []
  };

  //chars object that holds arrays of characters used to build the password
  var chars = {
    types: ["lowercase", "uppercase", "numeric", "special"],
    list: ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "!@#$%^&*`~-_=+',./?;:"]
  };

  //Ask for password length. Must be between 8 and 128 chars
  //Continue asking for a valid password length until user enters a valid number
  var validLength = false;
  while(!validLength){
    //Ask the user for a number and parse out only the number from that input.
    pass.length = parseInt(prompt("How long should the password be? Please enter a number between 8 and 128"));
    //Check to make sure that the user entered a valid number between 8 and 128.
    if((pass.length >= 8 && pass.length <= 128)){
      validLength = true;
    }
    //If they didn't enter a valid number, alert the user and continue looping.
    else {
      alert("Please enter a valid length!");
    }
  }

  //Ask for character types to include, such as lowercase, uppercase, numeric, and/or special characters
  //use Confirm form to figure out which special characters to include, and add those to the list of characters to use
  //Continue looping while the password's list of special characters is empty
  while(pass.specialChars.length < 1){
    //Loop through the list of character types
    for (let i = 0; i < chars.types.length; i++) {
      //Variable to hold the current character type
      const charType = chars.types[i];
      //Ask the user if they would like to use this character type.
      //If they do, add the type to the password's list of special characters to use
      if(confirm("Would you like to require " + charType + " characters?")){
        pass.specialChars.push(charType);
      }    
    }
  
  }

  //Generate password

  //For each character in the password, pick a random character from the chosen character types
  for (let i = 0; i < pass.length; i++) {   
  //First pick the type of character by choosing a random character type from the list
    let type = pass.specialChars[Math.floor(Math.random() * pass.specialChars.length)];

  //Then pick out a random character from that type.
    //Grab the list of characters of the randomly selected type
    let charOptions = chars.list[chars.types.indexOf(type)];

    //Add a random character from the list to the password.
    pass.word += charOptions.charAt(Math.floor(Math.random() * charOptions.length));
  }

  //Return password
  return pass.word;
}

// Write password to the #password input
function writePassword() {
  //Generate random password using generatePassword() function
  var password = generatePassword();
  //Select the textbox for the password to display
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
