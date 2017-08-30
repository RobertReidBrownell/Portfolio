//Create the map
var map = [];

map[0] = "The local career training center.";
map[1] = "Home, sweet home.";
map[2] = "The park where you have always played with your best friend Mike.";
map[3] = "The library.";
map[4] = "The clothing store.";
map[5] = "Mike's house.";
map[6] = "The volunteer center to help the local middle and high school students with their class work.";
map[7] = "Your mentor's house..";
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

helpMessages[0] = "";
helpMessages[1] = "";
helpMessages[2] = "";
helpMessages[3] = "";
helpMessages[4] = "";
helpMessages[5] = "";
helpMessages[6] = "";
helpMessages[7] = "";
helpMessages[8] = "";

//Create the objects and set their locations
var items = ["stone"];
var itemLocations = [6];

//An array to store what the player is carrying
var backpack = [];

//Initialize the player's input
var playersInput = "";

//Initialize the gameMessage
var gameMessage = "<br>Welcome to Life! "
gameMessage += "Try any of these words: "
gameMessage += "north, east, south, west, take, drop, ";
gameMessage += "use,  help.";

//Create an array of actions the game understands
//and a variable to store the current action
var actionsIKnow
    = ["north","east", "south", "west",
    "help", "take", "use", "drop"];
var action = "";

//An array of items the game understands
//and a variable to store the current item
var itemsIKnow = [""];
var item = "";

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
}

function mouseoutHandler()
{
    button.style.background
        = "-webkit-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
    button.style.background
        = "-moz-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
    button.style.background
        = "linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
}

function clickHandler()
{
    button.style.background
        = "-webkit-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
    button.style.background
        = "-moz-linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
    button.style.background
        = "linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";

    playGame();
}

function keydownHandler(event)
{

    if(event.keyCode === 13)
    {
        playGame();
    }
}

function playGame()
{
    //Get the player's input and convert it to lowercase
    playersInput = input.value;
    playersInput = playersInput.toLowerCase();

    //Reset these variables from the previous turn
    gameMessage = "";
    action = "";

    //Figure out the player's action
    for(i = 0; i < actionsIKnow.length; i++)
    {
        if(playersInput.indexOf(actionsIKnow[i]) !== -1)
        {
            action = actionsIKnow[i];
            console.log("player's action: " + action);
            break;
        }
    }

    //Figure out the item the player wants
    for(i = 0; i < itemsIKnow.length; i++)
    {
        if(playersInput.indexOf(itemsIKnow[i]) !== -1)
        {
            item = itemsIKnow[i];
            console.log("player's item: " + item);
        }
    }

    //Choose the correct action
    switch(action)
    {
        case "north":
            if(mapLocation >= 3)
            {
                mapLocation -= 3;
            }
            else
            {
                gameMessage = blockedPathMessages[mapLocation];
            }
            break;

        case "east":
            if(mapLocation % 3 != 2)
            {
                mapLocation += 1;
            }
            else
            {
                gameMessage = blockedPathMessages[mapLocation];
            }
            break;

        case "south":
            if(mapLocation < 6)
            {
                mapLocation += 3;
            }
            else
            {
                gameMessage = blockedPathMessages[mapLocation];
            }
            break;

        case "west":
            if(mapLocation % 3 != 0)
            {
                mapLocation -= 1;
            }
            else
            {
                gameMessage = blockedPathMessages[mapLocation];
            }
            break;

        case "help":
            //Display a hint if there is one for this location
            if(helpMessages[mapLocation] !== "")
            {
                gameMessage = helpMessages[mapLocation] + " ";
            }
            gameMessage += "Try any of these words: "
            gameMessage += "north, east, south, west, take, drop, ";
            gameMessage += "use, .";
            break;

        case "take":
            takeItem()
            break;

        case "drop":
            dropItem();
            break;

        case "use":
            useItem();
            break;

        default:
            gameMessage = "I don't understand that.";
    }

    //Render the game
    render();
}

