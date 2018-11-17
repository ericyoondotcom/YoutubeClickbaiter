console.log("Youtube Clickbaiter Enabled");

var additions = [
    "10/10 must see!",
    "1000% oddly satisfying",
    "If you get 100% you are a genious",
    "I bet you $1000 you will laugh",
    "If you don't laugh you have no soul",
    "Cringe compilation",
    "24 hour challenge",
    "Prank gone wrong: police called!",
    "*Not clickbait*",
    "Prank gone wrong: almost died",
    "Social experiment gone wrong",
    "Minecraft let's play",
    "You won't believe what happened",
    "Watch to the end to see what happened",
    "Revealing my deepest secrets...",
    "Prank on police gone wrong",
    "Face reveal!",
    "I'm quitting Youtube",
    "Almost arrested",
    "Watch to the end to find out what happened",
    "Never do this at home",
    "I could have died!",
    "Cute cat compilation",
    "Only .0001% will pass"
];

setTimeout(Clickbaitify, 3000); //Wait a sec for the whole page to load

function Clickbaitify(){

    var x = document.querySelector("body").querySelectorAll("#video-title, .title > yt-formatted-string");
    for(var i of x){
       i.textContent = (i.textContent.replace(/[.?!]/, "?!") + " – " + additions[Math.floor(Math.random() * additions.length)]).toUpperCase();
    }

}