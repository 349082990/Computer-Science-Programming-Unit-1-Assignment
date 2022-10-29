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
let muscularFingerPrice = 100;
let muscularFingerNum = 0;
let attractiveAssistantPrice = 400;
let attractiveAssistantNum = 0;
let ambidextrousPrice = 500;
let ambidextrousNum = 0;
let franchisePrice = 1;     //// Should be 5000
let franchiseNum = 0;
let crimeNumber = 25;
let moneyLost = 0.5;
let relocationPrice = 10000;
let relocationNum = 0;
let securityPrice = 5;
let securityNum = 0;
let franchiseMoney = franchiseGeometricSeries();

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
    if (ambidextrousNum == 1) {
        // Doubles the original money count
        count += 2;
        // Doubles the money count in addition to the muscular fingers upgrade
        count += 10 * muscularFingerNum;
    } else {
        // Add one to the count of money, everytime it is clicked
        count += 1;
        // Money from each of the muscular fingers are added
        count += muscularFingerNum * 5;
    }
    // Whenever the user clicks while having over 5 muscular fingers, there will be a ten percent chance that they get
    // injured and lose $100
    if (muscularFingerNum > 5) {
        // Create a random number between 0 and 9
        let randomNumber = Math.floor(Math.random() * 10);
        // 10% chance of the user getting injured and losing $100 if random number is 0
        if (randomNumber == 0) {
            // Subtract 100 in the presence of the ambidextrous upgrade
            if (ambidextrousNum == 1) {
                count -= 102 + muscularFingerNum * 10;
                alert("OUCH! Your fingers are too muscular and you injured me! You lost $100!");
                // Subtract 100 in all other conditions 
            } else {
                count -= 101 + muscularFingerNum * 5;
                alert("OUCH! Your fingers are too muscular and you injured me! You lost $100!");
            }
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
    // create a random number between 0 and 3 (4 numbers)
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    // 25% chance of the user being robbed. Once the user is robbed, an alert will display, notifying the user that they have been robbed
    if (randomNumber <= crimeNumber) {
        if (count.toFixed(2) > 0) {
            // Half the count of the money, by multiplying it by 0.5 (moneyLost variable)
            count *= moneyLost;
            // Display an alert, telling the user that they have been robbed. The amount of money robbed is also shown
            alert("Oh no! The GTA VI leaker has accessed the massage company's database and stole half of all your money! They stole $" + moneyLost.toFixed(2));
        }
    }
}
// The function "crime" will be called every 5 minutes
setInterval(crime, 300000);

// This function will run when the relocation button is pressed
function relocation() {
    if (count >= relocationPrice) {
        // Increase the number of relocations by 1
        relocationNum += 1;
        // Subtract the price or cost of the relocation upgrade from the money count
        count -= relocationPrice;
        // Decrease the chances of getting robbed by 20% each time the function is called
        crimeNumber *= 0.8;
        // Show the number of relocatons purchased on the button
        document.getElementById('relocate').innerText = 'Relocations: ' + relocationNum;
    }
}
// This function is called when the extra muscular fingers button is pressed on the webpage
function extraMuscularFingers() {
    if (count >= muscularFingerPrice) {
        // Increase the number of muscular fingers by one
        muscularFingerNum += 1;
        // Subtract the price of the extra muscular finger upgrade from the money count
        count -= muscularFingerPrice;
        // Increase the price of the finger by 10% of the previous cost, everytime
        muscularFingerPrice *= 1.1;
        // Show the number of fingers purchased on the button 
        document.getElementById('muscularfinger').innerText = 'Buy an Extra Muscular Finger!: ' + muscularFingerNum;
    }
}

// This code runs when an attractive assistant is bought.
function buyAttractiveAssistant() {
    if (count >= attractiveAssistantPrice) {
        // Increase the number of attractive assistants by oen
        attractiveAssistantNum += 1;
        // Subtract the price of the attractive assistant upgrade from the money count
        count -= attractiveAssistantPrice;
        // Increase the price of the attractive assistant by 15% of the previous cost, everytime
        attractiveAssistantPrice *= 1.15;
        // Show the number of attractive assistants purchased on the button
        document.getElementById('assistant').innerText = 'Buy an Incredibly Attractive Assistant!: ' + attractiveAssistantNum;
    }
}

// This code runs when the user presses the Buy ambidextrous button.
function ambidextrousUpgrade() {
    if (count >= ambidextrousPrice) {
        // Increase the number of ambidextrous upgrades purchased (this variable will be used in the clickingMoney() function)
        ambidextrousNum += 1;
        // Subtract the price of the ambidextrous upgrade from the money count
        count -= ambidextrousPrice;
        // Display that the ambidextrous upgrade is purchased
        document.getElementById('ambidextrous').innerText = 'Ambidextrous Upgrade: PURCHASED'
    }
}

// This code runs when a franchise is purchased (button is clicked)
function buyFranchise() {
    if (count >= franchisePrice) {
        // Increase the number of franchise upgrades purchased by 1, each time the function is called
        franchiseNum += 1;
        // Subtract the price of the upgrade from the money count
        count -= franchisePrice;
        // Increase the price of the franchise by 10% of the previous franchise upgrade cost
        franchisePrice *= 1.1;
        // Show the number of franchise buttons purchased on the button
        document.getElementById('franchise').innerText = 'Buy franchises: ' + franchiseNum;
    }
}

// This function will run when the amount of franchises is over 0
// Use a nested function, to calculate the amount of money outputted from the sum of the franchises (geometric series)
function franchiseGeometricSeries(firstTerm, commonRatio, termNum) {
    // Set local variables only used in the function
    var firstTerm = 200;
    var commonRatio = 0.95;
    var termNum = franchiseNum;
    var result = 0;
    for (let i = 0; i < termNum; i++) {
        // The result is equal to result + the first term
        result += firstTerm;
        // The first term is 200 * the common ratio, 0.95
        firstTerm *= commonRatio;
    }
    // Return the result
    return result;
}

//// Try and change the result in franchisegeomtric series to * 0.9 if franchisee revolt is p
//// This function will run every 5 minutes, after the user gains 8 franchises
function franchiseeRevolt() {
    // Return a true value when the function is called
    return true;
    // When the user has over 8 franchises
    if (franchiseNum > 8) {
        // Creates random numbers from 1-10
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        // 15% chance of occuring
        if (randomNumber <= 100) {
            // Ask user which choice they would like to make, in regards to their franchises
            let text = "The people have revolted against your franchises!\nPress 'Ok' to reduce franchise royalties by 10%\nPress 'Cancel' to lose half of your franchises.";
            // Reduce royalties by 10* if user presses 'Ok'
            if (confirm(text) == true) {
                franchiseGeometricSeries(result) *= 0.9;
                // Half the user's owned franchises (moneyLost = 0.5)
            } else {
                let halfFranchiseCount = franchiseNum *= moneyLost;
                document.getElementById('franchise').innerText = 'Buy franchises: ' + halfFranchiseCount;
            }
        }
    }
}
// Runs when number of franchises is more than 8. Franchisee revolt function will be called every 5 minutes
// When the user has over 8 franchises
setInterval(franchiseeRevolt, 10000); //// Should be 5 minutes

// This is the initial public offering function. After a set amount of time, $50,000 will be added
// to the count for money.
function initialPublicOffering() {
    alert("You've been massaging for a while! You've earned $50,000 from your massage company's intial public offering!");
    count += 50000;
}
// Call the intialPublicOffering function after 10 minutes
setTimeout(initialPublicOffering, 600000)

// This function will run, once the 'Hire Security!' button is pressed
function hireSecurity() {
    if (count >= securityPrice) {
        // Increase the number of security upgrades purchased by 1, each time the function is called
        securityNum += 1;
        // Decrease the amount of money that would be robbed by half (50%)
        moneyLost *= 0.5;
        // Show the number of security upgrades that are purchased. (Shown on button)
        document.getElementById('security').innerText = 'Buy security: ' + securityNum;
    }
}

// This function will update the information for money and status
function syncInfo() {
    // Round the displayed amount of money to two decimal places
    document.getElementById('count').innerText = "Money: $" + count.toFixed(2);
    // The buttons are enabled if the money count is at or over the upgrade cost.
    // The buttons are disabled if the money count is under the upgrade cost.
    if (muscularFingerNum < 10) {
        document.getElementById('muscularfinger').disabled = (count < muscularFingerPrice);
    } else {
        document.getElementById('muscularfinger').disabled = true;
    }
    // Disable the assistant button if the money count is less than its price
    document.getElementById('assistant').disabled = (count < attractiveAssistantPrice);
    if (ambidextrousNum < 1) {
        if (count >= ambidextrousPrice) {
            document.getElementById('ambidextrous').disabled = (count < ambidextrousPrice);
        }
    } else {
        document.getElementById('ambidextrous').disabled = true;
    }
    // Disable the buttons for franchise, relocations, and security, if the count for money is below its prices
    document.getElementById('franchise').disabled = (count < franchisePrice);
    document.getElementById('relocate').disabled = (count < relocationPrice);
    document.getElementById('security').disabled = (count < securityPrice);
}

// The function syncInfo will be called and utilized every 15 milliseconds
setInterval(syncInfo, 50);

// This function adds the number of upgrades to the count for the upgrades and also adds the money as well
function updatingUpgrades() {
    // Add the number of assistants to the money count (1 assistant = $1)
    count += attractiveAssistantNum;
    // Find the sum of all the money the franchises output and add them to the count
    if (franchiseNum > 0) {
        count += franchiseGeometricSeries();
    }
    // Remove the amount of money in the count that is given to security
    if (securityNum > 0) {
        count -= securityNum * securityPrice;
    }
}
// The updatingUpgrades function is called every second, so upgrade can be added onto the count for money.
setInterval(updatingUpgrades, 1000);