function takeItem()
{
    //Find the index number of the item in the items array
    var itemIndexNumber = items.indexOf(item);

    //Does the item exist in the game world
    //and is it at the player's current location?
    if(itemIndexNumber !== -1
        && itemLocations[itemIndexNumber] === mapLocation)
    {
        gameMessage = "You take the " + item + ".";

        //Add the item to the player's backpack
        backpack.push(item);

        //Remove the item from the game world
        items.splice(itemIndexNumber, 1);
        itemLocations.splice(itemIndexNumber, 1);

        //Display in the console for testing
        console.log("World items: " + items);
        console.log("backpack items: " + backpack);
    }
    else
    {
        //Message if you try and take an item
        //that isn't in the current location
        gameMessage = "You can't do that.";
    }
}

function dropItem()
{
    //Try to drop the item only if the backpack isn't empty
    if(backpack.length !== 0)
    {
        //Find the item's array index number in the backpack
        var backpackIndexNumber = backpack.indexOf(item);

        //The item is in the backpack if backpackIndex number isn't -1
        if(backpackIndexNumber !== -1)
        {

            //Tell the player that the item has been dropped
            gameMessage = "You drop the " + item + ".";

            //Add the item from the backpack to the game world
            items.push(backpack[backpackIndexNumber]);
            itemLocations.push(mapLocation);

            //Remove the item from the player's backpack
            backpack.splice(backpackIndexNumber, 1);
        }
        else
        {
            //Message if the player tries to drop
            //something that's not in the backpack
            gameMessage = "You can't do that.";
        }
    }
    else
    {
        //Message if the backpack is empty
        gameMessage = "You're not carrying anything.";
    }
}

function useItem()
{
    //1. Find out if the item is in the backpack

    //Find the item's array index number in the backpack
    var backpackIndexNumber = backpack.indexOf(item);

    //If the index number is -1, then it isn't in the backpack.
    //Tell the player that he or she isn't carrying it.
    if(backpackIndexNumber === -1)
    {
        gameMessage = "You're not carrying it.";
    }

    //If there are no items in the backpack, then
    //tell the player the backpack is empty
    if(backpack.length === 0)
    {
        gameMessage += " Your backpack is empty";
    }

    //2. If the item is found in the backpack
    //figure out what to do with it
    if(backpackIndexNumber !== -1)
    {
        switch(item)
        {
            case "flute":
                if(mapLocation === 8)
                {
                    gameMessage = "Beautiful music fills the air.";
                    gameMessage += "A wizend old man steps outside "
                    gameMessage += "and hands you a sword!";

                    //Add the sword to the world
                    items.push("sword");
                    itemLocations.push(mapLocation);

                    //Reset the location's help message
                    helpMessages[mapLocation] = "";
                }
                else
                {
                    gameMessage = "You try and play the flute "
                    gameMessage += "but it makes no sound here.";
                }
                break;

            case "sword":
                if(mapLocation === 3)
                {
                    gameMessage
                        = "You swing the sword and slay the dragon! ";
                    gameMessage
                        += "You've saved the forest of Lyrica!";

                    //Reset the location's help message
                    helpMessages[mapLocation] = "";
                }
                else
                {
                    gameMessage
                        = "You swing the sword listlessly.";
                }
                break;

            case "stone":
                if(mapLocation === 1)
                {
                    gameMessage = "You drop the stone in the well.";
                    gameMessage += " A magical flute appears!";

                    //Remove the stone from the player's backpack
                    backpack.splice(backpackIndexNumber, 1);

                    //Add the flute to the world
                    items.push("flute");
                    itemLocations.push(mapLocation);

                    //Reset the location's help message
                    helpMessages[mapLocation] = "";
                }
                else
                {
                    gameMessage
                        = "You fumble with the stone in your pocket.";
                }
                break;
        }
    }
}

function render()
{
    //Render the location
    output.innerHTML = map[mapLocation];
    image.src = "../images/" + images[mapLocation];

    //Display an item if there's one in this location
    //1. Loop through all the game items
    for(var i = 0; i < items.length; i++)
    {
        //Find out if there's an item at this location
        if(mapLocation === itemLocations[i])
        {
            //Display it
            output.innerHTML
                += "<br>You see a <strong>"
                + items[i]
                + "</strong> here.";
        }
    }

    //Display the player's backpack contents
    if(backpack.length !== 0)
    {
        output.innerHTML += "<br>You are carrying: " + backpack.join(", ");
    }

    //Display the game message
    output.innerHTML += "<br><em>" + gameMessage + "</em>";

    //Clear the input field
    input.value = "";
}
