function palindrome(myString){
    var checkPalindrome = myString.split('').reverse().join('');
    
    if(checkPalindrome === checkPalindrome){
      
      document.write("<div>"+ myString + " es un palindromo <div>");
    }else{
      
      document.write("<div>" + myString + " no es un palindromo </div>");
    }
    }
    palindrome('reconocer')