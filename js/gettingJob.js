//Create the map
var map = [];

map[0] = "The local career training center.";
map[1] = "Home, sweet home.";
map[2] = "The park where you have always played with your best friend Mike.";
map[3] = "The library.";
map[4] = "The clothing store.";
map[5] = "Mike's house.";
map[6] = "The volunteer center to help the local middle and high school students with their class work.";
map[7] = "Your mentor's house.";
map[8] = "The local job fair, make sure not to make a fool of yourself by showing up unprepared.";

//Set the player's start location
var mapLocation = 1;

//Set the images
var images = [];

images[0] = "";
images[1] = "";
images[2] = "";
images[3] = "";
images[4] = "";
images[5] = "";
images[6] = "";
images[7] = "";
images[8] = "";

//Set the blocked path messages
var blockedPathMessages = [];

blockedPathMessages[0] = "You can't move into the real world without a job.";
blockedPathMessages[1] = "You can't move into the real world without a job.";
blockedPathMessages[2] = "You can't move into the real world without a job.";
blockedPathMessages[3] = "You can't move into the real world without a job.";
blockedPathMessages[4] = "";
blockedPathMessages[5] = "You can't move into the real world without a job.";
blockedPathMessages[6] = "You can't move into the real world without a job.";
blockedPathMessages[7] = "You can't move into the real world without a job.";
blockedPathMessages[8] = "You can't move into the real world without a job.";

//Set the blocked path messages
var helpMessages = [];

helpMessages[0] = "Good things come to those that learn.";
helpMessages[1] = "I wonder if your parent's can help you out?";
helpMessages[2] = "";
helpMessages[3] = "I wonder if the local librarian can help you with a resume..";
helpMessages[4] = "Best place in town for business clothes.";
helpMessages[5] = "Try visiting with Mike about your future.";
helpMessages[6] = "I bet if you volunteer you will learn as much as you teach.";
helpMessages[7] = "Your mentor is always there to lend an ear and offer advice.";
helpMessages[8] = "I would not take part in the job fair until you feel you are prepared.";


//An array to store what the player is carrying
var backpack = [];

//Initialize the player's input
var playersInput = "";

//Initialize the gameMessage
var gameMessage = "<br>Welcome to Life!<br> "
gameMessage += "The object of the game is to get a job so you can move into the real world.<br>";


//Create an array of actions the game understands
//and a variable to store the current action
var actionsIKnow
    = ["north","east", "south", "west", "help", "take", "buy", "talk", "volunteer", "study", "apply"];
var action = "";


//The img element
var image = document.querySelector("img");

//The input and output fields
var output = document.querySelector("#output");
var input = document.querySelector("#input");


//The button
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);
button.addEventListener("mousedown", mousedownHandler, false);
button.addEventListener("mouseout", mouseoutHandler, false);

//Listen for enter key presses
window.addEventListener("keydown", keydownHandler, false);

//Dispay the player's location
render();

function mousedownHandler()
{
    button.style.background
        = "-webkit-linear-gradient(top, rgba(0,0,0,0.2), rgba(255,255,255,0.3))";
    button.style.background
        = "-moz-linear-gradient(top, rgba(0,0,0,0.2), rgba(255,255,255,0.3))";
    button.style.background
        = "linear-gradient(top, rgba(0,0,0,0.2), rgba(255,255,255,0.3))";
}// End mousedownHandler function

function mouseoutHandler()
{
    button.style.background
        = "-webkit-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
    button.style.background
        = "-moz-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
    button.style.background
        = "linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
}// End mouseoutHandler function

function clickHandler()
{
    button.style.background
        = "-webkit-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
    button.style.background
        = "-moz-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
    button.style.background
        = "linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";

    playGame();
}// End clickHandler function

function keydownHandler(event)
{

    if(event.keyCode === 13)
    {
        playGame();
    }
}// End  keydownHandler function

