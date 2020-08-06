document.getElementById("randomPassword").addEventListener("click", generate);
document.getElementById("password-error-message").style.display = "none";

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbols = "\"'(),-./:';<=>^[\\]^_`{|}~";
var commonSymbols = "!#$%&+?@";
var all = uppercase + lowercase + number + symbols + commonSymbols;
// var noUpper = all - uppercase;
// var noLower = all - lowercase;
// var noSymbols = all - symbols;
// var noCommon = all - commonSymbols;
// var noNumber = all - number;

function generate() {
  //variables
  var password = "";
  var passwordLength = document.getElementById("password-length").value;
  var numberCheckbox = document.getElementById("password-number").checked;
  var commonSpecialCheckbox = document.getElementById("password-commonspecial")
    .checked;
  var specialCharCheckbox = document.getElementById("password-specialchar")
    .checked;
  var uppercaseCheckbox = document.getElementById("password-uppercase").checked;
  var lowercaseCheckbox = document.getElementById("password-lowercase").checked;
  var words = document.getElementById("password-words").value;
  var specificChar = document.getElementById("password-char").value;
  var errorMessage = document.getElementById("password-error-message");
  // var lower = document.getElementById("password-lowercase").value;
  // var upper = document.getElementById("password-uppercase").value;
  // var commonSpec = document.getElementById("password-commonspecial").value;
  // var num = document.getElementById("password-number").value;

  //see which boxes are ticked, then add characters based on whether checkboxes are ticked
  var passwordCharacters = "";
  var passwordChecked = document.forms[0];
  var i;
  for (i = 0; i < passwordChecked.length; i++) {
    if (passwordChecked[i].checked) {
      passwordCharacters = passwordCharacters + passwordChecked[i].value;
    }
  }
  if (specificChar != "") {
    passwordCharacters = passwordCharacters + specificChar;
  }

  if (specialCharCheckbox == true) {
    passwordCharacters += symbols;
  }
  if (passwordLength <= 50 && passwordLength > 1) {
    for (var index = 0; index < passwordLength; index++) {
      var character = Math.floor(Math.random() * passwordCharacters.length);
      password += passwordCharacters.substring(character, character + 1);
    }
  }

  document.getElementById("passwordDisplay").value = password;

  //error message
  if (passwordCharacters == "" && words == "" && specificChar == "") {
    //console.log("hi");
    document.getElementById("password-error-message").style.display = "block";
    errorMessage.innerHTML =
      "Error: </br> No checkboxes ticked and no input in words/characters input";
    errorMessage.style.background = "#FF0000";
  } else if (passwordLength < 1 || passwordLength > 50) {
    document.getElementById("password-error-message").style.display = "block";
    errorMessage.innerHTML =
      "Invalid Password Length. Please choose a length between 1-50.";
    errorMessage.style.background = "#FF0000";
  } else {
    document.getElementById("password-error-message").style.display = "none";
  }

  //Debug Area
  //console.log(passwordCharacters);
  //console.log(errorMessage);
  // console.log(numberCheckbox);
  // console.log(commonSpecialCheckbox);
  // console.log(specificChar);
  // console.log(uppercaseCheckbox);
  // console.log(lowercaseCheckbox);
  // console.log(words);
  // console.log(specialCharCheckbox);
  // console.log(num);
  // console.log(commonSpec);
  // console.log(upper);
  // console.log(lower);
}

function randomNumber() {
  var randNum = "";
  var numLength = document.getElementById("number-length").value;
  for (var i = 0; i < numLength; i++) {
    var singleNumber = Math.floor(Math.random() * number.length);
    randNum += number.substring(singleNumber, singleNumber + 1);
  }
  document.getElementById("numDisplay").value = randNum;
}

/*
Old Code

 //no common symbol
  else if (
    numberCheckbox == true &&
    uppercaseCheckbox == true &&
    lowercaseCheckbox == true &&
    specialCharCheckbox == true &&
    commonSpecialCheckbox == false
  ) {
    var noCommon = uppercase + lowercase + number + symbols;
    for (var index = 0; index < passwordLength; index++) {
      var character = Math.floor(Math.random() * noCommon.length);
      password += noCommon.substring(character, character + 1);
    }
  }
  //no special
  else if (
    numberCheckbox == true &&
    uppercaseCheckbox == true &&
    lowercaseCheckbox == true &&
    specialCharCheckbox == false &&
    commonSpecialCheckbox == true
  ) {
    var noSpecial = uppercase + lowercase + number + commonSymbols;
    for (var index = 0; index < passwordLength; index++) {
      var character = Math.floor(Math.random() * noSpecial.length);
      password += noSpecial.substring(character, character + 1);
    }
  }
  //no lowercase
  else if (
    numberCheckbox == true &&
    uppercaseCheckbox == true &&
    lowercaseCheckbox == false &&
    specialCharCheckbox == true &&
    commonSpecialCheckbox == true
  ) {
    var noLower = symbols + uppercase + number + commonSymbols;
    for (var index = 0; index < passwordLength; index++) {
      var character = Math.floor(Math.random() * noLower.length);
      password += noLower.substring(character, character + 1);
    }
  }
  //no uppercase
  else if (
    numberCheckbox == true &&
    uppercaseCheckbox == false &&
    lowercaseCheckbox == true &&
    specialCharCheckbox == true &&
    commonSpecialCheckbox == true
  ) {
    var noSpecial = symbols + lowercase + number + commonSymbols;
    for (var index = 0; index < passwordLength; index++) {
      var character = Math.floor(Math.random() * noSpecial.length);
      password += noSpecial.substring(character, character + 1);
    }
  }
  //no number
  else if (
    numberCheckbox == true &&
    uppercaseCheckbox == true &&
    lowercaseCheckbox == true &&
    specialCharCheckbox == false &&
    commonSpecialCheckbox == true
  ) {
    var noSpecial = symbols + lowercase + number + commonSymbols;
    for (var index = 0; index < passwordLength; index++) {
      var character = Math.floor(Math.random() * noSpecial.length);
      password += noSpecial.substring(character, character + 1);
    }
  }
*/

/*
var specialSymbols = [
  "!",
  "@",
  "£",
  "$",
  "#",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "+",
  "=",
  "<",
  ">",
  "?",
  "/",
];

var alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var passwords = ["iumbeaft48", "thisP@ssword=safe123", "Ab@123*578*312Yz"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function newPinCodes4() {
  var pinCode1 = "";
  var randomNumber1 = new Array();

  for (var i = 0; i < 4; i++) {
    randomNumber1.push(Math.floor(Math.random() * numbers.length));
    pinCode1 += randomNumber1[i];
  }
  document.getElementById("pinDisplay").value = pinCode1;
}

function randomPassword() {
  var randomPassword1 = "";
  var length = 10;
  var randomLetters = new Array();
  for (var j = 0; j < length; j++) {
    randomNumber2 = Math.floor(Math.random() * alphabets.length);
    randomLetters[j] = alphabets[randomNumber2];
    randomPassword1 += randomLetters[j];
  }
  document.getElementById("passwordDisplay").value = randomPassword1;
}
*/
