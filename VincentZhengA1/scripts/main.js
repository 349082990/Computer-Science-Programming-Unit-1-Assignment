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

// Store the user's information and store the original costs for upgrades
let count = 0;
let randomCrimeNumber;
let muscularFingerPrice = 100;
let muscularFingerCount = 0;
let assistantPrice = 400;
let assistantCount = 0;
let ambidextrousPrice = 1000;
let ambidextrous = false;
let franchiseCost = 5000;


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
choosingBackPart();
setInterval(choosingBackPart, 10000)

// This function is used for the count of money, depending one which upgrade is utilized
function clickingMoney() {
    if (ambidextrous == true) {
        // Doubles the original money count
        count += 2;
        // Doubles the money count in addition to the muscular fingers upgrade
        count += 10 * muscularFingerCount;
    } else {
        // Add one to the count of money, everytime it is clicked
        count += 1;
        // Money from each of the muscular fingers are added
        count += muscularFingerCount * 5;
    }
    // Whenever the user clicks while having over 5 muscular fingers, there will be a ten percent chance that they get
    // injured and lose $100
    if (muscularFingerCount > 5) {
        // Create a random number between 1 and 100
        let randomCrimeNumber = (Math.random() * 100) + 1;
        // 10% chance of the user getting injured and losing $100
        if (randomCrimeNumber >= 1 && randomCrimeNumber <= 10) {
            count -= 101 + muscularFingerCount * 5;
            document.getElementById('conditionText').innerText = 'OUCH! Your fingers are too muscular and you injured me! You lost $100!'; // text not working yet
        }
    }
}

// This function increases the count for the money when the user clicks on the lower back of the image. The text for money and 
// massage status will be updated at the top of the page
function lowerBack() {
    if (randomNumber == LOWER_BACK) {
        clickingMoney();
        document.getElementById('conditionText').innerText = "That feels much better, thanks";
    } else {
        document.getElementById('conditionText').innerText = "Did I tell you to massage that part of the back? You got the wrong place! I am calling the manager the next time that happens!";
    }
}

// This function increases the count for the money when the user clicks on the middle back of the image. The
// text for money and massage status will be updated on the top of the page.
function middleBack() {
    if (randomNumber == MIDDLE_BACK) {
        clickingMoney();
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
        clickingMoney();
        document.getElementById('conditionText').innerText = "Ahhhhhhh that feels so good. I almost want to injure myself again so I can come back to this place";
    } else {
        document.getElementById('conditionText').innerText = "Did I tell you to massage that part of the back? You got the wrong place! I am calling the manager the next time that happens!";
    }
}

// In this function, every 5 minutes, there is a 25% chance that the player will get robbed, in which they will lose half (50%) of their money.
function crime() {
    // create a random number between 1 and 100
    let randomCrimeNumber = (Math.random() * 100) + 1;
    // 25% chance of the user being robbed nad once the user is robbed, the condition text will display, notifying the user that they have been robbed
    if (1 <= randomCrimeNumber && randomCrimeNumber <= 25) {
        count /= 2;
        document.getElementById('conditionText').innerText = "Oh no! The GTA VI leaker has accessed the massage company's database and stole half of all your money!";
    }
}

// The function "crime" will be called every 5 minutes
setInterval(crime, 300000);

/* In this function, an extra muscular finger can be bought for $100. Each additional upgrade costs 10% the cost to the prior upgrade
* Each muscular finger upgrade gives an additional $5 per click.
* The user cannot get more than 10 upgrades
* and If the user has more than 5 Extra Muscular Finger upgrades, there is a 10% risk that the customer may be harmed with each click.
* This will result in a $100 loss on that click.
* Condition text will be updated to display status
* This code runs when the button for buying muscular fingers is clicked */
function extraMuscularFingers() {
    if (count >= muscularFingerPrice) {
        // Increase the number of muscular fingers by one
        muscularFingerCount += 1;
        // Subtract the price of the extra muscular finger upgrade from the money cunt
        count -= muscularFingerPrice;
        // Increase the price of the finger by 10% of the previous cost, everytime
        muscularFingerPrice *= 1.1;
        // Show the number of fingers purchased on the button 
        document.getElementById('muscularfinger').innerText = 'Buy an Extra Muscular Finger!: ' + muscularFingerCount;
    }
}

// This function will update the information for money and status
function syncInfo() {
    // Round the displayed amount of money to two decimal places
    document.getElementById('count').innerText = "Money: $" + count.toFixed(2);
    // The buttons are enabled if the money count is at or over the upgrade cost.
    // The buttons are disabled if the money count is under the upgrade cost.
    if (muscularFingerCount < 10 && count >= muscularFingerPrice) {
        document.getElementById('muscularfinger').disabled = false;
    } else {
        document.getElementById('muscularfinger').disabled = true;
    }
}

// The function syncInfo will be called and utilized every 15 milliseconds
setInterval(syncInfo, 15);

// muscularFingerCount < 10 && count >= muscularFingerPrice