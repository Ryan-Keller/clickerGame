var brightIdeas = 0;
var clickingPower= 10;
var cursorCost = 15;
var cursors = 0;

var grandmaCost = 150;
var grandmas = 0;
function buyCursor() {
    if (brightIdeas >= cursorCost){
            brightIdeas -= cursorCost;
            cursors += 1;
            cursorCost = Math.round(cursorCost * 1.15);
            reRender();


    }
}

function buyGrandma() {
    if (brightIdeas >= grandmaCost){
            brightIdeas -= grandmaCost;
            grandmas += 1;
            grandmaCost = Math.round(grandmaCost * 1.25);
            reRender();

    }
}
function reRender() {
    document.getElementById('brightIdeas').innerHTML = brightIdeas;
    document.getElementById('grandmaCost').innerHTML = grandmaCost;
    document.getElementById('grandmas').innerHTML = grandmas;
    document.getElementById('cursorCost').innerHTML = cursorCost;
    document.getElementById('cursors').innerHTML = cursors;
    document.title = brightIdeas + "Ideas - the main stream"
    updateIdeasPerSecond();
}


function addToBrightIdeas(amount) {
    brightIdeas += amount;
    document.getElementById('brightIdeas').innerHTML = brightIdeas;
}

function updateIdeasPerSecond(){
    brightIdeasPerSecond = cursors + grandmas * 25;
    document.getElementById("brightIdeasPerSecond").innerHTML = brightIdeasPerSecond;
}

setInterval(function() {
    brightIdeas += cursors;
    brightIdeas += grandmas * 25;
    reRender()
}, 1000);
