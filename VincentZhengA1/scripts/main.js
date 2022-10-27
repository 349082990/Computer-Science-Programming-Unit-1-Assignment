// This function runs when the login button (on the login page) is pressed.
// The function checks the login values from the textboxes and see if it matches the correct
// credentials.
function loginSecurity() {
    // Obtain the username and password values from the textboxes
    let username = document.getElementById('usernameTextbox').value;
    let password = document.getElementById('passwordTextbox').value;

    // Check for correct credentials (username and password)
    if (username == "vi" && password == "zh") {
        // If login credentials are correct, the link to Massage Mayhem is shown and is set to index.html
        document.getElementById("massageLink").hidden = false;
        document.getElementById("massageLink").href = "index.html";
    } else {
        // Alert the user of their wrong credentials
        alert("Wrong username or password");
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
        document.getElementById('conditionText').innerText = "Just finished a 2-hour deadlifting session. My lower back is dying!";
    }
    else if (randomNumber == MIDDLE_BACK) {
        document.getElementById('conditionText').innerText = "I was choking on my food and my friend decided to slap my middle back, instead of performing abdominal thrusts. Can you do my middle back please?";
    } else {
        document.getElementById('conditionText').innerText = "Those lat pull-downs were really killing my back. Can you help to ease the pain on my upper back please?";
    }
}

// A new part of the back will be chosen for massaging every 10 seconds.
setInterval(choosingBackPart, 10000)

// This function increases the count for the money when the user clicks on the lower back of the image. The text for money and 
// massage status will be updated at the top of the page
function lowerBack() {
    if (randomNumber == LOWER_BACK) {
        // Increases the number representing the amount of money, by 1.
        count += 1
        document.getElementById('conditionText').innerText = "That feels much better, thanks";
    } else {
        document.getElementById('conditionText').innerText = "Did I tell you to massage that part of the back? You got the wrong place! I am calling the manager the next time that happens!";
    }
}

// This function increases the count for the money when the user clicks on the middle back of the image. The
// text for money and massage status will be updated on the top of the page.
function middleBack() {
    if (randomNumber == MIDDLE_BACK) {
        // Increases the number representing the amount of money, by 1
        count += 1
        document.getElementById('conditionText').innerText = "That feels much better. I can feel the pain easing. Keep it up!";
    } else {
        ;
        document.getElementById('conditionText').innerText = "Did I tell you to massage that part of the back? You got the wrong place! I am calling the manager the next time that happens!";
    }
}

// This function increases the count for the money when the user clicks on the upper back of the image. The
// text for money and massage status will be updated on the top of the page.
function upperBack() {
    if (randomNumber == UPPER_BACK) {
        // Increases the number representing the amount of money, by 1
        count += 1
        document.getElementById('conditionText').innerText = "Ahhhhhhh that feels so good. I almost want to purposely injure myself to have a reason to come back to this place";
    } else {
        document.getElementById('conditionText').innerText = "Did I tell you to massage that part of the back? You got the wrong place! I am calling the manager the next time that happens!";
    }
}

// This function will update the information for money and status
function syncInfo() {
    document.getElementById('count').innerText = "Money: " + count;
}

// The function syncInfo will be called and utilized every 15 milliseconds
setInterval(syncInfo, 15);

// In this function, every 5 minutes, there is a 25% chance that the player will get robbed, in which they will lose half (50%) of their money.
function crime() {
    // create a random number between 1 and 100
    let randomCrimeNumber = (Math.random() * 100) + 1;
    // 25% chance of the user being robbed nad once the user is robbed, the condition text will display, notifying the user that they have been robbed
    if (1 <= randomCrimeNumber && randomCrimeNumber <= 25) {
        count /= 2
        document.getElementById('conditionText').innerText = "Oh no! The GTA VI leaker has accessed the massage company's database and stole half of all your money!";
    }
}

// The function "crime" will be called every 5 minutes
setInterval(crime, 300000)