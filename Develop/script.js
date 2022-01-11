// Assignment Code

// defining characters for the generated passwords later on
var generateBtn = document.querySelector("#generate");
var uppercaseLetter = "QWERTYUIOPASDFGHJKLZXCVBNM"
var lowercaseLetter = "qwertyuiopasdfghjklzxcvbnm"
var specialCharacter = "!@#$%^&*()_+=-;'.,/?><~`"
var numberCharacter = "1234567890"

// defining variables for later functions in prompt selection 

var passwordLength; 
var numberChecker;
var uppercaseChecker; 
var specialCharChecker; 
// "WHEN prompted for the length of the password " Here I am creating a prompt to determine the length of the password

function findingLength(){
  passwordLength = prompt("Pick the amount of characters you want between 8-128: ");
  if (passwordLength<8){
    alert("password length must be between 8-128");
    findingLength(); 
  }else if (passwordLength>128){
    alert ("password length must be between 8-128")
  }else{
    alert("select the options in the next few screens to determine the type of password that best suits you"); 
    return passwordLength; 
  }

}
// this well help us determine whether user wants uppercase or lowercase. 
function findingUppercase(){
  uppercaseChecker = prompt("do you want uppercase letters? Respond to the prompt with a yes or a no "); 
  if (uppercaseChecker === null || uppercaseChecker === ""){
    alert("Please answer Yes or No");
    findingUppercase();

  }else if (uppercaseChecker === "yes" || uppercaseChecker ==="y"){
    uppercaseChecker = true;
    return uppercaseChecker;

  }else if (uppercaseChecker === "no" || uppercaseChecker ==="n"){
    uppercaseChecker = false;
    return uppercaseChecker;
  
  }else {
    alert("Please answer Yes or No");
    findingUppercase();
  }
  return uppercaseChecker;
  //this logic well give us if the user wants an uppercase. 
}

//this logic helps us with finding if the user wants a special character 
function findingSpecial(){
  specialCharChecker = prompt("Do you want to include special characters in your password? Answer with a yes or a no");
  specialCharChecker = specialCharChecker.toLowerCase();

    if (specialCharChecker === null || specialCharChecker === ""){
      alert("Please answer Yes or No");
      findingSpecial();

    }else if (specialCharChecker === "yes" || specialCharChecker==="y"){
      specialCharChecker = true;
      return specialCharChecker
    }else if (specialCharChecker === "no" || specialCharChecker ==="n"){
      specialCharChecker = false;
      return specialCharChecker;
    
    }else {
      alert("Please answer Yes or No");
      findingSpecial();
    }
    return specialCharChecker;
}
//this logic helps us determine if the user wants numbers in his characters. 
function findingNumbers(){
  numberChecker = prompt("Do you want to include numbers in your password? Answer with a yes or a no");
    numberChecker = numberChecker.toLowerCase();

    if (numberChecker === null || numberChecker === ""){
      alert("Please answer Yes or No");
      findingNumbers();

    }else if (numberChecker === "yes" || numberChecker ==="y"){
      numberChecker = true;
      return numberChecker;

    }else if (numberChecker === "no" || numberChecker ==="n"){
      numberChecker = false;
      return numberChecker;
    
    }else {
      alert("Please answer Yes or No");
      findingNumbers();
    }
    return numberChecker;
}
//combining all the functions to work with the password generator
 function generatePassword(){
  findingLength();
  console.log(passwordLength);
  findingUppercase();
  console.log(uppercaseChecker);
  findingNumbers();
  console.log(numberChecker);
  findingSpecial();
  console.log(specialCharChecker);

var characters = lowercaseLetter;
var password = "";
if (uppercaseChecker && numberChecker && specialCharChecker){
  characters += uppercaseLetter + numberCharacter + specialCharacter;

}else if (uppercaseChecker && numberChecker){
  characters += uppercaseLetter + numberCharacter;

}else if (numberChecker && specialCharChecker){
  characters += numberCharacter + specialCharacter;

}else if (uppercaseChecker && specialCharChecker){
  characters += uppercaseLetter + specialCharacter;

}else if (uppercaseChecker){
  characters += uppercaseLetter;

}else if(numberChecker){
  characters += numberCharacter;

}else if (specialCharChecker){
  characters += specialCharacter;

}else{
  characters === lowercaseLetter;
}

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  var password1 = "";
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
