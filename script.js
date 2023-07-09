// Declare and store possible characters in a variable called chars
const chars = 
"0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";


// Initially set the password length to 8 
let pwLength = 8

//Grab a hold of the HTML div elements with class names password-el
let password1El = document.getElementById('password1-el')
let password2El = document.getElementById('password2-el')
let password3El = document.getElementById('password3-el')
let password4El = document.getElementById('password4-el')

//Grab a hold of the HTML slider element
let sliderEl = document.getElementById("slider")
//Grab a hold of the HTML slider label span element
let sliderNumberEl = document.getElementById("slider-number-el")


// Get the  slider input and change the HTML label span element value to slider input
slider.addEventListener("input", function() {
    sliderNumberEl.textContent = `${sliderEl.value}`
    pwLength = slider.value
})


//Creates a function to generate a random password with the selected password length
function generatePassword() {
randomPassword = ""
    for(let i=0; i<pwLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length)
        let randomChar = chars[randomNumber]
        randomPassword += randomChar
    }
    return randomPassword
}


// Creates a function to create an input element inside the div element and to display the generated password in each box
function getPassword() {
    password1El.innerHTML = `<input class="input-el" type="text" id="1" value="${generatePassword()}" onclick="copyToClipboard(1)" readonly>`
    password2El.innerHTML = `<input class="input-el" type="text" id="2" value="${generatePassword()}" onclick="copyToClipboard(2)" readonly>`
    password3El.innerHTML = `<input class="input-el" type="text" id="3" value="${generatePassword()}" onclick="copyToClipboard(3)" readonly>`
    password4El.innerHTML = `<input class="input-el" type="text" id="4" value="${generatePassword()}" onclick="copyToClipboard(4)" readonly>`
    
    // Calling the inputColorChange() function
    inputColorChange()
}

// Creates a function to change the color of all input text
function inputColorChange() {
    const inputEl = document.getElementsByClassName("input-el")
    for (let i=0; i<inputEl.length; i++) {
        inputEl[i].style.color = "var(--txt-green)"
    }
}

// Creates a function to copy the the generated password to the clipboard
function copyToClipboard(index) {
    let copyText = document.getElementById(index);
    navigator.clipboard.writeText(copyText.value).then( ()=> {
        // Alert the user that the action took place
        alert("Copied to clipboard")
    }) 
}


