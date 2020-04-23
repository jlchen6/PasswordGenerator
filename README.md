# PasswordGenerator

Generates a password based on user-entered password requirements

## Using the Password Generator
https://jlchen6.github.io/PasswordGenerator/
1. Push the big red "Generate Password" button
2. Enter a number between 8 and 128 to designate the password length
3. Answer the yes or no questions regarding which character types to use
    * Can choose from lowercase, uppercase, numeric, and special characters.
    * You must choose at least one type of character.
4. Your generated password will then appear in the text box!

## Behind the Code

I created two object variables. One to store the dynamic data needed for password generation, and another one to store the static collections of special characters used to generate the password.

### Algorithm

#### Gathering User Input Data
* After the big red button is pushed, a prompt gathers the desired length of the password. 
* A series of confirm() calls toggle which special characters to use. 

#### Password Generation
* For as many characters as the user-entered password length, the code first chooses a random type of character from the user-selected types. 
* Based on which character type was randomly selected, that character set is grabbed and a random character from that set is selected.
* That chosen character is procedurally added to the password
* The loop continues until the password reaches the user-entered password length.
* The function then returns the generated password so that it can be displayed on the screen
