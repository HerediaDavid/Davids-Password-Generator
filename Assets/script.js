function generatePassword () {
  let password = "";
  let specChar = ["!" , "@" , "#" , "$" , "%" , "^" , "&", "*" , "(" , ")" , "-" , "_" , "=" , "+" , "{" , "[" , "}" , "]" , ";" , ":" , "'" , "|" , "<" , ">" , "?"];
  let numChar = ["0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9"];
  let lowerChar = ["a" , "b" , "c" , "d" , "e" , "f" , "g", "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"];
  let upperChar = ["A" , "B" , "C" , "D" , "E" , "F" , "G", "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z"];
  const random = (length) => Math.floor(Math.random() * length);
  let passwordLength = prompt("How many characters would you like your password to be? Please type in a whole number no shorter than 8 and no longer than 128!");
  
  while (isNaN(passwordLength)) {
    passwordLength = prompt("The value given was not a number. Please type in a whole number no shorter than 8 and no longer than 128!")
    console.log(typeof (passwordLength));
  } while (passwordLength < 8 || passwordLength > 128) {
    if (passwordLength < 8) passwordLength = prompt("That number is too small. Please enter a value no shorter than 8 and no greater than 128.");
    if (passwordLength > 128) passwordLength = prompt("That number is too high. Please enter a value no greater than 128 and no shorter than 8.");
  }
  
  let uppercase = confirm("Would you like to include uppercase letters in your password? Please select 'OK' to include these letters in your password, and 'Cancel' to not include these letters in your password.");
  let lowercase = confirm("Would you like to include lowercase letters in your password? Please select 'OK' to include these letters in your password, and 'Cancel' to not include these letters in your password.");
  let special = confirm("Would you like to include special characters in your password? Please select 'OK' to include these characters in your password, and 'Cancel' to not include these characters in your password.");
  let numerical = confirm("Would you like to include numerical characters in your password? Please select 'OK' to include these characters in your password, and 'Cancel' to not include these characters in your password.");


  while(!lowercase && !uppercase) {
    prompt("Please include one of these two options for your password; Lowercase letters or Uppercase letters.");
    uppercase = confirm("Would you like to include uppercase letters in your password? Please select 'OK' to include these letters in your password, and 'Cancel' to not include these letters in your password.");
    lowercase = confirm("Would you like to include lowercase letters in your password? Please select 'OK' to include these letters in your password, and 'Cancel' to not include these letters in your password.");
  }
  
  console.log(uppercase);
  console.log(lowercase);
  console.log(special);
  console.log(numerical);
  console.log(password);

  while (password.length < passwordLength) {
    if (uppercase) {
      password += upperChar[random(upperChar.length)];
    } if (lowercase) {
      password += lowerChar[random(lowerChar.length)];
    } if (numerical) {
      password += numChar[random(numChar.length)]; 
    }if (special) {
      password += specChar[random(specChar.length)];
    }
  }
return password
  
}
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
