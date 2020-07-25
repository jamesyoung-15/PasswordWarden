document.getElementById("newPassword").addEventListener("click", newPassword);
    function newPassword(){
       console.log('asd');
   }

   document.getElementById("newPinCodes4").addEventListener("click", newPinCodes4);
   function newPinCodes4(){
      console.log('asd');
  }

  document.getElementById("randomPassword").addEventListener("click", randomPassword);
  function randomPassword(){
     console.log('asd');
 }





var passwords = [
    'iumbeaft48',
    'thisP@ssword=safe123',
    'Ab@123*578*312Yz',
]

var alphabets = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
]

var numbers = [
    '0','1','2','3','4','5','6','7','8','9'
]

var specialSymbols = 
[
    '!', '@', '£', '$', '#', '^', '&', '*', '(', ')', '-', '+', '=','<', '>', '?', '/'
]

function newPassword(){
    var randomNumber = Math.floor(Math.random() * (passwords.length));
    document.getElementById('display').value = passwords[randomNumber];
}

function newPinCodes4(){
    var pinCode1 = "";
    var randomNumber1 = new Array();
    
    for (var i = 0; i<4; i++){
        randomNumber1.push(Math.floor(Math.random() * (numbers.length)));
        pinCode1 += randomNumber1[i];
    } 
    document.getElementById('pinDisplay').value = pinCode1;
}

function randomPassword(){
    var randomPassword1 = "";
    var length = 10;
    var randomLetters = new Array();
    for (var j = 0; j<length; j++)
    {
        randomNumber2 = Math.floor(Math.random() * (alphabets.length));
        randomLetters[j] = alphabets[randomNumber2];
        randomPassword1 += randomLetters[j];
    }
    document.getElementById('passwordDisplay').value = randomPassword1;
}