function playGame() {
    //Get the player's input and convert it to lowercase
    playersInput = input.value;
    playersInput = playersInput.toLowerCase();

    //Initialize backpack variables
    var backpackAttire = backpack.indexOf("<b>Business Attire</b>");
    var backpackMoney = backpack.indexOf("<b>Money</b>");
    var backpackExp = backpack.indexOf("<b>Experience</b>");
    var backpackTrain = backpack.indexOf("<b>Training</b>");

    //Reset these variables from the previous turn
    gameMessage = "";
    action = "";

    //Figure out the player's action
    for (i = 0; i < actionsIKnow.length; i++) {
        if (playersInput.indexOf(actionsIKnow[i]) !== -1) {
            action = actionsIKnow[i];
            console.log("player's action: " + action);
            break;
        }
    }

    //initialize variables to check for new information


    //Choose the correct action
    switch (action) {
        case "north":
            if (mapLocation >= 3) {
                mapLocation -= 3;
            }
            else {
                gameMessage = blockedPathMessages[mapLocation];
            }
            break;

        case "east":
            if (mapLocation % 3 != 2) {
                mapLocation += 1;
            }
            else {
                gameMessage = blockedPathMessages[mapLocation];
            }
            break;

        case "south":
            if (mapLocation < 6) {
                mapLocation += 3;
            }
            else {
                gameMessage = blockedPathMessages[mapLocation];
            }
            break;

        case "west":
            if (mapLocation % 3 != 0) {
                mapLocation -= 1;
            }
            else {
                gameMessage = blockedPathMessages[mapLocation];
            }
            break;

        case "help":
            //Display a hint if there is one for this location
            if (helpMessages[mapLocation] !== "") {
                gameMessage = helpMessages[mapLocation] + "<br>";
            }
            //gameMessage += "<br> Try any of these words: "
            //gameMessage += "north, east, south, west <br> ";
            //gameMessage += "buy, talk, volunteer, study, apply,  help.";
            break;

        case "volunteer":
            volunteer();
            break;

        case "study":
            study();
            break;

        case "talk":
            talk();
            break;

        case "buy":
            buy();
            break;

        case "apply":
            apply();
            break;

        default:
            gameMessage = "I don't understand that.";
    }




    function volunteer() {
        if (map[mapLocation] === map[6]) {
            if (helpMessages[mapLocation] !== "Location Complete") {
                gameMessage = "The director at the volunteer center thanked you for your hard work and help. ";
                gameMessage += "They tell you that the experience you gained will be invaluable to employers.";

                //Add experience to your backpack
                backpack.push("<b>Experience</b>");

                //Reset location's help message
                helpMessages[mapLocation] = "Location Complete";

            }
            else {
                gameMessage = "The director thanks you for your continued support and help, however they suggest ";
                gameMessage += "that you take your experience and try to put it to good use.";
            }
        }
        else {
            gameMessage = "If you want to volunteer you should try going down to the Volunteer Center.";
        }

    }// End volunteer function

    function study() {
        switch (map[mapLocation]) {
            case map[0]:

                if (helpMessages[mapLocation] !== "Location Complete") {
                    gameMessage = "Your instructor congratulates you on your accomplishments and hands you a certificate!";

                    //Add training to your backpack
                    backpack.push("<b>Training</b>");

                    //Reset location's help message
                    helpMessages[mapLocation] = "Location Complete";
                }
                else {
                    gameMessage = "Your teacher commends you on your dedication to your chosen profession but suggest you ";
                    gameMessage += "try to get some real world experience or a job.";
                }
                break;

            case map[1]:
            case map[3]:

                gameMessage = "You spend a couple hours studying and refining your knowledge.";
                break;

            case map[2]:

                gameMessage = "You take some time to sit in the park by the pond and just relax while you study and ";
                gameMessage += "enjoy the sounds of nature.";
                break;

            case map[5]:

                gameMessage = "2 hours later and you are on page 5. However you and Mike have gotten quite far in ";
                gameMessage += "the game he just bought...";
                break;

            case map[6]:

                gameMessage = "You spend more time answering questions about what you are working on than you do ";
                gameMessage += "studying but you feel like you have learned a lot anyway.";
                break;

            case map[7]:

                gameMessage = "Your mentor helps you study the material you were struggling with on your own.";
                break;

            default:

                gameMessage = "It doesn't really feel like a good place to try and study.";

        }// End switch statement

    }// End study function


    function talk() {
        switch (map[mapLocation]) {
            case map[1]:

                if (helpMessages[mapLocation] !== "Location Complete") {
                    gameMessage = "You talk to your parents about the future and they offer to give you";
                    gameMessage += " money for business attire since you are working so hard";

                    //Add money to your backpack
                    backpack.push("<b>Money</b>");

                    //Reset the location's help message
                    helpMessages[mapLocation] = "Location Complete";
                }
                else {
                    gameMessage = "I don't think your parents are going to give you anymore money.";
                }
                break;

            case map[5]:

                if (helpMessages[mapLocation] !== "Location Complete") {
                    gameMessage = "As you talk with Mike about your future his dad walks through, he overhears ";
                    gameMessage += "what you two are talking about and says that he works at a firm downtown. ";
                    gameMessage += "He says that if you come and apply he will try to pull some strings for you.";

                    //Add connections to your backpack
                    backpack.push("<b>Connections</b>");

                    //Reset the location's help message
                    helpMessages[mapLocation] = "Location Complete";
                }
                else {
                    gameMessage = "Mike's dad tells you to go become worthy of being hired, he can't help ";
                    gameMessage += "those that don't help themselves.";
                }
                break;

            case map[7]:

                if (helpMessages[mapLocation] !== "Location Complete") {
                    gameMessage = "As you talk with your mentor about the future and your goals he shares with you ";
                    gameMessage += "the best wisdom he has for being a good employee and most of all a good person.";


                    //Add wisdom to backpack
                    backpack.push("<b>Wisdom</b>");


                    //Reset the location's help message
                    helpMessages[mapLocation] = "Location Complete";
                }
                else {
                    gameMessage = "Your mentor says that you are welcome to stop by anytime but that he has shared ";
                    gameMessage += "all the wisdom he has and it's time to get your own wisdom through experiences.";
                }
                break;

            case map[3]:



                if ((backpackExp !== -1) && (backpackTrain !== -1)) {

                    if (helpMessages[mapLocation] !== "Location Complete") {
                        gameMessage = "As you talk to the librarian she offers to help you create a resume using the ";
                        gameMessage += "volunteer experience and training you have accumulated.";

                        //Add resume to your backpack
                        backpack.push("<b>Resume</b>");

                        //Reset the location's help message
                        helpMessages[mapLocation] = "Location Complete";

                    }
                    else {
                        gameMessage = "The librarian says there is nothing left she can help you with and that you are ";
                        gameMessage += "welcome to use the libraries resources but that you must BE QUIET.";
                    }
                }// End !== -1 IF
                else {
                    gameMessage = "The librarian tells you that if you go get some training and volunteer";
                    gameMessage += " experience she can help you create a resume to apply for jobs.";
                }
                break;

            case map[0]:

                gameMessage = "Your instructor reminds you that talking while others are trying to test is frowned upon";
                break;

            case map[2]:

                gameMessage = "You spend the next couple hours reminiscing with your childhood friends about how it ";
                gameMessage += "used to be.";
                break;

            case map[4]:

                gameMessage = "The clerk at the store suggests buying some business attire to help look more ";
                gameMessage += "professional at the job fair.";
                break;

            case map[6]:

                if (backpackExp === -1) {
                    gameMessage = "You should try volunteering. You would be amazed at what you can gain from doing so.";
                }
                else {
                    gameMessage = "Thank you for volunteering. We hope you enjoyed the experience as much as the ";
                    gameMessage += "kids did. We also hope to see you again.";
                }
                break;

            case map[8]:

                gameMessage = "When you feel prepared to try and enter the job market and the real world come back and ";
                gameMessage += "apply with the companies that are hiring. You only get one chance to make a first ";
                gameMessage += "impression, make sure you are as ready as you can be."
                break;

        } // End switch statement

    }// End talk function

    function buy() {
        if (map[mapLocation] === map[4]) {


            if (backpackAttire === -1) {
                if (backpackMoney !== -1) {
                    gameMessage = "You give the clerk the money your parent's gave you to buy your business attire.";

                    //Remove the money from your backpack
                    backpack.splice(backpackMoney, 1);

                    //Add business attire to your backpack
                    backpack.push("<b>Business Attire</b>");

                    //Reset helpMessages
                    helpMessages[mapLocation] = "Location Complete";
                }
                else {
                    gameMessage = "You need to have money to buy the business attire.";
                }
            }
            else {
                gameMessage = "You already have the business attire and no more money to buy another set.";

            }
        }// end mapLocation if
        else {
            gameMessage = "There is nothing here to purchase.";
        }
    }// End of buy function

    function apply() {
        //Check to make sure you are in correct mapLocation
        if (map[mapLocation] === map[8]) {
            if ((backpack.length) > 2) {
                if(backpackMoney !== -1){
                backpack.splice(backpackMoney, 1);
                }

                //initialize the variable to decide if you get the job
                var randomVariable = Math.ceil(Math.random() * 10);

                switch (backpack.length) {
                    case 2:
                        if(randomVariable > 9){
                            endGame();
                        }

                        else{
                            gameMessage = "We are sorry but unfortunately you did not get a job. Perhaps you should ";
                            gameMessage += "go prepare more before applying again.";
                        }
                        break;

                    case 3:
                        if(randomVariable > 7){
                            endGame();
                        }

                        else{
                            gameMessage = "We are sorry but unfortunately you did not get a job. Perhaps you should ";
                            gameMessage += "go prepare more before applying again.";
                        }
                        break;

                    case 4:
                        if(randomVariable > 5){
                            endGame();
                        }

                        else{
                            gameMessage = "We are sorry but unfortunately you did not get a job. If you feel adequately ";
                            gameMessage += "prepared you can apply for a different position. If not you can go and ";
                            gameMessage += "prepare more.";
                        }
                        break;

                    case 5:
                        if(randomVariable > 3){
                            endGame();
                        }

                        else{
                            gameMessage = "We are sorry but unfortunately you did not get a job.";
                        }
                        break;

                    case 6:
                        if(randomVariable > 1){
                            endGame();
                        }

                        else{
                            gameMessage = "We are sorry but unfortunately you are not right for this job. You are a ";
                            gameMessage += "fantastic applicant and we hope that you will consider looking at another ";
                            gameMessage += "position we have.";
                        }
                        break;
                }// End switch statement


            }// End backpack length if

            else {
                gameMessage = "You should go prepare more before you apply for jobs.";
            }

        }// End mapLocation if

        else {
            gameMessage = "If you want to apply for jobs you should go to the job fair.";
        }
    }// End apply function



     //Render the game
    render();

}// End playGame function
function render()
{
    //Render the location
    output.innerHTML = map[mapLocation];
    image.src = "../images/" + images[mapLocation];



    //Display the player's backpack contents
    if(backpack.length !== 0)
    {
        output.innerHTML += "<br>You are carrying: " +  backpack.join(", ");
    }

    //Display the game message
    output.innerHTML += "<br><em>" + gameMessage + "</em>";

    //Display the controls
    output.innerHTML +="<br><br>These are the controls to play the game: <strong><br>" + actionsIKnow.join(", ") + "</strong>";

    //Clear the input field
    input.value = "";
} // End of Render Function

function endGame()
{
    //Remove the keyboard listener to end the game
    window.removeEventListener("keydown", keydownHandler, false);
} //End endGame function

