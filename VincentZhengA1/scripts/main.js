// Made by: Vincent Zheng
// G11 Computer Science, P4 programming unit 1 assignment
// 2022-11-04
// This program is the javascript for the massage mayhem game. The upgrades and function calls on the website all lead to this program.

// This function runs when the login button (on the login page) is pressed.
// The function checks the login values from the textboxes and sees if it matches the correct
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
// Define global variables, which will be used to keep track of the count for money and the various
// Upgrades that are offered
let count = 0;
let muscularFingerPrice = 100;
let muscularFingerNum = 0;
let attractiveAssistantPrice = 400;
let attractiveAssistantNum = 0;
let ambidextrousPrice = 500;       
let ambidextrousNum = 0;           
let franchisePrice = 5000;
let franchiseNum = 0; 
let franchiseTenPercentDecrease = 0;
let crimeNumber = 25;
let moneyLost = 0.5; 
let relocationPrice = 10000;
let relocationNum = 0;
let securityPrice = 5;
let securityNum = 0;
let publicOffering = false;
// This function will have the program randomly choose parts of the back, and display the prompts
// or problems with each part. The function runs every 10 seconds.
function choosingBackPart() {
    // Makes up random numbers between 0 and 2, which represents the parts of the back (constants).
    randomNumber = Math.floor(Math.random() * 3);
    // Shows the prompts (in text) for each portion of the back when called.
    if (randomNumber == LOWER_BACK) {
        document.getElementById('tasktext').innerText = "Request: Just finished a 2-hour deadlifting session. My lower back is dying!";
    } else if (randomNumber == MIDDLE_BACK) {
        document.getElementById('tasktext').innerText = "Request: I was choking on my food and my friend decided to slap my middle back, instead of performing abdominal thrusts. Can you do my middle back please?";
    } else {
        document.getElementById('tasktext').innerText = "Request: Those lat pull-downs were really killing my back. Can you help to ease the pain on my upper back please?";
    }
}
// A new part of the back will be chosen for massaging every 10 seconds.
choosingBackPart();
setInterval(choosingBackPart, 10000);
// This function increases the count for the money when the user clicks on the correct back image. The text for money and
// massage status will be updated at the top of the page. The function runs each time the user clicks on any part of the back.
function massagingBack(backLocation) {
    // When correct part is massaged, add money and display a message saying that the user hit the right spot.
    if (randomNumber == backLocation) {
        clickingMoney();
        document.getElementById('conditionText').innerText = "That feels much better, thanks";
    // Notify the user that they massaged the wrong spot.
    } else {
        document.getElementById('conditionText').innerText = "Did I tell you to massage that part of the back? You got the wrong place! I am calling the manager the next time that happens!";
    }
}
// This function is used for the count of money, depending one which upgrade is utilized. 
// The function is callede each time the user clicks on any part of the back (In the massagingBack() function)
function clickingMoney() {
    // Create a random number between 0 and 9
    var randomNumber = Math.floor(Math.random() * 10);
    // Whenever the user clicks while having over 5 muscular fingers, there will be a ten percent chance that they get
    // injured and lose $100
    if (muscularFingerNum > 5 && randomNumber == 0) { 
        // Subtract 100 and alert user that they lost $100
        count -= 100;
        alert("OUCH! Your fingers are too muscular and you injured me! You lost $100!");
    // Add the amount of money made including the upgrades to the count
    } else {
        count += (1 + 5 * muscularFingerNum) * Math.pow(2, ambidextrousNum); 
    }
}
// In this function, every 5 minutes, there is a 25% chance that the player will get robbed, in which they will lose half (50%) of their money.
// The function is called every 5 minutes
function crime() {
    // Create a random number between 1 and 100.
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    // 25% chance of the user being robbed. Once the user is robbed, an alert will display, notifying the user that they have been robbed.
    if (randomNumber <= crimeNumber) {
        // Only allow the user to be robbed if they have a positive amount of money.
        if (count.toFixed(2) > 0) {
            // Half the count of the money, by multiplying it by 0.5 (moneyLost variable)
            count *= moneyLost;
            // Display an alert, telling the user that they have been robbed. The amount of money robbed is also shown
            alert("Oh no! The GTA VI leaker has accessed the massage company's database and stole half of all your money!");
        }
    }
}
// The function "crime" will be called every 5 minutes
setInterval(crime, 300000);
// This function will run when the relocation button is enabled and pressed
function relocation() {
    // Check that the user has enough money to buy the upgrade
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
// This function is called when the extra muscular fingers button is enabled and pressed on the webpage.
function extraMuscularFingers() {
    // Check that the user has enough money to buy the upgrade
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
// This code runs when an attractive assistant is bought (When the user presses the buy assistant button).
function buyAttractiveAssistant() {
    // Check that the user has enough money to buy the upgrade
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
    // Check that the user has enough money to buy the upgrade
    if (count >= ambidextrousPrice) {
        // Increase the number of ambidextrous upgrades purchased (this variable will be used in the clickingMoney() function)
        ambidextrousNum += 1;
        // Subtract the price of the ambidextrous upgrade from the money count
        count -= ambidextrousPrice;
        // Display that the ambidextrous upgrade is purchased
        document.getElementById('ambidextrous').innerText = 'Ambidextrous Upgrade: PURCHASED';
    }
}
// This function runs when a franchise is purchased (button is clicked)
function buyFranchise() {
    // Check that the user has enough money to buy the upgrade
    if (count >= franchisePrice) {
        // Increase the number of franchise upgrades purchased by 1, each time the function is called
        franchiseNum += 1;
        // Subtract the price of the upgrade from the money count
        count -= franchisePrice;
        // Increase the price of the franchise by 10% of the previous franchise upgrade cost
        franchisePrice *= 1.1;
        // Show the number of franchise buttons purchased on the button
        document.getElementById('franchise').innerText = 'Buy Franchises: ' + franchiseNum;
        // If user clicks on the buy franchise button and the user has 9 franchises, then this statement runs.
        if (franchiseNum == 9) {
            // Runs the function franchiseeRevolt() every 5 minutes
            setInterval(franchiseeRevolt, 300000);
        }
    }
}
// This function will run every 5 minutes, after the user gains 8 franchises
function franchiseeRevolt() {
    // Check that the user has over 8 franchises
    if (franchiseNum > 8) {
        // Creates random numbers from 1 and 100.
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        // 15% chance of occuring
        if (randomNumber <= 15) { 
            // Ask user which choice they would like to make, in regards to their franchises
            let text = "The people have revolted against your franchises!\nPress 'Ok' to reduce franchise royalties by 10%\nPress 'Cancel' to lose half of your franchises.";
            // Reduce royalties by 10* if user presses 'Ok'
            if (confirm(text) == true) {
                // Increase the franchsiee ten percent decrease count by 1.
                franchiseTenPercentDecrease += 1;
            // Half the user's owned franchises (moneyLost = 0.5) and display it in the button.
            }else{
                let halfFranchiseCount = franchiseNum *= moneyLost;
                document.getElementById('franchise').innerText = 'Buy Franchises: ' + halfFranchiseCount;
            }
        }
    }
}
 // This is the initial public offering function. After a set amount of time, $50,000 will be added
 // to the count for money.
function initialPublicOffering() {
    // $50,000 is added to the money count and the user gets an alert showing them that they have received this money.
    alert("You've been massaging for a while! Congratulations! You have earned $50,000 from your massage company's intial public offering?");
    count += 50000;
    // Call the corporatePowerStruggle() function, 30 seconds after the initialPublicOffering() function is called
    setTimeout(corporatePowerStruggle);
}
// Call the intialPublicOffering function after 10 minutes
setTimeout(initialPublicOffering, 600000);
// This function is called immediately after the initalPublicOffering() function is called
function corporatePowerStruggle() {
    // Set the timeout for logout to 30 seconds (30000 ms)
    var time = setTimeout(logout, 30000);
    // DOM event for mouse click
    // If user clicks, then the timer is resetted
    window.onclick = resetTimer;
    // If user does not click within 30 seconds, then they get pwned and redirected to Elon Musk' dungeon
    function logout() {
        let pwn = alert("You have been logged out.");
        setTimeout(pwn);
        location.href = 'elonmusk.html';
    }
    // Clear timer
    function resetTimer() {
        clearTimeout(time);
    }
}
// This function will run, once the 'Hire Security!' button is pressed
function hireSecurity() {
    // Check that the user has enough money to buy the upgrade
    if (count >= securityPrice) {
        // Increase the number of security upgrades purchased by 1, each time the function is called
        securityNum += 1;
        // Decrease the amount of money that would be robbed by half (50%)
        moneyLost *= 0.5;
        // Show the number of security upgrades that are purchased. (Shown on button)
        document.getElementById('security').innerText = 'Buy security: ' + securityNum;
    }
}
// This function will update the information for money and status of upgrades
function update() {
    // Round the displayed amount of money to two decimal places
    document.getElementById('count').innerText = "Money: $" + count.toFixed(2);
    // General: The buttons are enabled if the money count is at or over the upgrade cost.
    // General: The buttons are disabled if the money count is under the upgrade cost.
    // Disable the muscular fingers button if the user does not have enough money to buy the upgrade.
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
// The function update will be called and utilized every 10 milliseconds
setInterval(update, 10);
// This function adds the number of upgrades to the count for the upgrades and also adds the money for those upgrades to the count for money as well. Also checks for upgrade status.
function updatingUpgrades() {
    // Add the number of assistants to the money count (1 assistant = $1)
    count += attractiveAssistantNum;
    // Find the sum of all the money the franchises output and add them to the count.
    // The geometric series equation is utilized here
    ///// Math.pow can be also be used instead of "**"
    if (franchiseNum > 0) {
        count += (200 * (1 - 0.95 ** franchiseNum)) / (1 - 0.95) * (0.9**franchiseTenPercentDecrease);
    }
    // Remove the amount of money in the count that is given to security
    if (securityNum > 0) {
        count -= securityNum * securityPrice;
    }
}
// The updatingUpgrades function is called every second.
setInterval(updatingUpgrades, 1000);