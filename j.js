
var passwordInput = document.getElementById("password"); 

var passwordMessageItems = document.getElementsByClassName("password-message-item"); 

var passwordMessage = document.getElementById("password-message"); 

  

  

passwordInput.onfocus = function () { 

    passwordMessage.style.display = "block"; 
} 

  
// After clicking outside of password input hide the message 

passwordInput.onblur = function () { 

    passwordMessage.style.display = "none"; 
} 

  

passwordInput.onkeyup = function () { 

    // checking uppercase letters 

    let uppercaseRegex = /[A-Z]/g; 

    if (passwordInput.value.match(uppercaseRegex)) { 

        passwordMessageItems[1].classList.remove("invalid"); 

        passwordMessageItems[1].classList.add("valid"); 

    } else { 

        passwordMessageItems[1].classList.remove("valid"); 

        passwordMessageItems[1].classList.add("invalid"); 

    } 

  

    // checking lowercase letters 

    let lowercaseRegex = /[a-z]/g; 

    if (passwordInput.value.match(lowercaseRegex)) { 

        passwordMessageItems[0].classList.remove("invalid"); 

        passwordMessageItems[0].classList.add("valid"); 

    } else { 

        passwordMessageItems[0].classList.remove("valid"); 

        passwordMessageItems[0].classList.add("invalid"); 

    } 

  

    // checking the number 

    let numbersRegex = /[0-9]/g; 

    if (passwordInput.value.match(numbersRegex)) { 

        passwordMessageItems[2].classList.remove("invalid"); 

        passwordMessageItems[2].classList.add("valid"); 

    } else { 

        passwordMessageItems[2].classList.remove("valid"); 

        passwordMessageItems[2].classList.add("invalid"); 

    } 
    
         let symbolRange = /[!@#$%^&*(),.?":{}|<>]/; 
         if (passwordInput.value.match(symbolRange)){
        passwordMessageItems[].classList.remove("invalid"); 

        passwordMessageItems[3].classList.add("valid"); 

    } else { 

        passwordMessageItems[3].classList.remove("valid"); 

        passwordMessageItems[3].classList.add("invalid"); 

    } 
}
document.getElementById("cancel-button").addEventListener("click", function() {
    if (confirm("Are you sure you want to cancel?")) {
        // If user confirms, you can either clear the form or navigate away
        document.getElementById("registration-form").reset();
    }
});
    