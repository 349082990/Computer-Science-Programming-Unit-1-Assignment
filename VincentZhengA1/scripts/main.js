// This function runs when the login button (on the login page) is pressed.
// The function checks the login values from the textboxes and see if it matches the correct
// credentials.
function checkLogin() {
    // Obtain the username and password values from the textboxes
    let username = document.getElementById('usernameTextbox').value;
    let password = document.getElementById('passwordTextbox').value;

    // Check for correct credentials (username and password)
    if (username == "vi" && password == "zh") {
        // If login credentials are correct, the link to Massage Mayhem is shown and is set to index.html
        document.getElementById("massageLink").hidden = false;
        document.getElementById("massageLink").href = "index.html"
    } else {
        // Alert the user of their wrong credentials
        alert("Wrong username or password")
    }
}

// Set the sections of the back as constants
const LOWER_BACK = 0;
const MIDDLE_BACK = 1;
const UPPER_BACK = 2;

// Setting randomNumber as a global variable
let randomNumber;

// Store the user's information
let count = 0;

// This function will have the program randomly choose parts of the back, and display the prompts
// or problems with each part
function choosingBackPart() {
    // Makes up random numbers between 0 and 2, which represents the parts of the back (constants).
    randomNumber = Math.floor(Math.random() * 3);
    // Shows the prompts (in text) for each portion of the back
    if (randomNumber == LOWER_BACK) {
        document.getElementById('conditionText').innerText = "Just finished a 2-hour deadlifting session. My lower back is dying!"
    }
    else if (randomNumber == MIDDLE_BACK) {
        document.getElementById('conditionText').innerText = "I was choking on my food and my friend decided to slap my middle back, instead of performing abdominal thrusts. Can you do my middle back please?"
    } else {
        document.getElementById('conditionText').innerText = "Those lat pull-downs were really killing my back. Can you help to ease the pain please?"
    }
}